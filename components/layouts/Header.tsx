import { messages } from "@/messages/messages";
import ShoppingCart from "../fragments/ShoppingCart";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-20">
      <h1 className="text-violet-600 font-bold text-3xl">
        {messages.your_shop}
      </h1>

      <ShoppingCart />
    </header>
  );
};

export default Header;
