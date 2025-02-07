import React, { useEffect, useRef } from 'react';

export const Gallery: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const section = sectionRef.current;

        if (!container || !section) return;

        const sectionWidth = section.scrollWidth;
        const viewportHeight = window.innerHeight;
        const scrollableWidth = sectionWidth - window.innerWidth;
        container.style.height = `${scrollableWidth}px`;

        const handleScroll = () => {
            const containerRect = container.getBoundingClientRect();
            const { top } = containerRect;
            
            if (top <= 0) {
                const progress = Math.abs(top) / (scrollableWidth - viewportHeight);
                const scrollAmount = Math.min(progress * scrollableWidth, scrollableWidth);
                section.scrollLeft = scrollAmount;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative bg-backBlack" ref={containerRef}>
            <div 
                ref={sectionRef}
                className="sticky top-0 overflow-x-hidden"
                style={{ height: '100vh' }}
            >
                <section className="inline-flex min-w-[200vw] px-14 gap-8">
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery1.jpg" alt="Galería 1" className="w-full object-contain translate-y-32"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery2.jpg" alt="Galería 2" className="w-full object-contain translate-y-72"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery3.jpg" alt="Galería 3" className="w-full object-contain translate-y-48"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery4.jpg" alt="Galería 4" className="w-full object-contain translate-y-3"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery5.jpg" alt="Galería 5" className="w-full object-contain translate-y-60"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery6.jpg" alt="Galería 6" className="w-full object-contain translate-y-3"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery7.jpg" alt="Galería 7" className="w-full object-contain translate-y-72"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery1.jpg" alt="Galería 8" className="w-full object-contain translate-y-32"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery2.jpg" alt="Galería 9" className="w-full object-contain translate-y-72"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery3.jpg" alt="Galería 10" className="w-full object-contain translate-y-48"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery4.jpg" alt="Galería 11" className="w-full object-contain translate-y-3"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery5.jpg" alt="Galería 12" className="w-full object-contain translate-y-60"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery6.jpg" alt="Galería 13" className="w-full object-contain translate-y-3"/>
                    </div>
                    <div className="w-[400px] flex-shrink-0">
                        <img src="/img/gallery/gallery7.jpg" alt="Galería 14" className="w-full object-contain translate-y-72"/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Gallery;