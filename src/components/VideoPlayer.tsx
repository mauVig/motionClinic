import React, { useEffect, useState, useRef } from 'react';

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isInVideoArea, setIsInVideoArea] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const [hasMouse, setHasMouse] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkForMouse = () => {
      const mediaQuery = window.matchMedia('(pointer: fine)');
      setHasMouse(mediaQuery.matches);

      mediaQuery.addEventListener('change', e => {
        setHasMouse(e.matches);
      });

      return () => mediaQuery.removeEventListener('change', e => {
        setHasMouse(e.matches);
      });
    };

    checkForMouse();
  }, []);




  return (
    <div   
      ref={containerRef}  
      className="relative h-screen overflow-hidden bg-backBlack"  
      style={{ cursor: hasMouse && isInVideoArea && !isPlaying && !isScrolling ? 'none' : 'default' }}  
    >  
      <iframe  
        id="youtube-player"  
        src="https://www.youtube.com/embed/KULGrLXNu3E?enablejsapi=1"  
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[100vw] min-h-[100vh] object-cover"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
        allowFullScreen  
      />  

      <style>{`  
        .custom-cursor {  
          transition: opacity 0.3s ease;  
          will-change: transform;  
        }  
      `}</style>  
    </div>  
  );
};

export default VideoPlayer;