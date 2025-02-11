'use client';
import React from "react";
import AboutComponent from '@/app/components/about/about';
import Header from '@/app/components/header.tsx/header';
import Footer from '@/app/components/footer/footer';
import GreenBackgroundSVG from '../galeria/Background';

const About: React.FC = () => {
  return (
    <main>
      <GreenBackgroundSVG>
        <Header />
        </GreenBackgroundSVG>
      <AboutComponent />
      <GreenBackgroundSVG>
        <Footer />
        </GreenBackgroundSVG>
    </main>
  );
};

export default About;
