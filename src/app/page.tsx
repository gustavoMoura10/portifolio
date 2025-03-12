"use client";
import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fotoElement = document.querySelector('.foto-tleft') as HTMLElement;
    const cardElement = document.querySelector('.card-tright') as HTMLElement;

    if (fotoElement) {
      fotoElement.style.transform = 'translateX(0)';
    }

    if (cardElement) {
      cardElement.style.transform = 'translateX(0)';
    }
  }, []);

  return (
    <>
      <Banner/>
      <AboutMe />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}