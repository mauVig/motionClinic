import React, { useEffect, useRef, useState } from 'react';
import NumberFlow from '@number-flow/react';
import { useStore } from '@/store/storeGlobal';

const Experience: React.FC = () => {
  const [targetScrollY, setTargetScrollY] = useState<number>(0);
  const [smoothScrollY, setSmoothScrollY] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [numberFlowValue, setNumberFlowValue] = useState<number>(0);
  const [sectionVisible, setSectionVisible] = useState<boolean>(false);
  const { myLang } = useStore()

  useEffect(() => {
    const handleScroll = (): void => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = window.innerHeight - rect.top;
        setTargetScrollY(scrollProgress);

        // Verifica si la sección está en la ventana visible
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
    } else if (!sectionVisible && numberFlowValue !== 0){
      setNumberFlowValue(9)
    }
  }, [sectionVisible, numberFlowValue]);

  const calculateTransform = (base: number): string => {
    const limit = 500;
    let moveAmount = smoothScrollY * 0.5;
    moveAmount = Math.max(-limit, Math.min(limit, moveAmount));
    return `translateY(${base - moveAmount}px)`;
  };

  return (
    <section ref={sectionRef} className="w-full px-6 text-grey">
      <div className="relative max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center text-center py-52">
          <div className="relative flex flex-col items-center z-20">
            <h2 className="text-5xl xs:text-6xl mid:text-7xl lx:text-9xl mb-4 font-bold" style={{ lineHeight: 0.82 }}>
              <NumberFlow 
                value={numberFlowValue}
                transformTiming={{ duration: 2000, easing: 'ease-in-out' }} />  
                { myLang ? (
                  <span> Years of <br />experience</span>
                ):(
                  <span> Años de <br />experiencia</span>
                )}
            </h2>

            <p className="block mt-4 max-w-[400px] text-[.7rem] xs:text-xs mid:text-xs lx:text-base">
              { !myLang ? 'Buscamos lograr resultados funcionales y personalizados, específicamente diseñados para cada paciente. Cada persona es única.' : 'We seek to achieve functional and personalized results, specifically designed for each patient. Each person is unique.'}
            </p>
          </div>
        </div>
        <img
          src="/img/clinic-cell.jpg"
          alt=""
          className="h-28 mid:h-32 md:h-60 absolute top-0 right-10 transition-transform duration-300"
          style={{ transform: calculateTransform(0) }}
        />
        <img
          src="/img/clinic2-cell.jpg"
          alt=""
          className="h-32 mid:h-32 md:h-60 absolute top-14 transition-transform duration-300"
          style={{ transform: calculateTransform(100) }}
        />
        <img
          src="/img/clinic3-cell.jpg"
          alt=""
          className="h-28 mid:h-24 md:h-48 absolute bottom-12 right-12 transition-transform duration-300"
          style={{ transform: calculateTransform(200) }}
        />
        <img
          src="/img/clinic4-cell.jpg"
          alt=""
          className="h-28 mid:h-48 md:h-72 absolute bottom-6 transition-transform duration-300"
          style={{ transform: calculateTransform(300) }}
        />
      </div>
    </section>
  );
};

export default Experience;