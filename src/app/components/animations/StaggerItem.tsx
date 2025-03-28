"use client";

import { motion, Variant, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerItemProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

const StaggerItem = ({
  children,
  direction = 'up',
  duration = 0.5,
  className = '',
}: StaggerItemProps) => {
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

  const itemVariants: Variants = {
    hidden: initial,
    visible: {
      ...animate,
      transition: { duration },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerItem; 