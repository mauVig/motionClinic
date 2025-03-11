import React, { useRef } from 'react';
import WhoIs from './WhoIs';
import Experience from './Experience';
import Objective from '../objetiveText/Objective';
import { motion, useTransform, useScroll } from 'motion/react';

const WrapChangeBack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const COLOR_CHANGE_START = 0.2; 

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const colorProgress = useTransform(
    scrollYProgress,
    [0, COLOR_CHANGE_START, 1],
    [0, 0, 1],
    { clamp: false }
  );

  const calculateBackground = (progress: number): string => {
    const startR = 19;
    const startG = 19;
    const startB = 19;
    const endR = 255;
    const endG = 255;
    const endB = 255;

    const r = Math.round(startR + (endR - startR) * progress);
    const g = Math.round(startG + (endG - startG) * progress);
    const b = Math.round(startB + (endB - startB) * progress);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const backgroundColor = useTransform(colorProgress, (progress) => calculateBackground(progress));

  return (
    <motion.section
      ref={containerRef}
      className="relative"
      style={{ backgroundColor }}
    >
      <div className="absolute -top-[150px] left-0 right-0 h-[150px] bg-gradient-to-t from-backBlack " />

      <Objective />
      <Experience />
      <WhoIs />
    </motion.section>
  );
};

export default WrapChangeBack;