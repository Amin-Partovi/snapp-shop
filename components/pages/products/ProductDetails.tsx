import { ProductT } from "@/lib/products/types";
import { messages } from "@/messages/messages";
import { formatWithCommas, routes } from "@/utils";
import Image from "next/image";

import {
  AddToCart,
  IncrementAndDecrementProduct,
} from "@/components/fragments";
import { ChevronRightCircle } from "lucide-react";
import Link from "next/link";

interface ProductDetailsProps {
  product: ProductT;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { description, imageUrl, name, price } = product;

  return (
    <div className="grid py-20 gap-8 grid-cols-1 lg:grid-cols-3 xl:grid-cols-5">
      <div className="lg:col-span-3 xl:col-span-5">
        <Link href={routes.home} title="back to home">
          <ChevronRightCircle width={40} height={40} color="gray" />
        </Link>
      </div>

      <div className="col-span-1 xl:col-span-2">
        <Image
          priority
          src={imageUrl}
          alt={name}
          width={600}
          height={600}
          className="border border-gray-100 rounded-2xl w-full h-auto object-cover"
        />
      </div>

      <section className="border border-gray-100 rounded-2xl p-6 h-full col-span-1 xl:col-span-2 space-y-10">
        <h1 className="text-3xl lg:text-5xl font-bold">{name}</h1>
        <p className="font-semibold text-gray-500 text-justify">
          {description}
        </p>
      </section>

      <div className="flex flex-col justify-between col-span-1 border border-gray-100 rounded-2xl p-6 gap-8">
        <section className="bg-violet-200 p-4 rounded-2xl text-center">
          <span className="text-xl font-bold">{formatWithCommas(price)}</span>
          <span className="text-xl text-gray-400 font-medium mr-2">
            {messages.rial}
          </span>
        </section>
        <div className="flex flex-col items-center gap-4">
          <IncrementAndDecrementProduct id={product.id} />

          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
