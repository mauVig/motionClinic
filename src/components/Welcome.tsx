import { useEffect } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import st from '@/style/nav.module.css'

declare global {
	interface Window {
	  hideLoader: () => void;
	}
}

export const Welcome = () => {
	const CSSEffect = 30;

	useEffect(() => {
	  const checkViewportAndLoadImage = () => {
		const isMobile = window.innerWidth < 1024;
		const imageToLoad = new Image();
		
		if (isMobile) {
		  imageToLoad.src = '/img/back-cell.jpg';
		} else {
		  imageToLoad.src = '/img/back-pc.jpg';
		}

		imageToLoad.onload = () => {
			window.hideLoader();
		};
	  };
  
	  checkViewportAndLoadImage();
	}, []);

  return (
	<ParallaxProvider>
		<Parallax translateY={[ -CSSEffect, CSSEffect ]} className={st.back}>
			<div className="min-h-screen max-w-screen-2xl mx-auto w-full relative px-6 text-grey">
				<div className="absolute bottom-[14%]">
					<h2 className="text-7xl mid:text-9xl lg:text-[10rem] font-bold w-32" style={{ lineHeight:.82}}>The perfect surgery</h2>
					<p className="text-[.95rem] mid:text-[1.7rem] lg:text-[2.1rem] mt-6 lg:mt-8">A Masterpiece of Modern Medicine</p>
				</div>
			</div>
		</Parallax>
	</ParallaxProvider>
  );
};

export default Welcome;