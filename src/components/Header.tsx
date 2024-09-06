"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg w-full py-4 px-8 fixed top-0 z-50">
            <nav className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                        {/* Placeholder for logo */}
                        <span className="text-white font-bold text-xl">SV</span>
                    </div>
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                        Agendame
                    </span>
                </div>



                {/* Desktop navigation links */}
                <ul className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-300">

                    <li>
                        <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">
                            Contacto
                        </a>
                    </li>
                    {/* Dark mode toggle button (always visible) */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full border border-gray-500 dark:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        {darkMode ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 text-yellow-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 3v1m0 16v1m8.364-12.364l-.707-.707M4.343 19.657l-.707-.707M21 12h1M3 12H2m16.364 7.364l-.707-.707M4.343 4.343l-.707-.707M12 5a7 7 0 110 14 7 7 0 010-14z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 text-gray-900 dark:text-gray-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.293 14.293A8 8 0 015.707 2.707a10 10 0 0011.586 11.586z"
                                />
                            </svg>
                        )}
                    </button>
                    {/* Login button */}
                    <li>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
                            Login
                        </button>
                    </li>
                </ul>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-4">
                    {/* Hamburger menu icon */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 dark:text-gray-300 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu (conditionally rendered) */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 md:hidden">
                        <ul className="flex flex-col items-center space-y-4 py-4">
                            <li>
                                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">
                                    Contacto
                                </a>
                            </li>
                            {/* Login button */}
                            <li>
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
