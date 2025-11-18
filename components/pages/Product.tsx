import { ProductT } from "@/lib/products/types";
import { messages } from "@/messages/messages";
import { formatWithCommas } from "@/utils";
import Image from "next/image";
import React from "react";
import { Button } from "../elements";
import { ShoppingCartIcon } from "lucide-react";

interface ProductProps {
  product: ProductT;
}
const Product = async ({ product }: ProductProps) => {
  const { description, id, imageUrl, name, price } = product;
  return (
    <div className="grid py-20 gap-10 grid-cols-5">
      <Image
        priority
        src={imageUrl}
        alt={name}
        className="border border-gray-100 rounded-2xl col-span-2"
      />
      <div className="flex flex-col gap-10 col-span-2 border border-gray-100 rounded-2xl p-6 text-justify">
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="font-semibold text-gray-500">{description}</p>
      </div>

      <div className="border border-gray-100 rounded-2xl p-6 text-justify flex flex-col justify-between">
        <div className="bg-violet-200 p-4 rounded-2xl space-x-1 flex justify-center items-center">
          <span className="text-xl font-bold">{formatWithCommas(price)}</span>
          <span className="text-xl text-gray-400 font-medium">
            {messages.rial}
          </span>
        </div>

        <Button size="lg" iconLeft={<ShoppingCartIcon />} fluid>
          {messages.add_to_card}
        </Button>
      </div>
    </div>
  );
};

export default Product;
