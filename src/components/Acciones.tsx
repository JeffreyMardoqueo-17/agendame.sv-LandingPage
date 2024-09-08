"use client";
import React from 'react'

export default function Acciones() {
    return (
        <div className="relative w-full h-screen flex flex-col justify-between items-center   bg-bgligth dark:bg-bgdark overflow-hidden">
            {/* Curva en la parte superior */}
            <div className="absolute top-0 w-full">
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
                        d="M0 160L50 149.5C100 139 200 118 300 118C400 118 500 139 600 141.3C700 143.7 800 127.3 850 119.2L900 111L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
                        fill="#152a58"
                        className="dark:bg-yellow-400"
                    />
                </svg>
            </div>

            {/* Título de la sección */}
            <div className="flex flex-col items-center justify-center mt-36">
                <h2 className="text-4xl font-bold text-white mb-1 z-10 ">¿Qué puedes hacer?</h2>
            </div>

            {/* Tarjetas de acciones */}
            <div className="flex justify-around w-full h-auto max-h-[50%] mt-8 z-10">
                <div className="w-1/4 bg-white border shadow-xl cursor-pointer dark:bg-gray-800 p-6 rounded-xl flex flex-col items-center">
                    <h3 className="text-3xl font-semibold mb-20 text-bgdark dark:text-bgligth">Consumir</h3>
                    <img src="/svg/conectaar.svg" alt="Consumir" className="w-auto h-[40%] mb-4" />
                </div>
                <div className="w-1/4 bg-white border shadow-xl cursor-pointer dark:bg-gray-800 p-6 rounded-xl flex flex-col items-center">
                    <h3 className="text-3xl font-semibold mb-20 text-bgdark dark:text-bgligth">Proveer</h3>
                    <img src="/svg/conectaar.svg" alt="Proveer" className="w-auto h-[40%] mb-4" />
                </div>
                <div className="w-1/4 bg-white border shadow-xl cursor-pointer dark:bg-gray-800 p-6 rounded-xl flex flex-col items-center">
                    <h3 className="text-3xl font-semibold mb-20 text-bgdark dark:text-bgligth">Crecer tu negocio</h3>
                    <img src="/svg/conectaar.svg" alt="Crecer tu negocio" className="w-auto h-[40%] mb-4" />
                </div>
            </div>

            {/* Carrusel de íconos en la parte inferior */}
            <div className="w-[70%] overflow-hidden mt-8 mb-12">
                <div className="marquee flex items-center justify-around">
                    {[...Array(10)].map((_, index) => (
                        <img
                            key={index}
                            src="/icons/icono-carousel.svg"
                            alt={`Icono ${index + 1}`}
                            className="w-12 h-12 mx-4"
                        />
                    ))}
                </div>
            </div>

            {/* Estilos para el carrusel en movimiento */}
            <style jsx>{`
                .marquee {
                    animation: scroll 12s linear infinite;
                }

                @keyframes scroll {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
    );
}

