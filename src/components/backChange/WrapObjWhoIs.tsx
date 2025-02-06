import React, { useEffect, useRef, useState } from 'react';
import WhoIs from './WhoIs';
import Experience from './Experience';

const WrapObjWhoIs: React.FC = () => {
  const [backgroundProgress, setBackgroundProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const colorChangeThreshold = window.innerWidth > 768 ? 0.1 : 0.1;

      let progress = 0;
      if (rect.top <= -windowHeight * colorChangeThreshold) {
        progress = Math.min(
          1,
          (-windowHeight * colorChangeThreshold - rect.top) / (windowHeight * 0.3)
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
    <div 
      ref={containerRef}
      className="relative transition-colors duration-500"
      style={{ backgroundColor: calculateBackground() }}
    >
      <Experience />
      <WhoIs />
    </div>
  );
};

export default WrapObjWhoIs;