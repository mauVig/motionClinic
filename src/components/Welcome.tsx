import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import st from '@/style/nav.module.css';
import { useStore } from "@/store/storeGlobal.ts";

export const Welcome = () => {
    const CSSEffect = 30;
    const { myLang, loading } = useStore();
    const [textOpacity, setTextOpacity] = useState(0); 
    const [textVisible, setTextVisible] = useState(false); 

    useEffect(() => {
        const checkViewportAndLoadImage = () => {
            const isMobile = window.innerWidth < 1024;
            const imageToLoad = new Image();

            if (isMobile) {
                imageToLoad.src = '/img/welcome-cell.webp';
            } else {
                imageToLoad.src = '/img/welcome.webp';
            }
        };

        checkViewportAndLoadImage();
    }, []);

    useEffect(() => {
        if (!loading) {
            setTextVisible(true); 
            setTimeout(() => {
                setTextOpacity(1); 
            }, 100); 
        } else {
            setTextOpacity(0);
            setTextVisible(false);
        }
    }, [loading]);

    return (
        <ParallaxProvider>
            <Parallax translateY={[-CSSEffect, CSSEffect]} className={st.back}>
                <div className="min-h-screen max-w-screen-2xl mx-auto w-full relative px-6 text-grey">
                    <div className={`absolute bottom-[30%]  sm:bottom-[20%]  md:bottom-[15%] xl:bottom-[10%] transition-all delay-500 duration-1000 ${textVisible ? 'translate-y-0': 'translate-y-8'}`} style={{ opacity: textOpacity, visibility: textVisible ? 'visible' : 'hidden' }}>
                        <h2 className={`text-7xl mid:text-[5.5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] font-bold w-32`} style={{ lineHeight: '.8' }}>
                            The perfect surgery
                        </h2>
                        <p className="text-[.9rem] mid:text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.3rem] mt-6 lg:mt-8 ">
                            {myLang ? (
                                <>
                                    A masterpiece of modern hip and  
                                    <br />
                                    knee surgery.
                                </>
                            ) : (
                                <>
                                    Una obra maestra de la cirugía
                                    <br />
                                    moderna de cadera y rodilla.
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </Parallax>
        </ParallaxProvider>
    );
};

export default Welcome;