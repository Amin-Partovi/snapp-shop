import { ProductCard } from "@/components/fragments";
import { ProductT } from "@/lib/products/types";
import { messages } from "@/messages/messages";

interface ProductListProps {
  products: ProductT[];
}
const ProductList = async ({ products }: ProductListProps) => {
  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <p>{messages.no_product}</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-20 justify-items-center">
      {products.map((prod, index) => (
        <ProductCard product={prod} key={prod.id} priority={index < 5} />
      ))}
    </div>
  );
};

export default ProductList;
