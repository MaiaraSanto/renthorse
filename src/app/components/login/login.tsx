"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Cavalo26 from "../../assets/images/Cavalo26.jpg";
import googleIcons from "../../assets/images/google-icon.png";
import facebookIcons from "../../assets/images/facebook-icon.png";
import AppleIcons from "../../assets/images/appple-icon.png";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="max-w-screen-xl h-auto lg:h-[960px] sm:p-4 lg:p-0 ">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Imagem */}
        <div className="w-full lg:w-1/2 h-[32rem] md:h-[500px] lg:h-[960px] relative">
          <div className="overflow-hidden h-full w-full md:w-auto lg:w-auto rounded-tr-none rounded-br-none lg:rounded-tr-2xl lg:rounded-br-2xl">
            <Image 
              src={Cavalo26} 
              alt="Imagem" 
              layout="fill" 
              objectFit="cover"  
              className="rounded-tr-none rounded-br-none lg:rounded-tr-2xl lg:rounded-br-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/5 text-left flex flex-col justify-center px-4 lg:px-10">
          <div className="block font-medium text-3xl mb-8 text-center lg:text-left">Login</div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg px-6 py-3 placeholder-Primary bg-[#f4ebd0]"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg px-6 py-3 placeholder-Primary bg-[#f4ebd0]"
                required
              />
            </div>
            <div className="text-right">
              <a href="#" className="inline-block">
                Esqueceu a senha?
              </a>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full text-white px-5 py-3 rounded-md text-1xl bg-[#122620]"
              >
                Entrar
              </button>
            </div>
          </form>
          <div className="mt-8 lg:mt-16 mb-4">
            <p className="text-center mb-10">Ou continue com</p>
            <div className="flex gap-7 justify-center">
              <img
                src={facebookIcons.src}
                alt="Facebook"
                className="w-10 h-10 cursor-pointer"
              />
              <img
                src={AppleIcons.src}
                alt="Apple"
                className="w-9 h-9 cursor-pointer"
              />
              <img
                src={googleIcons.src}
                alt="Google"
                className="w-9 h-9 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
