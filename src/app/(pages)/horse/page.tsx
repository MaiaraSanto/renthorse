"use client";
import HorseDetail from '@/app/components/horse/page'
import Header from '@/app/components/header.tsx/header';
import React from "react";
import Footer from '@/app/components/footer/footer'
import GreenBackgroundSVG from "../galeria/Background";

const Horse: React.FC =  () => {
    return (
      <main>   
        <GreenBackgroundSVG>    
        <Header />
        </GreenBackgroundSVG>
        <HorseDetail /> 
        <GreenBackgroundSVG>
        <Footer />
        </GreenBackgroundSVG>
        </main>
    );
  };

  export default Horse;