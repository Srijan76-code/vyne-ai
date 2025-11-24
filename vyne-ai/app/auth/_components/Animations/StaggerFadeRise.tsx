// components/animations/StaggerFadeRise.jsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import { staggerContainerVariants } from './variants';

type StaggerFadeRiseProps = {
  children?: ReactNode;
  className?: string;
};

const StaggerFadeRise = ({ children, className }: StaggerFadeRiseProps) => {
  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerFadeRise;

