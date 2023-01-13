import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import { ProductListItem } from "../../../components/Product";
import { Pagination } from "../../../components/Pagination";
const ProductsPage = ({
  data,
  pageNumber,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ul className="grid grid-cols-3 gap-8">
        {data.map((product) => {
          return (
            <li key={product.id}>
              <ProductListItem
                data={{
                  id: product.id,
                  title: product.title,
                  thumbnailUrl: product.image,
                  thumbnailAlt: product.title,
                  price: product.price,
                }}
              />
            </li>
          );
        })}
      </ul>
      <Pagination
        howManyPages={"infinite"}
        currentPageNumber={Number(pageNumber)}
      />
    </>
  );
};

export default ProductsPage;

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ pageNumber: string }>) => {
  const res = await fetch(
    ` https://naszsklep-api.vercel.app/api/products?take=25&offset=${
      Number(params?.pageNumber) * 25
    }`
  );
  const data: StoreApiResponse[] = await res.json();
  const pageNumber = params?.pageNumber;
  return {
    props: {
      data,
      pageNumber,
    },
  };
};
interface StoreApiResponse {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export const getStaticPaths = async () => {
  return {
    paths: [...Array(10).keys()].map((pageNumber) => {
      return { params: { pageNumber: pageNumber.toString() } };
    }),
    fallback: "blocking",
  };
};
