"use client";

import { useCallback, useState } from "react";
import { Adaptability } from "@/components/Adaptability";
import { Automatizacion } from "@/components/Automatizacion";
import { Connect } from "@/components/Connect";
import { CtaFinal } from "@/components/CtaFinal";
import { Experience } from "@/components/Experience";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Implementacion } from "@/components/Implementacion";
import { MidCta } from "@/components/MidCta";
import { Navbar } from "@/components/Navbar";
import { OperacionReal } from "@/components/OperacionReal";
import { Pricing } from "@/components/Pricing";
import { Problem } from "@/components/Problem";
import { SocialProof } from "@/components/SocialProof";
import { VideoModal } from "@/components/VideoModal";

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const openVideo = useCallback(() => setVideoOpen(true), []);
  const closeVideo = useCallback(() => setVideoOpen(false), []);

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-brand focus:shadow-lg"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero onVideo={openVideo} />
        <Problem />
        <Connect />
        <Experience />
        <Adaptability />
        <Automatizacion />
        <MidCta />
        <OperacionReal />
        <Implementacion />
        <div className="flex flex-col">
          <Pricing className="order-2 lg:order-1" />
          <SocialProof className="order-1 lg:order-2" />
        </div>
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <VideoModal open={videoOpen} onClose={closeVideo} />
    </>
  );
}
