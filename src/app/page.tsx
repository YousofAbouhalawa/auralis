import Header from "@/components/layout/header";
import Headline from "@/components/ui/headline";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import FeatureList from "./feature-list";
import Footer from "@/components/layout/footer";

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
          <div className="absolute top-[75%] flex items-center justify-center w-full">
            <div>
              <CallToAction />
            </div>
          </div>
        </div>
      </section>
      <PageSection
        text="Designed for Audiophiles, Made for You."
        imageSrc="/images/section-2.png"
        imageAltText="Headphones"
      />
      <PageSection
        text="Wireless Freedom, High-Fidelity Sound."
        imageSrc="/images/section-3.png"
        imageAltText="Headphones In Hand"
      />
      <PageSection
        text="Crystal-Clear Sound, Zero Distractions."
        imageSrc="/images/section-4.png"
        imageAltText="Person Training"
      />
      <section className="items-center justify-center">
        <div className="h-[60rem] flex items-center flex-col gap-12 justify-center">
          <div>
            <Headline text="What makes us Different?" />
          </div>

        </div>
      </section>
      <FeatureList features={[
        "Wireless Freedom",
        "High-Fidelity Sound",
        "Crystal-Clear Sound",
        "Zero Distractions",
      ]} />
      <div className="h-[30rem] w-full flex items-center justify-center">
        <div>
          <CallToAction className="text-4xl px-12 p-5"/></div>
      </div>
      <Footer/>
    </div>
  );
}

interface PageSectionProps {
  text: string;
  imageSrc: string;
  imageAltText: string;
}

const CallToAction: FC<{
  className?: string;
}> = ({className}) => {
  return (
    <Link href={"#"} className={`text-2xl left-1/2 hover:brightness-90 transition -translate-x-1/2 font-bold bg-accent p-2 px-5 rounded-full ${className}`}>Shop Now & Upgrade Your Sound </Link>
  );
}

const PageSection: FC<PageSectionProps> = (props) => {
  const { text, imageSrc, imageAltText } = props;
  return (
    <section className="items-center justify-center">
      <div className="h-[40rem] flex items-center justify-center">
        <div>
          <Headline text={text} /></div>
      </div>
      <div className="w-full h-[52rem] relative overflow-hidden">
        <Image
          src={imageSrc}
          className="w-full h-full object-cover object-center"
          alt={imageAltText}
          layout="fill"
          priority
        />
      </div>

    </section>
  );
}




export default HomePage;