'use client';
import { FC, useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface HeadlineProps {
  text: string;
}

const Headline: FC<HeadlineProps> = ({ text }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [numBars, setNumBars] = useState(20);
  const [barHeights, setBarHeights] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      const bars = Math.floor(width / 16); 
      setNumBars(bars);

      const heights = Array.from({ length: bars }).map(
        () => Math.floor(Math.random() * 60) + 20
      );
      setBarHeights(heights);
    }
  }, [text]);


  const barVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: (index: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.02,
      },
    }),
  };

  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold" ref={ref}>
        {text}
      </h1>
      <div className="flex justify-center items-center gap-2 mt-2 overflow-hidden">
        {Array.from({ length: numBars }).map((_, index) => (
          <motion.div
            key={index}
            className="bg-accent w-2 origin-bottom"
            style={{ height: `${barHeights[index]}px` }}
            custom={index}
            variants={barVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        ))}
      </div>
    </div>
  );
};

export default Headline;