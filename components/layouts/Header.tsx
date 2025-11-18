import { messages } from "@/messages/messages";
import ShoppingCart from "../fragments/ShoppingCart";
import Container from "./Container";
import Link from "next/link";
import { routes } from "@/utils";

const Header = () => {
  return (
    <header className=" border-b-2 border-gray-100 ">
      <Container>
        <div className="flex justify-between items-center h-20 ">
          <Link className="text-violet-600 font-bold text-3xl" href={routes.home}>
            {messages.your_shop}
          </Link>

          <ShoppingCart />
        </div>
      </Container>
    </header>
  );
};

export default Header;
