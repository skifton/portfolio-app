import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProps {
  children: React.ReactNode;
}

const FadeInOnScroll: React.FC<IProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold as needed
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
