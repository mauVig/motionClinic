import React, { useEffect, useRef } from 'react';

export const Gallery = () => {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const imageRefs = useRef([]);

    const imageClasses = [
        "w-full object-contain translate-y-32",
        "w-full object-contain translate-y-72",
        "w-full object-contain translate-y-56",
        "w-full object-contain translate-y-32",
        "w-full object-contain translate-y-72",
        "w-full object-contain translate-y-60",
        "w-full object-contain translate-y-48"
    ];

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

            // Handle fade effects
            imageRefs.current.forEach((imgDiv) => {
                if (!imgDiv) return;
                const rect = imgDiv.getBoundingClientRect();
                const isVisible = rect.left < window.innerWidth && rect.right > 0;
                const opacity = isVisible ? 1 : 0;
                imgDiv.style.opacity = opacity;
                imgDiv.style.transition = 'opacity 0.5s ease-in-out';
            });
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
                <section className="inline-flex min-w-[200vw] px-6 gap-8">
                    {[...Array(14)].map((_, index) => (
                        <div 
                            key={index}
                            ref={el => imageRefs.current[index] = el}
                            className="w-[400px] flex-shrink-0 opacity-0"
                        >
                            <img 
                                src={`/img/gallery/gallery${(index % 7) + 1}.jpg`}
                                alt={`Galería ${index + 1}`}
                                className={imageClasses[index % 7]}
                            />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Gallery;