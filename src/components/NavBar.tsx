import { useState } from 'react';
import useScrollDirection from '@/hooks/navHook.ts';
import { useStore } from '@/store/storeGlobal.ts';

export const NavBar = () => {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const { changeLanguage, myLang, myFocus } = useStore()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const setLanguage = () => {
    setLang(!lang)
    changeLanguage()
  }

  const lestsTalk = () => {
    if(isMenuOpen) toggleMenu()

    let count = 0
    const time = setTimeout(()=>{
      myFocus()
      if(count === 1) clearTimeout(time)
    },1000)
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
         <div className='w-44 hidden sm:flex justify-start'> 
           <a href="#contact" onClick={lestsTalk} className={`
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
        className={`fixed top-0 right-0 z-40 h-screen w-full md:w-auto bg-violet flex justify-start items-center transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-[105%]'
        }`}
      >
        <div className='relative'>
          <ul className="w-full text-4xl xs:text-[2.8rem] mid:text-[3.6rem] mid:leading-[3.3rem] sm:text-7xl inline-block py-1 pl-4 pr-14 font-medium text-grey ">
            <li className={`transform transition-all py-2 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} hover:text-backBlack hover:transition-all`} style={{transitionDelay: '0.1s'}} onClick={toggleMenu}>
              <a href="#">
                {myLang ? 'Home' : 'Inicio'} 
              </a>
            </li>
            <li className={`transform transition-all py-2 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} hover:text-backBlack hover:transition-all`} style={{transitionDelay: '0.2s'}} onClick={toggleMenu}>
              <a href="#experience">
                {myLang ? 'Experience' : 'Experiencia'}
              </a>
            </li>
            <li className={`transform transition-all py-2 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} hover:text-backBlack hover:transition-all truncate`} style={{transitionDelay: '0.3s'}} onClick={toggleMenu}>
              <a href="#whoIs">
                {myLang ? 'Who is Andrés?' : 'Quién es Andrés?'}
              </a>
            </li>
            <li className={`transform transition-all py-2 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} hover:text-backBlack hover:transition-all`} style={{transitionDelay: '0.4s'}} onClick={toggleMenu}>
              <a href="#skills">
                {myLang ? 'Skills' : 'Tratamientos'}
              </a>
            </li>
            <li className={`transform transition-all py-2 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} hover:text-backBlack hover:transition-all`} style={{transitionDelay: '0.5s'}} onClick={toggleMenu}>
              <a href="#studio">
                {myLang ? 'Studio' : 'Estudio'}
              </a>
            </li>
            <li className={`transform transition-all py-2 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} hover:text-backBlack hover:transition-all`} style={{transitionDelay: '0.6s'}} onClick={toggleMenu}>
              <a href="#contact"  onClick={lestsTalk}>
                {myLang ? 'Contact' : 'Contacto'}
              </a>
            </li>
            <li className={`w-44  sm:hidden  justify-start text-2xl  xs:text-3xl mid:text-4xl mt-6 transition-all ${isMenuOpen ? 'duration-500 opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.7s'}} onClick={toggleMenu}> 
              <a href="#contact" className={`
                  ${!isMenuOpen ? 'hover:bg-grey hover:text-violet' : 'hover:bg-violet hover:text-grey'}
                  transition-all duration-1000
                  ${!isMenuOpen ? 'bg-violet' : 'bg-grey'}
                  ${isMenuOpen ? 'text-violet' : 'text-grey'}
                  px-4 py-1 rounded-lg`}>
                {myLang ? 'LET´S TALK' : 'HABLEMOS'}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;