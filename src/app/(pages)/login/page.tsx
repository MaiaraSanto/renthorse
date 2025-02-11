'use client'
import React from "react";
import LoginComponent from "@/app/components/login/login"
import Header from '@/app/components/header.tsx/header';
import Footer from '@/app/components/footer/footer'
import GreenBackgroundSVG from "../galeria/Background";

const Login: React.FC =  () => {
    return (
      <main>
        <GreenBackgroundSVG>
        <Header />
        </GreenBackgroundSVG>
        <LoginComponent />
        <GreenBackgroundSVG>
        <Footer />
        </GreenBackgroundSVG>
      </main>
    );
  };

  export default Login;