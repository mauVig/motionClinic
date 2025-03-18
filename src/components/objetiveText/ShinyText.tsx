import { useStore } from "@/store/storeGlobal.ts";

export const ShinyText = ({ disabled = false, speed = 500, className = '' }) => {
  const { myLang } = useStore();
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#6e6e6ea4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(232, 232, 232, 0) 20%, rgba(232, 232, 232, 0.8) 50%, rgba(232, 232, 232, 0) 80%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      { myLang ? (
         <p className="text-center block max-w-screen-lg text-xl sm:text-2xl lg:text-4xl">
          Our goal is to help you <span className="text-purple"> regain your quality of life</span>, we are here to help you continue doing what you love and keep trying to improve yourself. With years of experience and the most advanced techniques, we make sure that your surgery is a success and your recovery is as fast as possible.
        </p>
      ):(
        <p className="text-center block max-w-screen-lg text-xl sm:text-2xl lg:text-4xl">
          Nuestro objetivo es ayudarte a <span className="text-purple">recuperar tu calidad de vida</span>, estamos acá para que sigas haciendo lo que más te gusta y sigas intentando superarte. 
          Con años de experiencia y las técnicas más avanzadas, nos aseguramos que tu cirugía sea 
          un éxito  y tu recuperación sea lo más rápida posible.
        </p>
      )}
     
    </div>
  );
};

export default ShinyText;