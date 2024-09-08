"use client";
import React from 'react'

export default function Servicios() {
    return (
        <section className="w-full h-screen flex items-center justify-between bg-bgligth dark:bg-bgdark relative">

            {/* Left Section */}
            <div className="ml-3 w-1/2 h-[85%] bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm flex flex-col justify-center items-start p-8 space-y-4 relative z-10">
                {/* Dejo esta sección vacía ya que vas a agregar más contenido luego */}
            </div>

            {/* Right Section */}
            <div className="w-1/2 h-full relative flex items-center justify-center z-10">
                {/* Aquí agregamos la imagen del hombre que conecta */}
                <div className="relative w-[60%] h-auto flex items-center justify-center">
                    <img src="/svg/conectaar.svg" alt="Hombre conectando" className="w-auto h-auto" />
                </div>
            </div>

            {/* Curva en la parte inferior (SVG incrustado directamente) */}
            <div className="absolute bottom-0 w-full">
                <svg
                    id="visual"
                    viewBox="0 0 900 600"
                    width="900"
                    height="600"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    className="w-full h-auto"
                >
                    <path
                        d="M0 438L50 448.5C100 459 200 480 300 480C400 480 500 459 600 456.7C700 454.3 800 470.7 850 478.8L900 487L900 601L850 601C800 601 700 601 600 601C500 601 400 601 300 601C200 601 100 601 50 601L0 601Z"
                        fill="#152a58"
                        className="dark:fill-beig"
                    />
                </svg>
            </div>

        </section>
    )
}
