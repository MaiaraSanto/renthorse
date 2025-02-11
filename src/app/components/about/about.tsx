'use client';
import Image from 'next/image';
import React from 'react';
import Cavalo24 from '../../assets/images/Cavalo24.jpg';
import Cavalo25 from '../../assets/images/Cavalo25.jpeg';

const AboutComponent = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-10 md:my-20 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col flex-col-reverse lg:flex-row items-center justify-center gap-10 h-full">
          <div className="text-center md:text-left w-full lg:w-1/2 flex flex-col justify-center ">
            <h1 className="text-2xl font-bold mb-4 md:mb-9">QUEM SOMOS</h1>
            <h2 className="text-2xl font-bold mb-4">Somos a Rent Horse</h2>
            <p className="mb-4 text-justify text-sm md:mb-0 md:text-lg md:leading-relaxed lg:text-lg lg:leading-loose">
            Uma plataforma inovadora voltada ao universo dos cavalos, projetada para atender às expectativas de admiradores e entusiastas do mundo equino. 
            Com uma dedicação especial a esses magníficos animais, oferece uma jornada informativa e imersiva, possibilitando aos usuários explorar, aprender e vivenciar experiências únicas. 
            Voltada tanto para iniciantes quanto para conhecedores, a plataforma proporciona conteúdos ricos e oportunidades de interação que aproximam ainda mais os amantes dos cavalos de seu fascinante universo. 
            Cada detalhe é pensado para criar conexões genuínas, promovendo um ambiente acolhedor e repleto de conhecimento sobre essas majestosas criaturas.
            </p>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="relative overflow-hidden rounded-3xl h-90 md:h-[30rem] lg:h-96">
              <Image
                className="object-cover w-full h-full"
                src={Cavalo24}
                alt="Imagem"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto my-10 md:my-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row flex-col items-center justify-center gap-10 h-full">
          <div className="w-full lg:w-5/12 ">
            <div className="relative overflow-hidden rounded-3xl h-90 md:h-[30rem] lg:h-96">
              <Image
                className="object-cover w-full h-full "
                src={Cavalo25}
                alt="Imagem"
              />
            </div>
          </div>
          <div className="text-center md:text-left w-full lg:w-1/2 flex flex-col justify-center">
          <p className="mb-4 text-justify text-sm md:mb-6 md:text-lg md:leading-relaxed lg:text-lg lg:leading-loose">           Uma plataforma projetada especialmente para conectar pessoas ao mundo fascinante dos cavalos, atendendo às demandas de aficionados e admiradores desses animais incríveis. 
            Focada em proporcionar uma experiência inesquecível, combina informações detalhadas e oportunidades de aprendizado que enriquecem a relação entre os cavalos e seus apreciadores. 
            
            </p>
            <p className="mb-4 text-justify text-sm md:mb-0 md:text-lg md:leading-relaxed lg:text-lg lg:leading-loose">
            Cada recurso oferecido foi pensado para inspirar e educar, promovendo o amor por esses magníficos seres. 
            Aqui, apaixonados por equinos encontram um ambiente que estimula tanto o aprendizado quanto a diversão, criando experiências que vão além do comum.  
           
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
