"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((char, idx) => (
      <motion.span key={idx} variants={textVariant2}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);
/* eslint-disable no-unused-vars */
export const TitleText = ({ title, textStyles }) => <h2>Title Text</h2>;
