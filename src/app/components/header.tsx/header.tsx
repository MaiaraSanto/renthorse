"use client";
import React, { useState } from "react";
import Logo from "../logo";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
    const pathname = usePathname();
    const [activeRoute, setActiveRoute] = useState<string>(pathname);

    const goToLink = (link: string) => {
        setActiveRoute(link);
        window.location.href = link;
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" });

    const logoSize = isTablet
    ? { width: "35", height: "55" }
    : { width: "51", height: "95" };

    const isActive = (route: string) => activeRoute === route;

    return (
        <div className="w-full sm:h-16 lg:h-20 xl:h-24 flex text-white justify-between items-center px-4 sm:px-6 bg-Secondary pt-4 sm:pt-0 md:pt-0 lg:pt-0 relative ">
            <div className="flex items-center gap-4 text-3xl font-normal cursor-pointer ml-4 sm:ml-8 md:ml-12 lg:ml-16" onClick={() => goToLink("/")}>                 
                <Logo width={logoSize.width} height={logoSize.height} />
                <h1 className="text-yellow-100">Rent Horse</h1>
            </div>
            <div className="hidden md:flex bg-[#122620]">
                <ul className="flex gap-8 lg:gap-16 text-lg font-normal cursor-pointer justify-center mr-4 sm:mr-8 md:mr-11">
                    <li className={`text-xl font-roboto ${isActive("/") ? "text-yellow-400" : "text-white"} hover:text-yellow-400`} onClick={() => goToLink("/")}>Home</li>
                    <li className={`text-xl font-roboto ${isActive("/galeria") ? "text-yellow-400" : "text-white"} hover:text-yellow-400`} onClick={() => goToLink("/galeria")}>Galeria</li>
                    <li className={`text-xl font-roboto ${isActive("/about") ? "text-yellow-400" : "text-white"} hover:text-yellow-400`} onClick={() => goToLink("/about")}>Sobre</li>
                    <li className={`text-xl font-roboto ${isActive("/faq") ? "text-yellow-400" : "text-white"} hover:text-yellow-400`} onClick={() => goToLink("/faq")}>Faq</li>
                    <li className={`text-xl font-roboto ${isActive("/login") ? "text-yellow-400" : "text-white"} hover:text-yellow-400`} onClick={() => goToLink("/login")}>Login</li>
                </ul>
            </div>
            <div className="md:hidden flex items-center p-4 text-3xl">
                <button onClick={toggleMenu} className="text-white focus:outline-none mr-4">
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden absolute top-[110px] sm:top-[64px] right-0 w-full bg-Secondary p-10 flex flex-col items-center justify-around z-20  transition-opacity duration-300 opacity-200 overflow-hidden border-t border-white"
            >
                <ul className="flex flex-col gap-10 text-lg font-normal text-center h-[430px]">
                    <li className={`text-xl font-roboto border-b border-white/20 p-4  px-[404px]  ${isActive("/") ? "text-yellow-400 " : "text-white "} hover:text-yellow-400 `} onClick={() => goToLink("/")}>Home</li>
                    <li className={`text-xl font-roboto border-b border-white/20 p-4 ${isActive("/galeria") ? "text-yellow-400" : "text-white"} hover:text-yellow-400`} onClick={() => goToLink("/galeria")}>Galeria</li>
                    <li className={`text-xl font-roboto border-b border-white/20 p-4 ${isActive("/about") ? "text-yellow-400" : "text-white"} hover:text-yellow-400`} onClick={() => goToLink("/about")}>Sobre</li>
                    <li className={`text-xl font-roboto border-b border-white/20 p-4 ${isActive("/faq") ? "text-yellow-400" : "text-white"} hover:text-yellow-400`} onClick={() => goToLink("/faq")}>Faq</li>
                    <li className={`text-xl font-roboto border-b border-white/20 p-4 ${isActive("/login") ? "text-yellow-400" : "text-white"} hover:text-yellow-400`} onClick={() => goToLink("/login")}>Login</li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Header;
