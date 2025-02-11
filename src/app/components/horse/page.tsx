"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import galleryData from "@/app/components/galery/galleryData.json";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa o CSS do carrossel

const HorseDetail = () => {
  const params = useSearchParams();
  const title = params.get("title");
  const page = params.get("page"); 
  const horse = galleryData.gridData.find((item) => item.title === title);

  if (!horse) {
    return <div className="text-center text-white">Cavalo não encontrado</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-4 gold-background relative">
      <div className="flex flex-col lg:flex-row items-center md:items-start gap-6 max-w-6xl w-full">
        
        {/* Carrossel de imagens */}
        <div className="relative w-full  lg:w-1/2 ">
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {horse.images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`${horse.title} - imagem ${index + 1}`}
                  width={500}
                  height={500}
                  className=" object-cover rounded-lg h-[400px] md:h-[700px] lg:w-[500px]  lg:h-[700px] shadow-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Detalhes do cavalo */}
        <div className="flex flex-col lg:justify-center text-justify w-full lg:w-1/2  text-charcoal">
          <h1 className="text-4xl font-bold mb-4">{horse.title}</h1>
          <p className="text-lg mb-4">{horse.description}</p>

          <div className="text-lg font-semibold">
            <p><strong>Peso:</strong> {horse.weight || "Not"}</p>
            <p><strong>Idade:</strong> {horse.age || "Não informada"}</p>
            <p><strong>Coloração:</strong> {horse.color || "Não informada"}</p>
            <p><strong>História:</strong> {horse.history || "Não disponível"}</p>
            <p><strong>Características especiais:</strong> {horse.special || "Nenhuma"}</p>
            <p><strong>Valor:</strong> {horse.prize || "Sob consulta"}</p>
          </div>

          {/* Botões */}
          <div className="flex gap-4 mt-6">
            <Link href={`/galeria?page=${page}`} replace>
              <button className="bg-charcoal text-white px-8 py-2 rounded-lg hover:bg-opacity-80 transition">
                Voltar
              </button>
            </Link>
            <button className="bg-tan text-white px-6 py-2 rounded-lg hover:bg-opacity-80 transition">
              Reservar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HorseDetail;
