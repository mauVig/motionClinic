export const ShinyText = ({ disabled = false, speed = 500, className = '' }) => {
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
      {/* <p className="text-center block max-w-screen-lg text-sm mid:text-lg md:text-4xl"> */}
      <p className="text-center block max-w-screen-lg text-xl sm:text-2xl lg:text-4xl">
        Nuestro objetivo es ayudarte a <span className="text-purple"> recuperar tu calidad de vida</span>, estamos acá para que sigas haciendo lo que más te gusta y sigas intentando superarte. 
        Con años de experiencia y las técnicas más avanzadas, nos aseguramos que tu cirugía sea 
        un éxito  y tu recuperación sea lo más rápida posible.
      </p>
    </div>
  );
};

export default ShinyText;