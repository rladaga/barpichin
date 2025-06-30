"use client";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import MenuFlipbook from "./MenuFlipbook";
import Sugerencias from "./Sugerencias";

export default function Home() {
  const [selected, setSelected] = useState("inicio");
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#4D1A13]">
      {/* Main content */}
      <main className="flex flex-col items-center flex-1 justify-center w-full relative px-2 sm:px-0">
        {selected === "menu" ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#4D1A13] min-h-[60vh] -mt-10 sm:-mt-16">
            <MenuFlipbook />
          </div>
        ) : selected === "sugerencias" ? (
          <Sugerencias />
        ) : (
          <>
            {/* Slogan above logo */}
            <div className="absolute top-25 sm:top-16 left-0 w-full flex justify-center pointer-events-none select-none">
              <span className="text-[#F0E4C9] text-base sm:text-lg font-milonga text-center tracking-wide px-2 sm:px-4 py-1 rounded">
                Bodegón tradicional, desde{" "}
                <span className="font-bayside">1958</span>
              </span>
            </div>
            {/* Logo */}
            <div
              className="flex flex-col items-center"
              style={{ marginTop: "0", marginBottom: "2vh" }}
            >
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/logo.png"
                  alt="Bar Pichin Logo"
                  width={180}
                  height={80}
                  className="w-[180px] h-auto sm:w-[200px] md:w-[220px] lg:w-[260px]"
                  priority
                />
              </div>
              {/* Social icons */}
              <div className="flex flex-row gap-6 mt-4 sm:gap-10 mb-4 sm:mb-6">
                <a
                  href="https://instagram.com/barpichin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram
                    size={28}
                    className="sm:!w-9 sm:!h-9"
                    color="#F0E4C9"
                  />
                </a>
                <a
                  href="https://maps.app.goo.gl/PzmoeNorEYHBJJEC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                >
                  <MdLocationPin
                    size={28}
                    className="sm:!w-9 sm:!h-9"
                    color="#F0E4C9"
                  />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=5491150195853&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp
                    size={28}
                    className="sm:!w-9 sm:!h-9"
                    color="#F0E4C9"
                  />
                </a>
              </div>
            </div>
            {/* Address - moved outside logo/icons container for independent positioning */}
            <div className="w-full flex flex-col items-center mt-6 sm:mt-10">
              <div className="text-[#F0E4C9] text-lg sm:text-2xl font-milonga text-center mb-1">
                Avenida de Mayo <span className="font-bayside">802</span>
              </div>
              <div className="text-[#F0E4C9] text-base sm:text-xl font-milonga text-center mt-1">
                Ciudad Autónoma de Buenos Aires
              </div>
            </div>
          </>
        )}
      </main>
      {/* Footer menu */}
      <footer className="footer-menu w-full flex flex-row justify-center items-center py-1 sm:py-1.5 fixed bottom-0 left-0 z-10">
        <nav className="flex flex-row gap-0 sm:gap-30 w-full max-w-lg justify-between px-8 sm:px-0">
          <button
            type="button"
            onClick={() => setSelected("inicio")}
            className={`flex flex-col items-center px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-lg transition-colors duration-150 ${
              selected === "inicio" ? "bg-[#4D1A13]" : "bg-[#F0E4C9]"
            } cursor-pointer`}
          >
            <Image
              src={selected === "inicio" ? "/home-selected.png" : "/home.png"}
              alt="Inicio"
              width={22}
              height={22}
              className="mb-0.5 sm:mb-1 w-6 h-6 sm:w-7 sm:h-7"
            />
            <span
              className={`font-milonga text-xs sm:text-base ${
                selected === "inicio" ? "text-[#F0E4C9]" : "text-[#4D1A13]"
              }`}
            >
              Inicio
            </span>
          </button>
          <button
            type="button"
            onClick={() => setSelected("sugerencias")}
            className={`flex flex-col items-center px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-lg transition-colors duration-150 ${
              selected === "sugerencias" ? "bg-[#4D1A13]" : "bg-[#F0E4C9]"
            } cursor-pointer`}
          >
            <Image
              src={
                selected === "sugerencias"
                  ? "/stars-selected.png"
                  : "/stars.png"
              }
              alt="Sugerencias"
              width={22}
              height={22}
              className="mb-0.5 sm:mb-1 w-6 h-6 sm:w-7 sm:h-7"
            />
            <span
              className={`font-milonga text-xs sm:text-base ${
                selected === "sugerencias" ? "text-[#F0E4C9]" : "text-[#4D1A13]"
              }`}
            >
              Sugerencias
            </span>
          </button>
          <button
            type="button"
            onClick={() => setSelected("menu")}
            className={`flex flex-col items-center px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-lg transition-colors duration-150 ${
              selected === "menu" ? "bg-[#4D1A13]" : "bg-[#F0E4C9]"
            } cursor-pointer`}
          >
            <Image
              src={
                selected === "menu"
                  ? "/restaurant-selected.png"
                  : "/restaurant.png"
              }
              alt="Menú"
              width={22}
              height={22}
              className="mb-0.5 sm:mb-1 w-6 h-6 sm:w-7 sm:h-7"
            />
            <span
              className={`font-milonga text-xs sm:text-base ${
                selected === "menu" ? "text-[#F0E4C9]" : "text-[#4D1A13]"
              }`}
            >
              Menú
            </span>
          </button>
        </nav>
      </footer>
    </div>
  );
}
