import { products } from "@/lib/products/data";
import { NextResponse } from "next/server";



export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    const { id } = await params

    const product = products.find((p) => p.id === id);

    if (!product) {
        return NextResponse.json(
            { message: "Product not found" },
            { status: 404 }
        );

    }

    return NextResponse.json(product);
}
