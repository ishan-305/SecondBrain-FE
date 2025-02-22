"use client";
import React from "react";
import { Navbar } from "../components/Header/NavBar";
import { Hero } from "../components/Hero";
import { ClientsSection } from "../components/ClientsSection";

import { CallToAction } from "../components/CalltoAction";
import { Footer } from "../components/Footer/Footer";

export default function LandingPage() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <Navbar />
      <div className="flex z-10 gap-2 items-start self-center mt-[573px] max-md:mt-10">
        <div className="flex shrink-0 w-2.5 h-2.5 bg-green-500 rounded-full" />
        <div className="flex shrink-0 w-2.5 h-2.5 rounded-full bg-green-500 bg-opacity-30" />
        <div className="flex shrink-0 w-2.5 h-2.5 rounded-full bg-green-500 bg-opacity-30" />
      </div>
      <Hero />
      <ClientsSection />

      <CallToAction />
      <Footer />
    </main>
  );
}
