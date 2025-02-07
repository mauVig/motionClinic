import React, { useEffect, useRef, useState } from 'react';

interface ScrollSectionProps {
  className?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ className = '' }) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = window.innerHeight - rect.top;
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateTransform = (base: number): string => {
    const moveAmount = (scrollY * 0.2); // Incrementado de 0.1 a 0.3
    return `translateY(${base - moveAmount}px)`;
  };

  return (
    <section ref={sectionRef} className={`w-full  px-6 text-grey ${className}`}>
      <div className="relative max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center text-center py-52">
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl xs:text-6xl mid:text-7xl lx:text-9xl mb-4">
              Years of <br />experience
            </h2>
            <p className="block max-w-[400px] xs:text-xs mid:text-sm lx:text-base">
              Buscamos lograr resultados funcionales y personalizados, específicamente diseñados para cada paciente. Cada persona es única.
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

export default ScrollSection;