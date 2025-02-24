import React, { useEffect, useRef, useState } from 'react';
import WhoIs from './WhoIs';
import Experience from './Experience';
import Objective from '../objetiveText/Objective'; 


const WrapChangeBack: React.FC = () => {
  const [backgroundProgress, setBackgroundProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // const colorChangeThreshold = window.innerWidth > 768 ? 0.1 : 0.1;
      const colorChangeThreshold = 0.76;

      let progress = 0;
      if (rect.top <= -windowHeight * colorChangeThreshold) {
        progress = Math.min(
          1,
          (-windowHeight * colorChangeThreshold - rect.top) / (windowHeight * 0.35)
        );
      }

      setBackgroundProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateBackground = (): string => {
    const r = Math.round(19 + (232 - 19) * backgroundProgress);
    const g = Math.round(19 + (232 - 19) * backgroundProgress);
    const b = Math.round(19 + (232 - 19) * backgroundProgress);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
   
    <section  
      ref={containerRef}
      className="relative transition-colors duration-500"
      style={{ backgroundColor: calculateBackground() }}
    >
			<div className="absolute -top-[150px] left-0 right-0 h-[150px] bg-gradient-to-t from-backBlack " />

      <Objective />
      <Experience />
      <WhoIs />
    </section>
  );
};

export default WrapChangeBack;