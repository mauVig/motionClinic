import { useEffect, useState } from 'react';
import useScrollDirection from '@/hooks/navHook';
import { useStore } from '@/store/storeGlobal';

export const NavBar = () => {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const { changeLanguage, myLang } = useStore()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const setLanguage = () => {
    setLang(!lang)
    changeLanguage()
  }


  
  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrollDirection === 'down' && !isMenuOpen ? '-translate-y-[105%]' : 'translate-y-0'
        }`}
      >
        <div
          className={`flex justify-between items-center p-2 transition-all duration-300 ${
            !isAtTop ? 'backdrop-blur-sm' : ''
          }`}
        >
         <div className='w-44 hidden sm:flex justify-start '> 
           <a href="#contact" className={`
              ${!isMenuOpen ? 'hover:bg-grey hover:text-violet' : 'hover:bg-violet hover:text-grey'}
              transition-all duration-1000
              ${!isMenuOpen ? 'bg-violet' : 'bg-grey'}
              ${isMenuOpen ? 'text-violet' : 'text-grey'}
              px-4 py-1 rounded-full`}>
             {myLang ? 'LET´S TALK' : 'HABLEMOS'}
           </a>
         </div>
         <div className='w-44 flex mid:justify-center'>
           <a href="#">
             <img src="/svg/logo.svg" alt="Logo de Motion clinic" className="h-5 xs:h-6 mid:h-8" />
           </a>
         </div>
          <div className='w-44 flex justify-end'>
            
            <div className='text-base mid:text-lg text-grey flex gap-2 mr-8 items-center cursor-pointer' onClick={setLanguage}>
              <span className={`transition-all duration-500 px-1 rounded-lg select-none
                ${ isMenuOpen && lang ? "relative before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:rounded-lg before:bg-grey" : ""}
                ${!isMenuOpen && lang ? 'bg-violet' : 'text-grey'}`
              }>EN</span>
              <span className="select-none">|</span>
              <span className={`transition-all duration-500 px-1 rounded-lg select-none
                ${ isMenuOpen && !lang ? "relative before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:rounded-lg before:bg-grey" : ""}
                ${!isMenuOpen && !lang ? 'bg-violet' : 'text-grey'}`
              }>ES</span>
            </div>
          
            <div
              onClick={toggleMenu}
              className="cursor-pointer relative w-12 mid:w-16 h-4 select-none"
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
        className={`fixed top-0 right-0 z-40 h-screen w-full md:w-auto  bg-violet flex justify-start items-center transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-[105%]'
        }`}
      >
        <div className='relative'>
          <ul className="w-full xs:text-5xl text-4xl mid:text-6xl sm:text-7xl inline-block py-1 pl-4 pr-14 font-medium text-grey hover:text-backBlack hover:transition-all duration-300">
            <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.1s'}} onClick={toggleMenu}>
              <a href="">
                Home
              </a>
            </li>
            <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}} onClick={toggleMenu}>
              <a href="">
                Experience
              </a>
            </li>
            <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'} truncate`} style={{transitionDelay: '0.3s'}} onClick={toggleMenu}>
              <a href="">
                Who is Andrés?
              </a>
            </li>
            <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.4s'}} onClick={toggleMenu}>
              <a href="">
                Skills
              </a>
            </li>
            <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.5s'}} onClick={toggleMenu}>
              <a href="">
                Studio
              </a>
            </li>
            <li className={`transform transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.6s'}} onClick={toggleMenu}>
              <a href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;