'use client';
import React, { useState } from "react";

const FaqComponent = () => {
  const [expanded, setExpanded] = useState<null | number>(null); //INICIADO COMO null

  const handleExpanded = (index: number) => {
    if (index === expanded) {
      setExpanded(null); 
    } else {
      setExpanded(index); 
    }
  };

  return (
    <div className="faq-container bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
      <h1 className="mb-2 mb-4 font-bold text-3xl">FAQ</h1>
      <h2 className="mb-2 mb-4 font-bold text-lg sm:text-xl">Dúvidas frequentes</h2>

      <div className="text-start">
        
        <div id="0">
          <button
            className="group relative w-full py-4 flex items-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:rounded-md"
            onClick={() => handleExpanded(0)}
          >
            {expanded === 0 ? (
              <div
                className="w-10 h-0 rotate-90 mb-[-20px] ml-[-8px] 
                    border-t-[10px] border-t-transparent
                    border-l-[20px] border-black
                    border-b-[10px] border-b-transparent "
              ></div>
            ) : (
              <div
                className="w-8 h-0 
                    border-t-[10px] border-t-transparent
                    border-l-[20px] border-black
                    border-b-[10px] border-b-transparent"
              ></div>
            )}
            <span className=" text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose block text-left mx-5px text-justify">
            O que é a Rent Horse e o que a plataforma oferece?
            </span>
          </button>
          <div className={`content ${expanded === 0 ? "" : "hidden"}`}>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose px-10 py-2 text-sm font-semibold text-gray-700 text-justify">
            A Rent Horse é uma plataforma que conecta entusiastas de cavalos a serviços, informações e oportunidades, como aluguel de cavalos, eventos equestres e cuidados especializados.
            </p>
          </div>
        </div>
        <div>
          <button
            className="group relative w-full py-4 flex items-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:rounded-md"
            onClick={() => handleExpanded(1)}
          >
            {expanded === 1 ? (
              <div
              className="w-10 h-0 rotate-90 mb-[-20px] ml-[-8px] 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent "
            ></div>
            ) : (
              <div
              className="w-8 h-0 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent"
            ></div>
            )}
            <span className="block text-left mx-5px text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
             Quem pode usar a plataforma e em que situação ela poderá ser utilizada?
            </span>
          </button>
          <div className={`content ${expanded === 1 ? "" : "hidden"}`}>
            <p className="px-10 py-2 text-sm font-semibold text-gray-700 text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Qualquer pessoa interessada no mundo dos cavalos pode utilizar a plataforma, incluindo iniciantes, profissionais e amantes de cavalos que buscam aprender ou vivenciar novas experiências.
            </p>
          </div>
        </div>
        <div>
          <button
            className="group relative w-full py-4 flex items-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:rounded-md"
            onClick={() => handleExpanded(2)}
          >
            {expanded === 2 ? (
              <div
                className="w-10 h-0 rotate-90 mb-[-20px] ml-[-8px] 
                    border-t-[10px] border-t-transparent
                    border-l-[20px] border-black
                    border-b-[10px] border-b-transparent "
              ></div>
            ) : (
              <div
                className="w-8 h-0 
                    border-t-[10px] border-t-transparent
                    border-l-[20px] border-black
                    border-b-[10px] border-b-transparent"
              ></div>
            )}
            <span className="block text-left mx-5px text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Como faço para alugar  um cavalo na plataforma?
            </span>
          </button>
          <div className={`content ${expanded === 2 ? "" : "hidden"}`}>
            <p className="px-10 py-2 text-sm font-semibold text-gray-700 text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Basta se cadastrar na plataforma, acessar a seção de aluguel e selecionar o cavalo que melhor atende às suas necessidades. Você pode filtrar por localização, tipo de atividade e outros critérios
            </p>
          </div>
        </div>
        <div>
          <button
            className="group relative w-full py-4 flex items-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:rounded-md"
            onClick={() => handleExpanded(3)}
          >
            {expanded === 3 ? (
              <div
              className="w-10 h-0 rotate-90 mb-[-20px] ml-[-8px] 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent "
            ></div>
            ) : (
              <div
              className="w-8 h-0 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent"
            ></div>
            )}
            <span className="block text-left mx-5px text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Preciso ter experiência para alugar um cavalo?
            </span>
          </button>
          <div className={`content ${expanded === 3 ? "" : "hidden"}`}>
            <p className="px-10 py-2 text-sm font-semibold text-gray-700 text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Não! A plataforma oferece opções para todos os níveis de experiência. Além disso, você pode consultar informações sobre cada cavalo e contar com o suporte de especialistas.
            </p>
          </div>
        </div>
        <div>
        </div>
        <div>
          <button
            className="group relative w-full py-4 flex items-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:rounded-md"
            onClick={() => handleExpanded(4)}
          >
            {expanded === 4 ? (
              <div
              className="w-10 h-0 rotate-90 mb-[-20px] ml-[-8px] 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent "
            ></div>
            ) : (
              <div
              className="w-8 h-0 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent"
            ></div>
            )}
            <span className="block text-left mx-5px text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
             A plataforma oferece cursos ou treinamentos online sobre treinamento e equitação?
            </span>
          </button>
          <div className={`content ${expanded === 4 ? "" : "hidden"}`}>
            <p className="px-10 py-2 text-sm font-semibold text-gray-700 text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Sim! A Rent Horse conta com parcerias que oferecem cursos online e presenciais sobre cuidados, treinamento e equitação.
            </p>
          </div>
        </div>
        <div>
        </div>
        <div>
          <button
            className="group relative w-full py-4 flex items-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:rounded-md"
            onClick={() => handleExpanded(5)}
          >
            {expanded === 5 ? (
              <div
              className="w-10 h-0 rotate-90 mb-[-20px] ml-[-8px] 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent "
            ></div>
            ) : (
              <div
              className="w-8 h-0 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent"
            ></div>
            )}
            <span className="block text-left mx-5px text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
             É seguro utilizar os serviços da plataforma?
            </span>
          </button>
          <div className={`content ${expanded === 5 ? "" : "hidden"}`}>
            <p className="px-10 py-2 text-sm font-semibold text-gray-700 text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Sim, todos os serviços e parceiros da plataforma são cuidadosamente verificados para garantir segurança e qualidade. Além disso, há suporte disponível para resolver dúvidas ou problemas.
            </p>
          </div>
        </div>
        <div>
        </div>
        <div>
          <button
            className="group relative w-full py-4 flex items-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:rounded-md"
            onClick={() => handleExpanded(6)}
          >
            {expanded === 6 ? (
              <div
              className="w-10 h-0 rotate-90 mb-[-20px] ml-[-8px] 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent "
            ></div>
            ) : (
              <div
              className="w-8 h-0 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent"
            ></div>
            )}
            <span className="block text-left mx-5px text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
             Como faço para anunciar meu cavalo ou serviço?
            </span>
          </button>
          <div className={`content ${expanded === 6 ? "" : "hidden"}`}>
            <p className="px-10 py-2 text-sm font-semibold text-gray-700 text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Para anunciar, você deve criar uma conta, acessar a área de anúncios e seguir as orientações para cadastrar seu cavalo ou serviço. A equipe da Rent Horse revisará o conteúdo antes da publicação.
            </p>
          </div>
        </div>
        <div>
        </div>
        <div>
          <button
            className="group relative w-full py-4 flex items-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:rounded-md"
            onClick={() => handleExpanded(7)}
          >
            {expanded === 7 ? (
              <div
              className="w-10 h-0 rotate-90 mb-[-20px] ml-[-8px] 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent "
            ></div>
            ) : (
              <div
              className="w-8 h-0 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent"
            ></div>
            )}
            <span className="block text-left mx-5px text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Posso participar de eventos organizados pela plataforma?
            </span>
          </button>
          <div className={`content ${expanded === 7 ? "" : "hidden"}`}>
            <p className="px-10 py-2 text-sm font-semibold text-gray-700 text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Com certeza! A plataforma divulga e organiza eventos equestres, desde competições até encontros informais. Fique de olho no calendário de eventos e inscreva-se diretamente pela plataforma.
            </p>
          </div>
        </div>
        <div>
        </div>
        <div>
          <button
            className="group relative w-full py-4 flex items-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:rounded-md"
            onClick={() => handleExpanded(8)}
          >
            {expanded === 8 ? (
              <div
              className="w-10 h-0 rotate-90 mb-[-20px] ml-[-8px] 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent "
            ></div>
            ) : (
              <div
              className="w-8 h-0 
                  border-t-[10px] border-t-transparent
                  border-l-[20px] border-black
                  border-b-[10px] border-b-transparent"
            ></div>
            )}
            <span className="block text-left mx-5px text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Quais cuidados básicos devo ter com um cavalo alugado?
            </span>
          </button>
          <div className={`content ${expanded === 8 ? "" : "hidden"}`}>
            <p className="px-10 py-2 text-sm font-semibold text-gray-700 text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Você receberá instruções detalhadas sobre os cuidados necessários, como alimentação, hidratação e descanso. É importante seguir essas orientações para o bem-estar do animal.
            </p>
          </div>
        </div>
        <div>
        </div>
        <div>
          <button
            className="group relative w-full py-4 flex items-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:rounded-md"
            onClick={() => handleExpanded(9)}
          >
            {expanded === 9 ? (
              <div
                className="w-10 h-0 rotate-90 mb-[-20px] ml-[-8px] 
                    border-t-[10px] border-t-transparent
                    border-l-[20px] border-black
                    border-b-[10px] border-b-transparent "
              ></div>
            ) : (
              <div
                className="w-8 h-0 
                    border-t-[10px] border-t-transparent
                    border-l-[20px] border-black
                    border-b-[10px] border-b-transparent"
              ></div>
            )}
            <span className="block text-left mx-5px text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            10. O que fazer se eu tiver um problema com um serviço contratado?
            </span>
          </button>
          <div className={`content ${expanded === 9 ? "" : "hidden"}`}>
            <p className="px-10 py-2 text-sm font-semibold text-gray-700 text-justify text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose lg:leading-loose">
            Entre em contato com o suporte da Rent Horse pelo site ou aplicativo. A equipe está disponível para resolver qualquer questão e garantir sua satisfação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
