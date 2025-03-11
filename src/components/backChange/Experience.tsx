import React, { useEffect, useRef, useState } from 'react';
import NumberFlow from '@number-flow/react';
import { useStore } from '@/store/storeGlobal';
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react"

function useParallax(value: MotionValue<number>, distance: number, stiffness = 20, damping = 5) {
  const rawY = useTransform(value, [0, 1], [-100, distance]);
  return useSpring(rawY, { stiffness, damping });
}

const Experience: React.FC = () => {
  const [targetScrollY, setTargetScrollY] = useState<number>(0);
  const [smoothScrollY, setSmoothScrollY] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [numberFlowValue, setNumberFlowValue] = useState<number>(0);
  const [sectionVisible, setSectionVisible] = useState<boolean>(false);
  const { myLang } = useStore()
  const { scrollYProgress } = useScroll({ target: sectionRef })
  const y = useParallax(scrollYProgress, 300, 90, 50);

  useEffect(() => {
    const handleScroll = (): void => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = window.innerHeight - rect.top;
        setTargetScrollY(scrollProgress);

        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setSectionVisible(isVisible);
      }
    };

    const animate = () => {
      setSmoothScrollY((prev) => {
        const diff = targetScrollY - prev;
        const smoothing = 0.05;
        return Math.abs(diff) < 0.001 ? targetScrollY : prev + diff * smoothing;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    animationFrameRef.current = requestAnimationFrame(animate);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetScrollY]);

  useEffect(() => {
    if (sectionVisible && numberFlowValue !== 15) {
      setNumberFlowValue(15);
    } else if (!sectionVisible && numberFlowValue !== 0) {
      setNumberFlowValue(9)
    }
  }, [sectionVisible, numberFlowValue]);

  return (
    <section ref={sectionRef} className="w-full px-6 text-grey">
      <div className="relative max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center text-center py-52">
          <div className="relative flex flex-col items-center z-20">
            <h2 className="text-5xl xs:text-6xl mid:text-7xl lx:text-9xl mb-4 font-bold" style={{ lineHeight: 0.82 }}>
              <NumberFlow
                value={numberFlowValue}
                transformTiming={{ duration: 2000, easing: 'ease-in-out' }} />
                {myLang ? (
                  <span> Years of <br />experience</span>
                ) : (
                  <span> Años de <br />experiencia</span>
                )}
            </h2>

            <p className="block mt-4 max-w-[400px] text-[.7rem] xs:text-xs mid:text-xs lx:text-base">
              {!myLang ? 'Lograr resultados funcionales y personalizados, específicamente diseñados para cada paciente. Cada persona es única.' : 'Achieve functional and personalized results, specifically designed for each patient. Each person is unique.'}
            </p>
          </div>
        </div>
        <motion.img
          src="/img/clinic-cell.jpg"
          alt=""
          className="h-28 mid:h-32 md:h-60 absolute top-0 right-10"
          style={{ y }}
        />
        <motion.img
          src="/img/clinic2-cell.jpg"
          alt=""
          className="h-32 mid:h-32 md:h-60 absolute top-14"
          style={{ y }}
        />
        <motion.img
          src="/img/clinic3-cell.jpg"
          alt=""
          className="h-28 mid:h-24 md:h-48 absolute bottom-12 right-12"
          style={{ y }}
        />
        <motion.img
          src="/img/clinic4-cell.jpg"
          alt=""
          className="h-28 mid:h-48 md:h-72 absolute bottom-6"
          style={{ y }}
        />
      </div>
    </section>
  );
};

export default Experience;