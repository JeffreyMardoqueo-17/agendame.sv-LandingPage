"use client";

import React, { useEffect } from 'react';

export default function Hero() {
    // Animar las pelotitas en el fondo derecho
    useEffect(() => {
        const circles = document.querySelectorAll('.circle');
        circles.forEach((circle) => {
            circle.animate(
                [
                    { transform: 'translateY(0px)' },
                    { transform: 'translateY(20px)' },
                    { transform: 'translateY(0px)' },
                ],
                {
                    duration: 4000,
                    iterations: Infinity,
                }
            );
        });
    }, []);

    return (
        <section className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900">
            {/* Left Section */}
            <div className="w-1/2 flex flex-col justify-center items-start p-8 space-y-4">
                <h1 className="text-6xl font-bold text-blue-800">Agendame <span className="text-7xl">SV</span></h1>

            </div>

            {/* Right Section */}
            <div className="w-1/2 h-full relative flex items-center justify-center">
                {/* Burbujas en el fondo */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 space-y-4">
                    {[...Array(14)].map((_, i) => (
                        <div
                            key={i}
                            className={`circle w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-200 rounded-full opacity-80`}
                            style={{
                                position: 'absolute',
                                top: `${Math.random() * 80}%`,
                                left: `${Math.random() * 80}%`,
                            }}
                        ></div>
                    ))}
                </div>

                {/* Contenedor con efecto de vidrio borroso */}
                <div className="relative w-full h-full bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm  rounded-xl flex items-center justify-center">

                    <span className="text-gray-700 dark:text-gray-200">Aquí va la imagen</span>
                </div>
            </div>
        </section>
    );
}
