import React, { useRef } from "react";
import { useStore } from '@/store/storeGlobal.ts';
import { motion, useTransform, useScroll } from 'motion/react';

const WhoIs: React.FC = () => {
  const SIZE = window.innerWidth < 900 ? 250 : 450;

  const containerRef = useRef<HTMLDivElement>(null);
  const { myLang } = useStore();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const mySize = useTransform(scrollYProgress, [0, 1], [0, SIZE]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1.8]);

  return (
    <section ref={containerRef} id='whoIs' className="h-[100vh] w-full pb-12 relative px-6 text-black flex items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center gap-2 relative">
        <div className="flex justify-end w-[250px] ">
          <span className="font-medium truncate transition-all duration-300 text-xl xs:text-3xl sm:text-5xl lx:text-7xl">{myLang ? 'This is' : 'El es'}</span>
        </div>
        <motion.div
          className="transition-all duration-300 ease-out overflow-hidden flex items-center justify-center rounded-full h-16"
          style={{ width:mySize, height:mySize, opacity }}
        >
          <img
            src="/img/Andres.jpg"
            alt="Doctor Andres"
            className="object-cover rounded-full "
          />
        </motion.div>
        <div className="w-[250px] ">
          <span className="font-medium transition-all duration-300 text-xl xs:text-3xl sm:text-5xl lx:text-7xl">Andrés</span>
        </div>
      </div>
    </section>
  );
};

export default WhoIs;