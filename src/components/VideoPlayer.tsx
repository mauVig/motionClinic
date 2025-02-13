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

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: 'KULGrLXNu3E',
        playerVars: { autoplay: 0, mute: 1, controls: 0 },
        events: {
          onReady: (event: any) => setPlayer(event.target)
        }
      });
    };
  }, []);

  const handlePlay = () => {
    if (player && !isScrolling) {
      if (!isPlaying) {
        player.playVideo();
        player.unMute();
      } else {
        player.pauseVideo();
        player.mute();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div   
      ref={containerRef}  
      className="relative h-screen overflow-hidden bg-backBlack"  
      style={{ cursor: hasMouse && isInVideoArea && !isPlaying && !isScrolling ? 'none' : 'default' }}  
      onClick={handlePlay}  
    >  
      {/* <div   
        className="absolute inset-0 z-20 bg-black/30 transition-opacity duration-300 "  
        style={{ opacity: isPlaying ? 0 : 1 }}  
      />   */}
{/* 
      {hasMouse && isInVideoArea && !isPlaying && !isScrolling && (  
        <div   
          className="custom-cursor fixed z-30 pointer-events-none"  
          style={{  
            left: cursorPosition.x,  
            top: cursorPosition.y,  
            transform: 'translate(-50%, -50%)'  
          }}  
        >  
          <div className="w-60 h-60 rounded-full border-2 border-violet text-grey flex items-center justify-center text-white bg-black/20 backdrop-blur-sm">  
            WATCH FILM  
          </div>  
        </div>  
      )}   */}

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