"use client";
import Footer from '@/app/components/footer/footer';
import Carrousel from '@/app/components/carrossel/carrousel';
import Header from '@/app/components/header.tsx/header';
import Sobre from '@/app/components/sobre/sobre';
import GreenBackgroundSVG from "../galeria/Background";

const HomePage = () => {
  return (
    <main className="">
      <GreenBackgroundSVG>
        <Header />
        <Carrousel />
      </GreenBackgroundSVG>
      <Sobre />
      <GreenBackgroundSVG>
        <Footer />
      </GreenBackgroundSVG>
    </main>
  );
};

export default HomePage;
