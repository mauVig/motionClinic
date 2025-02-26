import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import st from '@/style/nav.module.css';
import { useStore } from "@/store/storeGlobal";

export const Welcome = () => {
    const CSSEffect = 30;
    const { myLang, loading } = useStore();
    const [textOpacity, setTextOpacity] = useState(0); // Inicialmente invisible
    const [textVisible, setTextVisible] = useState(false); // Inicialmente oculto

    useEffect(() => {
        const checkViewportAndLoadImage = () => {
            const isMobile = window.innerWidth < 1024;
            const imageToLoad = new Image();

            if (isMobile) {
                imageToLoad.src = '/img/back-cell.jpg';
            } else {
                imageToLoad.src = '/img/back-pc.jpg';
            }
        };

        checkViewportAndLoadImage();
    }, []);

    useEffect(() => {
        if (!loading) {
            setTextVisible(true); // Mostrar el texto
            setTimeout(() => {
                setTextOpacity(1); // Aplicar opacidad después de un breve retraso
            }, 100); // Pequeño retraso para la transición
        } else {
            setTextOpacity(0); // Ocultar el texto cuando loading es true
            setTextVisible(false);
        }
    }, [loading]);

    return (
        <ParallaxProvider>
            <Parallax translateY={[-CSSEffect, CSSEffect]} className={st.back}>
                <div className="min-h-screen max-w-screen-2xl mx-auto w-full relative px-6 text-grey">
                    <div className="absolute bottom-[14%] transition-opacity duration-500" style={{ opacity: textOpacity, visibility: textVisible ? 'visible' : 'hidden' }}>
                        <h2 className="text-6xl xs:text-7xl md:text-9xl lg:text-[10rem] font-bold w-32" style={{ lineHeight: myLang ? .82 : .92 }}>
                            {myLang ? 'The perfect surgery' : 'La cirugía perfecta'}
                        </h2>
                        <p className="text-[.7rem] xs:text-[.95rem] md:text-[1.7rem] lg:text-[2.1rem] mt-6 lg:mt-8">
                            {myLang ? 'A Masterpiece of Modern Medicine' : 'Una obra maestra de la medicina moderna'}
                        </p>
                    </div>
                </div>
            </Parallax>
        </ParallaxProvider>
    );
};

export default Welcome;