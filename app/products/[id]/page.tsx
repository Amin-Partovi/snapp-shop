import { Product } from "@/components/pages";
import { ProductT } from "@/lib/products/types";
import { endpoints } from "@/utils";
import { notFound } from "next/navigation";

interface ProductPageParams {
  params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }: ProductPageParams) {
  const { id } = await params;
  const res: Response = await fetch(`${endpoints.products}/${id}`);

  if (res.status === 404) {
    notFound();
  }
  const product: ProductT = await res.json();

  return <Product product={product} />;
}
