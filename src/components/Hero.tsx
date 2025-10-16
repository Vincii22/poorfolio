"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimatedBackground = dynamic(
  () => import("animated-backgrounds").then(mod => mod.AnimatedBackground),
  { ssr: false }
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Animated Background */}
      {mounted && (
        <AnimatedBackground
          animationName="particleNetwork"
          theme="portfolio"
          interactive={true}
          interactionConfig={{
            effect: "magnetic",
            strength: 0.7,
            radius: 150,
            continuous: true,
          }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: 0.9,
          }}
        />
      )}

      {/* Subtle gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]">
           ARVIN MILAN
        </h1>

        <h2 className="text-lg md:text-2xl text-gray-300 mt-4">
           Backend Developer | Aspiring Data Engineer 
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6">
          Building intelligent systems with data-driven insights.
        </p>

        <a
          href="#about"
          className="mt-8 inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition shadow-lg shadow-cyan-500/30"
        >
          Explore My Portfolio
        </a>
      </div>
    </section>
  );
}
