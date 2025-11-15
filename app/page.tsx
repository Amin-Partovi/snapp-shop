import { Product } from "@/lib/products/types";
import { endpoints } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const products: Product[] = await fetch(endpoints.products, {
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return (
    <div>
      {products.map((prod) => (
        <Image src={prod.imageUrl} alt={prod.name} key={prod.id} />
      ))}
    </div>
  );
}
