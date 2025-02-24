import Link from "next/link";
import { FC } from "react";
import Logo from "../icons/logo";
import IconShoppingBag from "../icons/shopping-bag";



const Header: FC = () => {

    return (
        <div className="absolute w-screen z-[1000] ">
        <header className="flex items-center  max-w-[1200px]  m-auto justify-between p-8">
            <Link href={"/"}>
                <Logo size={120} />
            </Link>
            <nav>
                <ul className="flex items-center justify-center space-x-8">
                    <li>
                        <Link href={"/"} className="italic text-2xl">Shop</Link>
                    </li>
                    <li>
                        <ShoppingBagButton />
                    </li>
                </ul>
            </nav>
        </header></div>
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