import React, { useRef } from "react";
import { useStore } from '@/store/storeGlobal';
import { motion, useTransform, useScroll } from 'motion/react';

const WhoIs: React.FC = () => {
  const IMAGE_HEIGHT = window.innerWidth > 768 ? 400 : window.innerWidth > 640 ? 200 : 150;
  const MAX_WIDTH = window.innerWidth > 768 ? 400 : window.innerWidth > 640 ? 200 : 150;

  const containerRef = useRef<HTMLDivElement>(null);
  const { myLang } = useStore();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const width = useTransform(scrollYProgress, [0, 1], [0, MAX_WIDTH]);
  const height = useTransform(scrollYProgress, [0, 1], [0, IMAGE_HEIGHT]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1.8]);

  return (
    <section ref={containerRef} id='whoIs' className="h-[100vh] w-full pb-12 relative px-6 text-black flex items-center justify-center">
      <div className="flex items-center justify-center gap-2 relative">
        <div className="md:w-[150px] lg:w-[250px] flex justify-end">
          <span className="font-medium truncate transition-all duration-300 text-xl xs:text-3xl sm:text-5xl lx:text-7xl">{myLang ? 'This is' : 'El es'}</span>
        </div>
        <motion.div
          className="transition-all duration-300 ease-out overflow-hidden flex items-center justify-center rounded-full"
          style={{ width, height, opacity }}
        >
          <img
            src="/img/Andres.jpg"
            alt="Doctor Andres"
            className="object-cover w-[150px] lx:w-[300px] h-[150px] lx:h-[300px] rounded-full translate-y-4"
          />
        </motion.div>
        <span className="font-medium transition-all duration-300 text-xl xs:text-3xl sm:text-5xl lx:text-7xl">Andrés</span>
      </div>
    </section>
  );
};

export default WhoIs;