'use client';
import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FeatureListProps {
  features: string[];
}

const FeatureList: FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="my-32 space-y-[60vh]">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} index={index} />
      ))}
    </div>
  );
};

interface FeatureItemProps {
  text: string;
  index: number;
}

const FeatureItem: FC<FeatureItemProps> = ({ text, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });

  // Animate position and opacity based on scroll position
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [-200, 0] : [200, 0]  // Alternates left and right
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <div ref={ref} className="relative h-[50vh] flex items-center justify-center">
      <motion.div
        className="text-4xl font-light absolute"
        style={{ x, opacity }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default FeatureList;