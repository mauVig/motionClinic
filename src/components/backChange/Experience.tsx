import React, { useEffect, useRef, useState } from 'react';

interface ExperienceProps {
  className?: string;
}

const Experience: React.FC<ExperienceProps> = () => {
  const [targetScrollY, setTargetScrollY] = useState<number>(0);
  const [smoothScrollY, setSmoothScrollY] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = window.innerHeight - rect.top;
        setTargetScrollY(scrollProgress);
      }
    };

    const animate = () => {
      setSmoothScrollY((prev) => {
        const diff = targetScrollY - prev;
        const smoothing = 0.05; // Ajusta este valor para controlar la suavidad
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

  const calculateTransform = (base: number): string => {
    // Define los límites de movimiento
    const limit = 500// Límite inferior (máximo movimiento hacia abajo)

    let moveAmount = smoothScrollY * 0.5;
    moveAmount = Math.max(-limit, Math.min(limit, moveAmount)); // Aplica los límites

    return `translateY(${base - moveAmount}px)`;
  };

  return (
    <section ref={sectionRef} className="w-full px-6 text-grey">
      <div className="relative max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center text-center py-52">
          <div className="relative flex flex-col items-center z-20">
            <h2 className="text-4xl xs:text-6xl mid:text-7xl lx:text-9xl mb-4 font-bold" style={{ lineHeight: 0.82 }}>
              Years of <br />experience
            </h2>
            <p className="block mt-4 max-w-[400px] xs:text-xs mid:text-sm lx:text-base">
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

export default Experience;