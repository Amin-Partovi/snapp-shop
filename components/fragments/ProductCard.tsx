import { ProductT } from "@/lib/products/types";
import { messages } from "@/messages/messages";
import { formatWithCommas, routes } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../elements";

interface ProductCardProps {
  product: ProductT;
  priority?: boolean;
}

const ProductCard = ({ product, priority }: ProductCardProps) => {
  const { name, imageUrl, price, id } = product;
  return (
    <Card className="w-72 h-96">
      <Link href={routes.product(id)}>
        <Image
          src={imageUrl}
          alt={name}
          width={288}
          height={288}
          priority={priority}
      
        />
        <div className="rounded-xl -translate-y-2 bg-white p-3 flex flex-col gap-2">
          <span className="text-lg font-semibold line-clamp-1 text-ellipsis">
            {name}
          </span>
          <div className="flex gap-1">
            <span className="text-base font-medium">
              {formatWithCommas(price)}
            </span>
            <span className="text-sm text-gray-400 font-medium">
              {messages.rial}
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;
