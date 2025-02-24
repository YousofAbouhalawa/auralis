import Link from "next/link";
import { FC } from "react";
import Logo from "../icons/logo";
import IconShoppingBag from "../icons/shopping-bag";



const Header: FC = () => {

    return (
        <header className="flex items-center w-full max-w-[1200px] m-auto justify-between p-4">
            <Link href={"/"}>
                <Logo size={120} />
            </Link>
            <nav>
                <ul className="flex items-center justify-center space-x-4">
                    <li>
                        <Link href={"/"} className="italic text-xl">Shop</Link>
                    </li>
                    <li>
                        <ShoppingBagButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

const ShoppingBagButton: FC = () => {
    return (
        <button className="flex items-center space-x-2">
            <IconShoppingBag size={30} />
        </button>
    );
}

export default Header;