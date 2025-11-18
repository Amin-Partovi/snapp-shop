import { ProductCard } from "@/components/fragments";
import { ProductT } from "@/lib/products/types";
import { endpoints } from "@/utils";

export default async function Home() {
  const products: ProductT[] = await fetch(endpoints.products, {
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return (
    <div className="grid grid-cols-4 gap-10">
      {products.map((prod) => (
        <ProductCard product={prod} key={prod.id} />
      ))}
    </div>
  );
}
