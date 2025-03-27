import React, { useRef, useEffect } from 'react';
import { useStore } from '@/store/storeGlobal.ts';

export const ClinicTestify = () => {
  const { myLang } = useStore();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isMobil = window.innerWidth < 768;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current?.classList.add('slide-in');
          } else {
            titleRef.current?.classList.remove('slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id='studio' className="bg-[#cccccc] w-full relative text-black flex justify-center items-center py-6">
      <div className="px-6">
        <h2 ref={titleRef} className="pb-4 slide-element">
          <span  className="text-xl font-medium ">
            Motion Clinic
          </span>
          <br />
          <span className="text-6xl font-bold -ml-[3.5px]">
            {myLang ? 'Studio' : 'Estudio'}
          </span>
        </h2>
        <img src={`/img/cubeSlide/testify${isMobil ? '-cell': ''}.webp`} alt="picture of the" className="w-full" />
        <div className="flex items-center gap-4 pt-4">
          <img src="/img/locationIcon.svg" className="w-8" alt="Logo location" />
          <p className="block font-medium w-44">LA IMPRENTA <br /> Maure 1608, Piso 2. </p>
        </div>
      </div>
      <style>{`
        .slide-element {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 0.8s ease-out;
        }
        .slide-in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
      

    </section>
  );
};

export default ClinicTestify;