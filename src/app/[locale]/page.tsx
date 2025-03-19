"use client";
import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { useEffect } from "react";

export default function Home() {
 

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