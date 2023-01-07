import Link from "next/link";
import React from "react";
import Image from "next/image";
interface ProductDetails {
  id: number;
  title: string;
  description: string;
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
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} className="h-16" />
      <div className="">{data.description}</div>
      <small>{data.rating}</small>
    </>
  );
};

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <Link href={`/products/${data.id}`}>
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
