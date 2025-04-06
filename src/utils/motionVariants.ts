export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'up', delay: number = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
        delay: delay,
      },
    },
  };

  return variants;
};

export const staggerContainer = (staggerChildren: number = 0.1) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
      },
    },
  };
};

export const staggerItem = (direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'up') => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
      },
    },
  };
}; 