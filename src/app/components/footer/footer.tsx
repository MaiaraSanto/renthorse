"use client";
import React from "react";
import Logo from "../logo";

const Footer = () => {
    const goToLink = (link: string) => {
        window.location.href = link;
    };

    return (
        <div className="flex flex-col min-h-[555px] items-center justify-between pt-10 sm:pt-20 flex-nowrap text-white px-2 sm:px-6 md:px-8 lg:px-10 bg-SecondaryLightj w-full overflow-x-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-10 gap-6 w-full">
                <div className="logo flex flex-col gap-5 col-span-4 w-full justify-center">
                    <span className="ml-4 md:h-110">
                        <Logo width="95" height="155 md:w-72 "/>
                    </span>
                    <h1 className="-mt-12 font-normal text-3xl">RentㅤHorse</h1>
                    <span className="flex-nowrap font-normal text-base">Alameda Rio Branco, 2528 Jardim Blumenau / Blumenau / SC</span>

                    <p className="flex-nowrap font-normal text-sm">Este site é protegido pelo reCAPTCHA e pelo Google. Política de Privacidade e Termos de Serviço</p>
                </div>

                <div className="col-span-2 sm:col-span-2 font-bold text-sm sm:text-lg">
                    <h2 className="mb-2 sm:mb-6">Empresa</h2>
                    <ul className="font-normal text-xs sm:text-sm flex flex-col gap-2 sm:gap-3">
                        <li className="flex items-center cursor-pointer" onClick={() => goToLink("/sobre")}>
                            <div className="w-1 h-1 bg-white rounded-full mr-2"></div> Quem somos
                        </li>
                        <li className="flex items-center cursor-pointer" onClick={() => goToLink("/galeria")}>
                            <div className="w-1 h-1 bg-white rounded-full mr-2"></div> Galeria
                        </li>
                        <li className="flex items-center cursor-pointer" onClick={() => goToLink("/faq")}>
                            <div className="w-1 h-1 bg-white rounded-full mr-2"></div> FAQ
                        </li>
                        <li className="flex items-center cursor-pointer" onClick={() => goToLink("/contato")}>
                            <div className="w-1 h-1 bg-white rounded-full mr-2"></div> Contato
                        </li>
                        <li className="flex items-center cursor-pointer" onClick={() => goToLink("/login")}>
                            <div className="w-1 h-1 bg-white rounded-full mr-2"></div> Login
                        </li>
                    </ul>
                </div>

                <div className="Newsletter col-span-4 sm:col-span-4">
                    <h1 className="col-span-1 font-bold text-sm sm:text-lg mb-2 sm:mb-6">Newsletter</h1>
                    <div>
                        <p className="text-xs sm:text-xs">Se inscreva em nossa Newsletter e receba nossas novidades em seu e-mail</p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-between my-4 sm:my-6">
                            <input type="text" className="w-full sm:w-2/4 h-10 rounded-md p-2" placeholder="Nome" />
                            <input type="email" className="w-full sm:w-2/4 h-10 rounded-md p-2" placeholder="Email" />
                        </div>
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="" id="" />
                            <span className="text-xs sm:text-xs">AO SE INSCREVER VOCÊ CONCORDA COM NOSSA POLÍTICA DE PRIVACIDADE</span>
                        </div>
                        <div className="my-8 sm:mt-8">
                            <button className="h-10 rounded-md w-full sm:w-auto bg-[#D6AD60] flex items-center justify-center text-[#122620]">INSCREVER-ME</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="w-full py-7" />

            <div className="font-normal text-xs sm:text-xs mt-3 sm:mt-5 w-full text-center pb-5">
                Copyright © 2023 | Rent Horse - todos os direitos reservados | Desenvolvido por May
            </div>
        </div>
    );
};

export default Footer;
