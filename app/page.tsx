import { ProductList } from "@/components/pages";
import { ProductT } from "@/lib/products/types";
import { messages } from "@/messages/messages";
import { endpoints } from "@/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: messages.product_list_title,
    description: messages.product_list_description,
    keywords: messages.keywords,
    openGraph: {
      type: "website",
      locale: "fa_IR",
      siteName: messages.your_shop,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

async function fetchProducts(): Promise<ProductT[]> {
  const res: Response = await fetch(endpoints.products, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  return res.json();
}

export default async function Home() {
  const products = await fetchProducts();

  return <ProductList products={products} />;
}
