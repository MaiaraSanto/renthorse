import Link from 'next/link'; 
import Image from 'next/image';
import React from 'react';

interface CardBannerProps {
  title: string;
  imageSrc: string;
  altText: string;
  description: string;
}

const CardBanner: React.FC<CardBannerProps> = ({ title, imageSrc, altText, description }) => {
  return (
    <div className="bg-background lg:h-[748px] md:h-[747px] h-[490px] md:max-w-[15rem] lg:max-w-[22rem] max-w-[38rem] px-6 pb-12 flex flex-col md:flex-row rounded-md md:flex group transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg mx-auto md:mx-0  jiophone:w-full jiophone:h-[528px]">
      <div className="flex flex-col  w-full">
        <h1 className="my-5 font-bold text-4xl space-x-3">{title}</h1>
        <div className="w-full flex justify-center mb-6">
          <Image 
            src={imageSrc} 
            alt={altText} 
            width={330} 
            height={40} 
            className="group object-cover transition-transform transform-gpu duration-300 ease-in-out hover:scale-105 w-[90%] sm:w-[100%] lg:w-full md:w-full lg:h-[470px] md:h-[450px] h-[235px]  rounded-md" 
          />
        </div>
        <h2 className="mb-2 font-bold text-lg">{title}</h2>
        <p className="mb-3 font-normal text-sm">{description}</p>

        <Link href={`/horse/${title}`} passHref>
          <button className="bg-Secondary cursor-pointer text-background h-10 w-28 flex-shrink-0 rounded-md hover:bg-Primary">
            Saiba Mais
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardBanner;
