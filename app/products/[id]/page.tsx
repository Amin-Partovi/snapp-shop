import { ProductDetails } from "@/components/pages";
import { ProductT } from "@/lib/products/types";
import { endpoints } from "@/utils";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { messages } from "@/messages/messages";

interface ProductPageParams {
  params: Promise<{ id: string }>;
}

async function fetchProduct(id: string): Promise<ProductT> {
  const res: Response = await fetch(`${endpoints.products}/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error(`Failed to fetch product: ${res.status}`);
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: ProductPageParams): Promise<Metadata> {
  const { id } = await params;

  try {
    const product = await fetchProduct(id);

    return {
      title: `${messages.shop} | ${product.name} `,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description.substring(0, 160),
        images: [
          {
            url: product.imageUrl.toString(),
            width: 600,
            height: 600,
            alt: product.name,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: product.name,
        description: product.description.substring(0, 160),
      },
      alternates: {
        canonical: `/products/${id}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: messages.err_fetching_data,
      description: messages.err_fetching_data_description,
    };
  }
}

export default async function ProductPage({ params }: ProductPageParams) {
  const { id } = await params;

  const product = await fetchProduct(id);

  return <ProductDetails product={product} />;
}
