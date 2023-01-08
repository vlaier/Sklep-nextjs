import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductDetails } from "../../../components/Product";
import { NextSeo } from "next-seo";
const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś się popsuło...</div>;
  }
  return (
    <div>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://sklep-nextjs-alpha.vercel.app/products/product/${data.id}`}
        openGraph={{
          url: `https://sklep-nextjs-alpha.vercel.app/products/product/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.image,
              width: 800,
              height: 600,
              alt: data.title,
              type: "image/jpeg",
            },
          ],
          siteName: "Next Sklep",
        }}
      />
      <ProductDetails
        data={{
          id: data.id,
          title: data.title,
          description: data.description,
          longDescription: data.longDescription,
          thumbnailUrl: data.image,
          thumbnailAlt: data.title,
          rating: data.rating.rate,
        }}
      />
    </div>
  );
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${params?.productId}`
  );
  const data: StoreApiResponse | null = await res.json();
  return {
    props: {
      data,
    },
  };
};
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

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
  const data: StoreApiResponse[] = await res.json();
  return {
    paths: data.map((product) => {
      return { params: { productId: product.id.toString() } };
    }),
    fallback: false,
  };
};
