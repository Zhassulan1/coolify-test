"use client";

import { useState } from 'react';
import PrimaryLink2 from '../../ui/primaryLink2';

export default function Header({ mainBtnText }: { mainBtnText?: string }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 z-10">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <a href="/" className="flex items-center">
                    <img src="/logo.png" className="mr-3 h-6" alt="Volumize Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Volumize</span>
                </a>
                <div className="hidden lg:flex justify-center items-center flex-grow">
                    <ul className="flex flex-row space-x-8 font-medium"> 
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent">
                        Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="block py-2 pr-4 pl-3 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent">
                        About
                        </a>
                    </li>
                    <li>
                        <a href="/team" className="block py-2 pr-4 pl-3 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent">
                        Team
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    {!!mainBtnText && (
                        <PrimaryLink2 url={"/create"} text={mainBtnText}></PrimaryLink2>
                    )}
                    <button 
                        data-collapse-toggle="mobile-menu-2" 
                        type="button" 
                        className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" 
                        aria-controls="mobile-menu-2" 
                        aria-expanded={isMobileMenuOpen}
                        onClick={handleMobileMenuToggle}
                    >
                    <span className="sr-only">
                        Open main menu
                    </span>
                    <svg className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                        fillRule="evenodd" 
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                        clipRule="evenodd"
                        />
                    </svg>
                    <svg 
                        className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                        fillRule="evenodd" 
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                </div>

                <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium items-center"> 
                    <li className="text-white"> <a href="/" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-700 hover:text-white">
                        Home
                    </a> 
                    <hr className="border-b border-solid border-white"/>
                    </li>

                    <li className="text-white"> <a href="/about" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-700 hover:text-white">
                        About
                    </a> 
                    <hr className="border-b border-solid border-white"/>
                    </li>

                    <li className="text-white"> <a href="/team" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-700 hover:text-white">
                        Team
                    </a> 
                    <hr className="border-b border-solid border-white"/>
                    </li>
                </ul>
                </div>
                
            </nav>
        </header>
    )
}
