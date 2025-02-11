'use client';
import Image from 'next/image';
import React from 'react';
import Cavalo23 from '../../assets/images/Cavalo23.jpg';

const Sobre = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  mx-auto p-4 md:p-6 lg:p-8 ">
      <div className="flex flex-col-reverse lg:flex-row md:flex-col items-center justify-center lg:gap-10 md:gap-12 w-full">
      <div className="order-2 md:order-1 lg:md:w-1/2 text-left flex flex-col justify-start p-4 lg:p-0 md:p-6 lg:pr-4 md:pr-6"> 
  {/* Título */}
  <h1 className="mb-4 md:mb-6 lg:mb-10 text-xl md:text-2xl lg:text-3xl">QUEM SOMOS</h1>
  
  {/* Subtítulo */}
  <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 lg:mb-8">Somos a Rent Horse</h2>
  
  {/* Texto */}
  <p className="max-lines-7 text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose text-justify mb-6 md:mb-8 lg:mb-12">
    Uma plataforma dedicada ao universo dos cavalos, desenvolvida para suprir as demandas de apaixonados e admiradores desses magníficos animais. 
    Com um profundo compromisso por essas incríveis criaturas, a plataforma proporciona uma vivência completa e enriquecedora, permitindo aos usuários explorar, aprender e se conectar com o mundo equino de forma especial. 
    Seu objetivo é atender tanto os entusiastas quanto os curiosos, garantindo uma jornada única e imersiva no fascinante universo dos cavalos. 
    Além disso, oferece informações detalhadas e experiências interativas que transformam o contato com os cavalos em algo ainda mais envolvente e memorável. 
  </p>
</div>

        <div className="order-1 md:order-2 w-full  lg:w-5/12  relative">
          <div className="relative  overflow-hidden rounded-3xl h-96 md:h-[50rem] lg:h-96">
            <Image
              className=" object-cover w-full h-full   "
              src={Cavalo23}
              alt="Imagem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
