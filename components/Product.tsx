import Link from "next/link";
import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
interface ProductDetails {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}
type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt"
>;
interface ProductProps {
  data: ProductDetails;
}
interface ProductListItemProps {
  data: ProductListItem;
}
export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <Image
        width={16}
        height={9}
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
      />
      <ReactMarkdown className="prose lg:prose-xl">
        {data.longDescription}
      </ReactMarkdown>
      <small>{data.rating}</small>
    </>
  );
};

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <Link href={`/products/product/${data.id}`}>
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          width={16}
          height={9}
        />
        <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      </Link>
    </>
  );
};
