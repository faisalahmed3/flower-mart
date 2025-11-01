import React, { useEffect, useState } from "react";
import Container from "./Ui/Container";

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

useEffect(() => {
  fetch("/data/hero.json")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status} while loading hero.json`);
      return res.json();
    })
    .then(setHeroData)
    .catch((err) => console.error("Error loading hero data:", err));
}, []);


  if (!heroData) {
    return (
      <section className="pt-24 lg:pt-32 pb-0 lg:pb-8 text-center">
        <p className="text-gray-500">Loading hero section...</p>
      </section>
    );
  }

  return (
    <section className="pt-24 lg:pt-32 pb-0 lg:pb-8">
      <Container
        className="
          flex flex-col-reverse lg:flex-row
          items-center lg:items-end
          justify-between 
          gap-10 lg:gap-16
        "
      >
        {/* Left side text (below image on mobile) */}
        <div className="lg:w-1/2 flex flex-col justify-end text-left lg:text-left">
          <h1 className="hero-title text-2xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="block">
              {heroData.titleLine1}{" "}
              <span className="text-brand">{heroData.highlight}</span>
            </span>
            <span className="block text-brand">{heroData.titleLine2}</span>
          </h1>
          <p className="mt-6 text-gray-600 max-w-md text-lg">
            {heroData.description}
          </p>
        </div>

        {/* Right side image (first on mobile) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroData.image}
            alt="Hero bouquet"
            className="object-contain w-full max-w-[560px]"
          />
        </div>
      </Container>
    </section>
  );
}
