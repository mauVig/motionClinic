import React, { useRef } from 'react';

const VideoPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div   
      ref={containerRef}  
      className="relative h-screen overflow-hidden bg-backBlack"   
    >  
      <iframe  
        id="youtube-player"  
        src="https://www.youtube.com/embed/Xw75tzZcqmY?enablejsapi=1"  
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