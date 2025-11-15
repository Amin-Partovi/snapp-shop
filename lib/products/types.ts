import { StaticImageData } from "next/image";

export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string | StaticImageData;
    description: string;
}
