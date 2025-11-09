// components/animations/StaggerFadeRise.jsx
'use client';

import { motion } from 'framer-motion';

import { staggerContainerVariants } from './variants';


const StaggerFadeRise = ({ children, className }) => {
  return (
    <motion.div
      // Pass any custom styles
      className={className}
      
      // Use our exported variants
      variants={staggerContainerVariants}
      
      // Start in the "hidden" state
      initial="hidden"
      
      // Animate to "visible" when it enters the viewport
      whileInView="visible"
      
      // Only run this animation once
      // viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerFadeRise;

