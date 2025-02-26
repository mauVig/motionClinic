import { useStore } from '@/store/storeGlobal'

export const ClinicTestify = () => {
  const { myLang } = useStore();  
  return(
    <section className="bg-[#cccccc] w-full relative  text-black flex justify-center items-center py-6 xl:py-0">
      <div className="px-6">
        <h2 className="pb-4">
            <span className="text-xl font-medium">Motion Clinic</span> <br/>
            <span className="text-6xl font-bold">{myLang ? 'Studio': 'Estudio'}</span>
        </h2>
        <img src="/img/myClinic.jpg" alt="picture of the" />
        <div className="flex items-center gap-4 pt-4">
            <img src="/img/locationIcon.svg" className="w-8" alt="Logo location" />
            <p className="block font-medium w-44">LA IMPRENTA - Maure 1608, Piso 2. </p>
        </div>
      </div>
    </section>
  );
}

export default ClinicTestify;