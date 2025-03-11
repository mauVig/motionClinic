import React, { useEffect, useRef } from "react";
import { useStore } from '@/store/storeGlobal';

export const TestifyVideos:React.FC = () => {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const { myLang } = useStore() 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-backBlack p-4">
      <div className="max-w-screen-2xl mx-auto">
        <h2
          ref={h2Ref}
          className="text-4xl mid:text-6xl md:text-7xl mb-16 mt-8 text-violet font-bold fade-element"
        >
         {!myLang ? (
           <span>
              Conocé las
              <br />
              historias que
              <br />
              <span className="text-grey">nos mueven</span>
           </span>
         ): (
            <span>
              Stories that 
              <br />
              <span className="text-grey">Inspire us</span>
            </span>
         )}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-4">
        <iframe
          src="https://www.youtube.com/embed/K6vE9LR8teM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full xl:w-1/2 h-[700px]"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/JhfeY0h7D9M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full xl:w-1/2 h-[700px]"
        ></iframe>
      </div>
      <style>{`
        .fade-element {
        opacity: 0;
          transform: translateX(-100px);
          transition: all 1s ease-out;
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default TestifyVideos;