import { Button } from "@/components/elements";
import { ProductCard } from "@/components/fragments";
import { Product } from "@/lib/products/types";
import { endpoints } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const products: Product[] = await fetch(endpoints.products, {
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return (
    <div className="flex gap-6 flex-wrap">
      {products.map((prod) => (
        <ProductCard product={prod} key={prod.id} />
      ))}
      <Button />
    </div>
  );
}
