import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = () => {
  const sectionRef = useRef(null);
  const spanRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const section = sectionRef.current;
    const span = spanRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When section is 10% visible, start the animation
          const handleScroll = () => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const windowHeight = window.innerHeight;
            
            // Calculate scroll progress (0 to 1)
            let progress = (windowHeight - sectionTop) / (windowHeight + rect.height);
            progress = Math.max(0, Math.min(1, progress));
            
            setScrollProgress(progress);
          };
          
          window.addEventListener('scroll', handleScroll);
          handleScroll(); // Initial calculation
          
          return () => window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );
    
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  // Calculate dynamic styles based on scroll progress
  const spanStyle = {
    fontSize: `${Math.max(1, 3 - (scrollProgress * 2))}em`,
    transform: `translateY(${scrollProgress * -50}px)`,
    transition: 'all 0.1s ease-out'
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-gray-300 flex items-center">
      <div className="flex flex-col items-center">
        <p className="text-center">
          Nuestro objetivo es ayudarte a{' '}
          <span
            ref={spanRef}
            className="text-purple-500"
            style={spanStyle}
          >
            recuperar tu calidad de vida
          </span>
          , estamos acá para que sigas haciendo lo que más te gusta y sigas intentando superarte. 
          Con años de experiencia y las técnicas más avanzadas, nos aseguramos que tu cirugía sea 
          un éxito y tu recuperación sea lo más rápida posible.
        </p>
        <span className="text-6xl text-purple-500 mt-8">#DvtAgain</span>
      </div>
    </section>
  );
};

export default AnimatedSection;