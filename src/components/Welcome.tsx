import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export const Welcome = () => {
	const CSSEffect = 30;
  return (
	<ParallaxProvider>
		<Parallax translateY={[-CSSEffect, CSSEffect]} className="back">
		  <div className="min-h-screen max-w-screen-2xl mx-auto w-full relative px-6 text-grey">
			<div className="absolute bottom-[20%] md:bottom-[4%]">
			  <h1 className="text-7xl mid:text-8xl lg:text-[10rem] font-medium">The <br />perfect<br />surgery</h1>
			  <p className="mt-2 text-sm mid:text-lg lg:text-[2.1rem] lg:mt-6">A Masterpiece of Modern Medicine</p>
			</div>
		  </div>
		</Parallax>
	</ParallaxProvider>
  );
};

export default Welcome;