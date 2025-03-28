"use client";

import { motion, Variant } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

const FadeIn = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}: FadeInProps) => {
  const initial: Variant = { opacity: 0 };
  const animate: Variant = { opacity: 1 };

  // Ajouter une animation directionnelle si spécifiée
  if (direction === 'up') {
    initial.y = 20;
    animate.y = 0;
  } else if (direction === 'down') {
    initial.y = -20;
    animate.y = 0;
  } else if (direction === 'left') {
    initial.x = 20;
    animate.x = 0;
  } else if (direction === 'right') {
    initial.x = -20;
    animate.x = 0;
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn; 