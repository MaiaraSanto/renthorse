"use client";
import FaqComponent from "@/app/components/faq/index"
import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header.tsx/header';
import React from "react";
import GreenBackgroundSVG from "../galeria/Background";

function Faq() {
  return (
      <div className="w-full">
        <GreenBackgroundSVG>
        <Header />
        <FaqComponent />
        <Footer />
        </GreenBackgroundSVG>
      </div>
    
  );
}

export default Faq;
