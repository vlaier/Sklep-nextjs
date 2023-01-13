import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Markdown } from "./Markdown";
import { MarkdownResult } from "../utils";
import { useCartState } from "./Cart/CartContext";
interface ProductDetails {
  id: string;
  title: string;
  description: string;
  longDescription: MarkdownResult;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  price: number;
}
type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt" | "price"
>;
interface ProductProps {
  data: ProductDetails;
}
interface ProductListItemProps {
  data: ProductListItem;
}
export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div className="px-8">
      <div className="object-cover h-16">
        {/* <Image
          fill
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          className="object-contain"
        /> */}
      </div>

      <article className="prose lg:prose-xl">
        <Markdown content={data.longDescription} />
      </article>

      <small>{data.rating}</small>
    </div>
  );
};

export const ProductListItem = ({ data }: ProductListItemProps) => {
  const cartState = useCartState();
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
      <div
        onClick={() =>
          cartState.addItemToCart({
            title: data.title,
            price: data.price,
            id: data.id,
          })
        }
      >
        Add To Cart
      </div>
    </>
  );
};
