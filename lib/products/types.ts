import { StaticImageData } from "next/image";

export interface ProductT {
    id: string;
    name: string;
    price: number;
    imageUrl: string | StaticImageData;
    description: string;
}
