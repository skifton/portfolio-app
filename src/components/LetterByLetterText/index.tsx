import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface IProps {
  text: string;
  background: string;
}

const LetterByLetterText: React.FC<IProps> = ({ text, background }) => {
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const textArray = text.split("");

  useEffect(() => {
    // Trigger animation when component mounts
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      className={`bg-${background} text-white p-8`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {textArray.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LetterByLetterText;
