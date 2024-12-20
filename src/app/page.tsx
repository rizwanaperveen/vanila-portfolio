'use client';
import React from "react";
import Hero from "@/components/Hero";
import Project from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
      anchorPlacement: 'bottom-bottom',
      mirror: true,
      offset: 160,
    });
    AOS.refresh();
  }, []);
  
  return (
    <main>
      <Navbar />
    <Hero />
    <About />
  <Project />
   <Skills />
    <Contact />
    <Footer />
  
    </main>
  );
}
