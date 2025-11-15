import { products } from "@/lib/products/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(products);
}
