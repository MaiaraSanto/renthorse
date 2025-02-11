"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation"; // Import correto para App Router
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header.tsx/header";
import Link from "next/link";

import CardBanner from "@/app/components/galery/CardBanner";
import CardGridBanner from "@/app/components/galery/CardGridBanner";
import SearchGalery from "@/app/components/galery/SearchGalery";

import galleryData from "@/app/components/galery/galleryData.json";

const PageGaleria = () => {
  const GreenSvg = dynamic(() => import("./Background"));
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Configuração de paginação
  const cardsPerPage = 8; // Número de cards por página
  const [currentPage, setCurrentPage] = useState(1);

  // Atualizar a página atual a partir da URL
  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam) {
      setCurrentPage(Number(pageParam));
    }
  }, [searchParams]);

  // Determinar os índices de início e fim da página atual
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const filteredCards = searchTerm
    ? galleryData.gridData.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : galleryData.gridData.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  // Dividir os dados da galeria para a página atual


  // Função para mudar para a próxima página
  const nextPage = () => {
    if (endIndex < galleryData.gridData.length) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      updatePageInURL(newPage);
    }
  };

  // Função para voltar para a página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      updatePageInURL(newPage);
    }
  };

  // Atualizar URL com o número da página atual
  const updatePageInURL = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/galeria?${params.toString()}`); // Atualizar a URL
  };

  const searchedCard = searchTerm
    ? galleryData.gridData.find((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : null;

  return (
    <GreenSvg>
      <Header />
      <div className="flex flex-col  items-center px-2 sm:px-6 md:px-1 lg:px-10">
        <SearchGalery onSearch={setSearchTerm} />

        {searchedCard && (
          <div className="flex flex-col md:flex-row w-full max-w-4xl items-center md:items-start gap-6 my-6">
            <div className="w-full md:w-1/2">
              <Link href={`/horse?title=${searchedCard.title}&page=${currentPage}`} passHref replace>
                <img
                  src={searchedCard.imageSrc}
                  alt={searchedCard.title}
                  className="w-full rounded-lg cursor-pointer"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-white">{searchedCard.title}</h2>
              <p className="text-white text-2xl">{searchedCard.description}</p>
            </div>
          </div>
        )}
        {searchTerm === "" && (
          <div className=" flex flex-col md:flex-row lg:flex-row w-full  sm:w-full sm:items-start justify-center gap-y-10 lg:gap-x-7 gap-x-3 items-center md:items-center gap-6 sm:p-2">
            {/* Card "Saiba Mais" fixo */}

            <CardBanner

              title="Campolina"
              imageSrc="https://img.freepik.com/fotos-gratis/cavalo-correndo-pela-velha-paisagem-ocidental_23-2150527864.jpg?w=360&t=st=1700870273~exp=1700870873~hmac=ea9ab28f71543b129c7369901daa596c6b47055425d673ea6591fe246e28ec8a"
              altText="cavalos"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />

            {/* Grade de cards da galeria */}
            <div className="grid grid-cols-2 gap-y-12 sm:gap-x-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              {filteredCards.map((item, index) => (
                <Link
                  key={index}
                  href={`/horse?title=${item.title}&page=${currentPage}`}
                  passHref
                >
                  <CardGridBanner
                    imageSrc={item.imageSrc}
                    title={item.title}
                    description={item.description}
                    className="sm:ml-[-4px] sm:mr-[-4px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
        {searchTerm === "" && (
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${currentPage === 1
                ? "bg-gray-200 opacity-50 cursor-not-allowed"
                : "bg-tan text-white"
                }`}
            >
              Anterior
            </button>
            <button
              onClick={nextPage}
              disabled={endIndex >= galleryData.gridData.length}
              className={`px-4 py-2 rounded ${endIndex >= galleryData.gridData.length
                ? "bg-gray-200 opacity-50 cursor-not-allowed"
                : "bg-tan text-white"
                }`}
            >
              Próximo
            </button>
          </div>
        )}
      </div>
      <Footer />

    </GreenSvg>
  );
};

export default PageGaleria;
