import React, { useState, useEffect } from "react";
import { ProductDetails } from "../../components/Product";
import { Pagination } from "../../components/Pagination-CSR";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

// queryClient
const queryClient = new QueryClient();

const getProducts = async (page: number) => {
  console.log(page);
  const res = await fetch(
    ` https://naszsklep-api.vercel.app/api/products?take=25&offset=${page * 2}`
  );
  const data: StoreApiResponse[] = await res.json();
  return data;
};
const Content = () => {
  const [page, setPage] = useState(0);
  const result = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
    keepPreviousData: true,
  });

  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className="grid grid-cols-3 gap-8">
        {result.data?.map((product) => {
          return (
            <li key={product.id}>
              <ProductDetails
                data={{
                  id: product.id,
                  title: product.title,
                  description: product.description,
                  longDescription: product.longDescription,
                  thumbnailUrl: product.image,
                  thumbnailAlt: product.title,
                  rating: product.rating.rate,
                }}
              />
            </li>
          );
        })}
      </ul>
      <Pagination
        howManyPages={10}
        currentPageNumber={page}
        setPage={setPage}
      />
    </>
  );
};
const ProductsCSRPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  );
};

export default ProductsCSRPage;

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
