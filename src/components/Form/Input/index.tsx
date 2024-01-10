import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  error?: boolean;
  helperText?: string;
  textarea?: boolean;
}

const Input: React.FC<IProps> = ({
  className,
  error,
  helperText,
  textarea,
  ...props
}) => {
  return !textarea ? (
    <motion.div
      className="space-y-2 w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <input
        className={clsx(
          `${
            error ? "border-b-2 border-red-500" : "border-b-2 border-gray-500"
          } outline-none w-full bg-transparent placeholder:text-lg placeholder:font-semibold placeholder:text-white focus:border-white pb-5`,
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{helperText}</p>}
    </motion.div>
  ) : (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <textarea
        className={clsx(
          `${
            error ? "border-b-2 border-red-500" : "border-b-2 border-gray-500"
          } outline-none w-full bg-transparent placeholder:text-lg placeholder:font-semibold placeholder:text-white focus:border-white pb-5 min-h-[7rem]`,
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{helperText}</p>}
    </motion.div>
  );
};

export default Input;
