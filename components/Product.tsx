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
    <div className="flex flex-col items-center border-b hover:shadow-lg hover:rounded-2xl py-4 h-full justify-between gap-16  w-80 px-8">
      <Link
        href={`/products/product/${data.id}`}
        className="flex items-center flex-col"
      >
        <div className="w-full h-32 relative ">
          <Image
            src={data.thumbnailUrl}
            alt={data.thumbnailAlt}
            className="object-contain"
            fill
          />
        </div>
        <h2 className="text-3xl font-bold">{data.title}</h2>
      </Link>
      <button
        className="text-gray-50 bg-sky-500 p-5 rounded-lg w-fit hover:bg-sky-400 font-bold duration-300"
        onClick={() =>
          cartState.addItemToCart({
            title: data.title,
            price: data.price,
            id: data.id,
            count: 1,
          })
        }
      >
        Add To Cart
      </button>
    </div>
  );
};
