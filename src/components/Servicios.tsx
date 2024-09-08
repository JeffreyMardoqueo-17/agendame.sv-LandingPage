import React from 'react'

export default function Servicios() {
    return (
        <section className="w-full h-screen flex items-center justify-between bg-white dark:bg-gray-900 relative">

            {/* Left Section */}
            <div className=" ml-3 w-1/2 h-[85%]  bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm flex flex-col justify-center items-start p-8 space-y-4 relative z-10">
                {/* Dejo esta sección vacía ya que vas a agregar más contenido luego */}
            </div>

            {/* Right Section */}
            <div className="w-1/2 h-full relative flex items-center justify-center z-50">
                {/* Aquí agregamos la imagen del hombre que conecta */}
                <div className="relative w-[60%] h-auto flex items-center justify-center">
                    <img src="/svg/conectaar.svg" alt="Hombre conectando" className="w-auto h-auto" />
                </div>
            </div>
            {/* Curva en la parte inferior */}
            <div className="absolute bottom-0 w-full">
                <img src="/svg/curbaInferior.svg" alt="Curva decorativa" className="w-full h-auto text-red-400" />
            </div>
        </section>
    )
}
