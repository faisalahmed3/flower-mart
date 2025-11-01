import React from "react";
import Container from "../components/Ui/Container";

export default function About() {
  return (
    <main className="pt-28 lg:pt-32 bg-[#F9FAFB]">
      {/* ===== Hero Section ===== */}
      <section className="text-center py-16 bg-white shadow-sm">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-[#111827]">
            About <span className="text-brand">Fauget</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
            Your trusted online flower mart delivering freshness, love, and
            fragrance straight from our gardens to your doorstep.
          </p>
        </Container>
      </section>

      {/* ===== Our Story ===== */}
      <section className="py-16">
        <Container className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img
              src="/assets/hero-image.png"
              alt="Flower shop"
              className="rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-[#111827]">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a passion for bringing nature’s beauty closer to
              people, <strong>Fauget</strong> began as a small local flower
              store. Today, we’re proud to serve customers nationwide with
              hand-picked flowers, elegant arrangements, and heartfelt service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every bouquet we create carries a story — a story of joy, care,
              and connection. Whether it's a celebration or a token of love, our
              flowers make moments memorable.
            </p>
          </div>
        </Container>
      </section>

     
     
    </main>
  );
}
