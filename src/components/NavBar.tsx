import { useState } from 'react';
import useScrollDirection from '@/hooks/navHook';

export const NavBar = () => {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          scrollDirection === 'down' && !isMenuOpen ? '-translate-y-[105%]' : 'translate-y-0'
        }`}
      >
        <div
          className={`flex justify-between items-center p-2 transition-all duration-300 ${
            !isAtTop ? 'bg-textBlack/25 backdrop-blur-sm' : ''
          }`}
        >
         <div className='w-44 flex justify-start'>
           <a href="#" className={`
               transition-all duration-1000
               ${!isMenuOpen ? 'bg-violet' : 'bg-grey'}
               ${isMenuOpen ? 'text-violet' : 'text-grey'}
                px-4 py-1 rounded-full`}>
             LET´S TALK
           </a>
          
         </div>
         <div className='w-44 flex justify-center'>
           <a href="#">
             <img src="/svg/logo.svg" alt="Logo de Motion clinic" className="h-8" />
           </a>
         </div>

          <div className='w-44 flex justify-end'>
            <div
              onClick={toggleMenu}
              className="cursor-pointer relative w-16 h-4"
            >
              <img
                src="/svg/hambur.svg"
                alt="Abrir menú"
                className={`absolute top-0 left-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`}
              />
              <img
                src="/svg/hambur-close.svg"
                alt="Cerrar menú"
                className={`absolute top-0 left-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`}
              />
            </div>
          </div>
        </div>
      </header>

      <nav
        className={`fixed top-0 right-0 z-10 h-screen w-full md:w-auto bg-violet flex justify-start items-center transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="w-full">
          <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.1s'}}>
            <a href="" className="inline-block w-full text-7xl py-1 pl-4 pr-14 font-medium text-grey hover:text-backBlack hover:transition-all duration-300">
              Home
            </a>
          </li>
          <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}}>
            <a href="" className="inline-block w-full text-7xl py-1 pl-4 pr-14 font-medium text-grey hover:text-backBlack hover:transition-all duration-300">
              Experience
            </a>
          </li>
          <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'} truncate`} style={{transitionDelay: '0.3s'}}>
            <a href="" className="inline-block w-full text-7xl py-1 pl-4 pr-14 font-medium text-grey hover:text-backBlack hover:transition-all duration-300">
              Who is Andrés?
            </a>
          </li>
          <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.4s'}}>
            <a href="" className="inline-block w-full text-7xl py-1 pl-4 pr-14 font-medium text-grey hover:text-backBlack hover:transition-all duration-300">
              Skills
            </a>
          </li>
          <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.5s'}}>
            <a href="" className="inline-block w-full text-7xl py-1 pl-4 pr-14 font-medium text-grey hover:text-backBlack hover:transition-all duration-300">
              Studio
            </a>
          </li>
          <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.6s'}}>
            <a href="" className="inline-block w-full text-7xl py-1 pl-4 pr-14 font-medium text-grey hover:text-backBlack hover:transition-all duration-300">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;