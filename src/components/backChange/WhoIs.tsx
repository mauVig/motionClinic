import React, { useEffect, useRef, useState } from "react";

const WhoIs: React.FC = () => {
    // const IMAGE_HEIGHT = 400;
    // const MAX_WIDTH = 300;
    const IMAGE_HEIGHT = window.innerWidth > 768 ? 400 : window.innerWidth > 640 ? 300 : 200;
    const MAX_WIDTH = window.innerWidth > 768 ? 300 : window.innerWidth > 640 ? 200 : 100;  
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [targetProgress, setTargetProgress] = useState(0);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            let newProgress = 0;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                newProgress = Math.max(0, Math.min(1, 
                    1 - (rect.top / (windowHeight * 0.5))
                ));
            }
            setTargetProgress(newProgress);
        };

        const animate = () => {
            setProgress(prev => {
                const diff = targetProgress - prev;
                const smoothing = 0.05;
                return Math.abs(diff) < 0.001 ? targetProgress : prev + diff * smoothing;
            });
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('scroll', handleScroll);
        animationFrameRef.current = requestAnimationFrame(animate);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [targetProgress]);

    const calculateStyles = () => {
        const width = MAX_WIDTH * progress;
        return {
            width: `${width}px`,
            height: `${IMAGE_HEIGHT}px`,
            opacity: progress 
        };
    };

    return (
        <section ref={containerRef} className="h-[100vh] w-full pb-12 relative px-6 text-black flex items-center justify-center">
            <div className="flex items-center justify-center gap-2 relative">
                <span className="font-medium truncate transition-all duration-300 text-xl xs:text-3xl sm:text-5xl lx:text-7xl">Who is</span>
                <div className="transition-all duration-300 ease-out overflow-hidden flex items-center justify-center">
                    <img
                        src="/img/Andres.jpg"
                        alt="Doctor Andres"
                        className="object-cover"
                        style={calculateStyles()} 
                    />
                </div>
                <span className="font-medium transition-all duration-300 text-xl xs:text-3xl sm:text-5xl lx:text-7xl">Andrés</span>
            </div>
        </section>
    );
};

export default WhoIs;