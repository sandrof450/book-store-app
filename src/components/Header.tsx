"use client"

import { BookOpen, Menu, X } from "lucide-react"
import DesktopMenu from './DesktopMenu';
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import "@/app/globals.css"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return(
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between"> {/*WEB*/ }
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <BookOpen className="text-white w-8 h-8"/>
            </div>

            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Livraria Fracaro
              </h1>
              <p className="text-sm text-gray-600">Seu universo literário</p>
            </div>   
          </div>

          <DesktopMenu/>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>

        {isMenuOpen && (
          <MobileMenu/>
        )}

      </div>
    </header>
  );
}