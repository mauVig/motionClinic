import React, { useEffect, useRef } from 'react';

const Biography: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains('fade-element') || entry.target.classList.contains('line-fade')) {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
              entry.target.classList.remove('fade-out');
            } else {
              entry.target.classList.remove('fade-in');
              entry.target.classList.add('fade-out');
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      const fadeElements = sectionRef.current.querySelectorAll('.fade-element, .line-fade');
      fadeElements.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative bg-backBlack px-6 py-24 text-grey overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="pb-32 xl:grid xl:grid-cols-2 relative">
          <div className="fade-element">
            <span className="text-xs block transform -translate-y-4 ">BIOGRAPHY</span>
            <h1 className="text-3xl font-bold">Andrés Ananía</h1>
          </div>
         <div>
          <main>
             <p className="ml-4 mt-8 leading-5 text-xs fade-element">
               Soy Andrés Ananía, médico traumatólogo, subespecializado en las afecciones de la cadera y la rodilla. Mi formación incluye un AVP Fellowship en el Hospital for Special Surgery en Nueva York, un MBA en el IAE Business School, y programas ejecutivos en Harvard Business School y Stanford sobre transformación digital e inteligencia artificial aplicados a la salud. Con una sólida trayectoria en el campo de la innovación médica y experiencia en la adopción de nuevas tecnologías, mi objetivo es brindarte una atención de excelencia que combine vanguardia y cuidado personalizado para ayudarte a recuperar tu movilidad y calidad de vida.
             </p>
          </main>
           <div className="grid grid-cols-5 mt-4 fade-element">
            <a href='https://aaot.org.ar/' target='_blank' rel='noreferrer'>
              <img src="svg/acreditaciones-05.svg" className='h-28 transition-all duration-1000 hover:scale-125 block mx-auto'  alt="" />
            </a>
            <a href='https://acaro.org.ar/' target='_blank' rel='noreferrer'>
              <img src="svg/acreditaciones-04.svg" className='h-28 transition-all duration-1000 hover:scale-125 block mx-auto'  alt="" />
            </a>
            <a href='https://aofoundation.org/'  target='_blank' rel='noreferrer'>
              <img src="svg/acreditaciones-03.svg" className='h-28 transition-all duration-1000 hover:scale-125 block mx-auto'  alt="" />
            </a>
            <a href='https://www.aaos.org/' target='_blank' rel='noreferrer'>
              <img src="svg/acreditaciones-01.svg" className='h-28 transition-all duration-1000 hover:scale-125 block mx-auto'  alt="" />
            </a>
            <a href='https://cartilage.org/' target='_blank' rel='noreferrer'>
              <img src="svg/acreditaciones-02.svg" className='h-28 transition-all duration-1000 hover:scale-125 block mx-auto'  alt="" />
            </a>
           </div>
         </div>
          <div className="line-fade absolute bottom-0 -left-6 myWidth h-[0.5px] bg-grey"></div>
        </div>
        <div className="pt-8 text-purple xl:grid xl:grid-cols-2">
          <div className="fade-element">
            <h2 className="text-6xl font-bold">The Perfect<br />Surgery</h2>
          </div>
          <p className="ml-4 mt-8 text-xl fade-element">
            Introducing the Smart Joint: a revolution in joint replacement. With Stryker Mako Smart Robotics technology, each knee and hip replacement is precisely tailored to the individual needs of each patient, ensuring maximum range of motion and safety. By leveraging Data Analytics and advanced robotics, through Smart Joint we restore natural movement minimizing complications, setting a new standard for life-changing results. This is the future of joint replacement—personalized, precise, and perfected.
          </p>
        </div>
      </div>

      <style>{`
        .fade-element {
          opacity: 0;
          transform: translateX(100px);
          transition: all 1s ease-out;
        }
        .myWidth {
          width: calc( 100% + 1.5rem)
        }
        @media (width < 1593px) {
          .myWidth {
            width: calc( 100% + 3rem)
          }
        }
        .line-fade {
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: all 1s ease-out;
        }

        .fade-in {
          opacity: 1;
          transform: translateX(0);
        }

        .line-fade.fade-in {
          opacity: 1;
          transform: scaleX(1);
        }

        .fade-out {
          opacity: 0;
          transform: translateX(-50px);
        }

        .line-fade.fade-out {
          opacity: 0;
          transform: scaleX(0);
        }
      `}</style>
    </section>
  );
};

export default Biography;