import React, { useEffect, useRef } from 'react';
import { useStore } from '@/store/storeGlobal.ts';

const Biography: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { myLang } = useStore();

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
            <span className="text-xs block transform -translate-y-4 ">{myLang ? 'BIOGRAPHY' : 'BIOGRAFIA'}</span>
            <h1 className="text-3xl font-bold">Andrés Anania</h1>
          </div>
         <div>
          <main>
             <p className="ml-4 mt-8 leading-5 text-xs fade-element">
               {!myLang ? 'Soy Andrés Anania, médico traumatólogo, subespecializado en las afecciones de la cadera y la rodilla. Mi formación incluye un AVP Fellowship en el Hospital for Special Surgery en Nueva York, un MBA en el IAE Business School, y programas ejecutivos en Harvard Business School y Stanford sobre transformación digital e inteligencia artificial aplicados a la salud. Con una sólida trayectoria en el campo de la innovación médica y experiencia en la adopción de nuevas tecnologías, mi objetivo es brindarte una atención de excelencia que combine vanguardia y cuidado personalizado para ayudarte a recuperar tu movilidad y calidad de vida.' : 'I am Andrés Ananía, an Orthopaedic Surgeon, subspecialized in hip and knee conditions. My training includes an AVP Fellowship at the Hospital for Special Surgery in New York, an MBA at the IAE Business School, and executive programs at Harvard Business School and Stanford on digital transformation and artificial intelligence applied to health. With a solid track record in the field of medical innovation and experience in the adoption of new technologies, my goal is to provide you with excellent care that combines cutting-edge technology and personalized care to help you regain your mobility and quality of life.'}
             </p>
          </main>
          <div className="grid gap-y-4 grid-cols-2 mid:grid-cols-3 sm:gap-y-0 sm:grid-cols-5 mt-4 fade-element text-xs leading-4">
            <a href='https://aaot.org.ar/' target='_blank' rel='noreferrer' className='flex flex-col items-center text-center transition-all duration-700 hover:scale-125'>
              <img src="svg/acreditaciones-05.svg" className='h-28 block mx-auto'  alt="aaot" />
              <p className="whitespace-pre-line">{myLang ? 'Certified \n Member' : 'Miembro \n Certificado'}</p>
            </a>
            <a href='https://acaro.org.ar/' target='_blank' rel='noreferrer' className='flex flex-col items-center text-center transition-all duration-700 hover:scale-125 '>
              <img src="svg/acreditaciones-04.svg" className='h-28 block mx-auto'  alt="acaro" />
              <p className="whitespace-pre-line">{myLang ? 'Full\n Member' : 'Miembro \nTitular'}</p>
            </a>
            <a href='https://aofoundation.org/'  target='_blank' rel='noreferrer' className='flex flex-col items-center text-center transition-all duration-700 hover:scale-125 '>
              <img src="svg/acreditaciones-03.svg" className='h-28 block mx-auto'  alt="aofoundation" />
              <p className="whitespace-pre-line">{myLang ? 'Certified\n Member' : 'Miembro\n Certificado'}</p>
            </a>
            <a href='https://www.aaos.org/' target='_blank' rel='noreferrer' className='flex flex-col items-center text-center transition-all duration-700 hover:scale-125 '>
              <img src="svg/acreditaciones-01.svg" className='h-28 block mx-auto'  alt="aaos" />
              <p className="whitespace-pre-line">{myLang ? 'International\n Suergon Member' : 'Cirujano Ortopedista\n Internacional'}</p>
            </a>
            <a href='https://cartilage.org/' target='_blank' rel='noreferrer' className='flex flex-col items-center text-center transition-all duration-700 hover:scale-125 '>
              <img src="svg/acreditaciones-02.svg" className='h-28 block mx-auto'  alt="cartilage" />
              <p className="whitespace-pre-line">{myLang ? 'International \n Member' : 'Miembro\n Internacional' }</p>
            </a>
           </div>
         </div>
        <div className="line-fade absolute bottom-0 -left-6 myWidth h-[0.5px] bg-grey"></div>
        </div>
        <div className="pt-8 text-purple xl:grid xl:grid-cols-2">
          <div className="fade-element">
            <h2 className="text-6xl font-bold">
            The Perfect<br />Surgery
            </h2>
          </div>
          <p className="ml-4 mt-8 xs:text-xl fade-element">
            {myLang ? "Introducing The Smart Joint: A revolution in joint replacement surgery. With Stryker's robotic arm, MAKO SmartRobotics™, every hip and knee replacement is precisely tailored to each patient's individual needs, ensuring maximum range of motion and safety. Through data analysis and advanced robotics, with The Smart Joint, we restore natural movement, minimize complications, and set a new standard with life-changing results. This is the future of joint replacement: personalized, precise, and perfected.": "Te presentamos “The Smart Joint”: Una revolución en las cirugias de reemplazos articulares. Con el Brazo Robótico de Stryker, MAKO SmartRoboticsTM, cada reemplazo de cadera y rodilla se adapta de manera precisa a las necesidades individuales de cada paciente, asegurando el máximo rango de movimiento y seguridad. Aprovechando el análisis de datos y la robótica avanzada, a través de “Smart Joint” restauramos el movimiento natural minimizando las complicaciones, estableciendo un nuevo estándar con resultados que cambiarán tu vida. Este es el futuro de los Reemplazos Articulares: personalizado, preciso y perfeccionado."}
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