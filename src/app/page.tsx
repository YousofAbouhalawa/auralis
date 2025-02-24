import Header from "@/components/layout/header";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="w-full h-[52rem] overflow-hidden">
          <Image
            src="/images/hero.png"
            className="w-full h-full object-cover object-center"
            alt="Hero Image"
            layout="fill"
            priority
          />
          <h1 className="text-5xl absolute top-[25%] left-1/2 -translate-x-1/2 font-thin">Where Clarity Meets Power</h1>
          <Link href={"#"} className="text-2xl absolute top-[75%] left-1/2 hover:brightness-90 transition -translate-x-1/2 font-bold bg-accent p-2 px-5 rounded-full">Shop Now & Upgrade Your Sound </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;