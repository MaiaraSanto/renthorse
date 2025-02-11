import React from 'react'
import Image from 'next/image';


interface CardGridBannerProps {
  title: string;
  imageSrc: any;
  className?:string;
  description?: string; 
}

const CardGridBanner: React.FC<CardGridBannerProps> = ({ title, imageSrc, description}) => {
  return (
    <div className="flex flex-row h-[350px]  justify-center sm:rounded-bl-5 group cursor-pointer">
    <div className="flex relative group transition duration-300 ease-in-out  w-[980px] lg:w-[195px] md:w-[350px]  group-hover:scale-105 justify-center jiophone:w-3/4 surfaceduo:w-5/4">
      <Image
        src={imageSrc}
        alt="lupa"
        width={150}
        height={330}
        className='rounded-l-lg object-cover w-3/4  md:w-13 lg:w-100 sm:w-25 md:w-4/6 lg:w-42 xl:w-32  '
        
      />
      <div className="bg-background w-10 flex items-center justify-center rounded-r-md group transition duration-300 group-hover:bg-Primary jiophone:w-2/3  ">
        <span className="text-Secondary font-bold -rotate-90 whitespace-nowrap text-xs uppercase tracking-widest mt-40 z-0">{title}</span>
      </div>
    </div>
    
  </div>
  
  
  
  )
}

export default CardGridBanner