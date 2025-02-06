import React from "react";


const WhoIs:React.FC = () => {
    return (
        <>
            <section className="min-h-screen w-full relative px-6 text-black flex items-center justify-center">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-medium">Who is</span>
                    <img src="/img/Andres.jpg" alt="Doctor Andres" className="h-56" />
                    <span className="text-3xl font-medium">Andrés</span>
                </div>
            </section>
        </>
    )
}

export default WhoIs;