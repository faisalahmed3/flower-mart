import React from "react";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Container from "../components/Ui/Container";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="lg:px-32">
        <Hero />
      </section>

      {/* Our Plants */}
      <section className="py-16 lg:px-32">
        <ProductGrid />
      </section>

      {/* Flower & Plants Lover */}
      <section className="py-16 lg:px-32 relative">
        <Container className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
          <div className="lg:w-1/2">
            <img
              src="/assets/hero-image.png"
              alt="Workshop"
              className="object-cover w-full"
            />
          </div>

          <div className="lg:w-1/2 pl-6">
            <h3 className="font-display text-2xl lg:text-5xl leading-tight font-bold text-[#111827] mb-8">
              Flower & Plants Lover
            </h3>
            <div className="font-body text-[18px] text-gray-600 leading-relaxed space-y-5">
              <p>
                Indulge your senses with the beauty and fragrance of our fresh flower shop.
                From classic roses to exotic blooms, we offer a wide variety of fresh.
              </p>
              <p>
                Indulge your senses with the beauty and fragrance of our fresh flower shop.
                From classic roses to exotic blooms, we offer a wide variety of fresh.
              </p>
              <p>
                Indulge your senses with the beauty and fragrance of our fresh flower shop.
                From classic roses to exotic blooms, we offer a wide variety of fresh.
              </p>
            </div>
          </div>
        </Container>

        {/* Trusted badge */}
        <img
          src="/assets/trusted-badge.png"
          alt="Trusted Seller"
          className="hidden lg:block absolute left-1/2 -translate-x-3/4 -top-10 w-60 z-20 drop-shadow-lg"
        />
      </section>

      {/* Latest Deals */}
      <section className="lg:px-32 lg:pt-24 pb-16 bg-[#F9FAFB]">
        <Container>
          <div className="text-center mb-6">
            <h3 className="text-4xl font-bold">
              <span className="text-brand text-2xl lg:text-5xl font-display leading-tight font-bold">
                Latest
              </span>{" "}
              <span className="text-[#111827] font-display text-2xl lg:text-5xl leading-tight font-bold">
                Deals
              </span>
            </h3>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm md:text-base">
              Indulge your senses with the beauty and fragrance of our fresh flower shop. From
              classic roses to exotic blooms, we offer a wide variety of fresh.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Left column (2 cards) */}
            <div className="flex flex-col gap-6">
              {[
                { id: 1, image: "/assets/grid-1.png", title: "60% Off | Bloom Plant" },
                { id: 2, image: "/assets/grid-2.png", title: "30% Off | Ana Plant" },
              ].map((item) => (
                <div
                  key={item.id}
                  className={`relative group overflow-hidden rounded-xl ${
                    item.id === 2 ? "h-44 md:h-48" : ""
                  }`}
                >
                  <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-center">
                    <h4 className="text-white font-display leading-tight text-lg font-semibold mb-2">
                      {item.title}
                    </h4>
                    <button
                      onClick={() => (window.location.href = "/shop")}
                      className="text-white text-sm border-b border-white w-fit hover:text-[#F97316] hover:border-[#F97316] transition-colors"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column (wide) */}
            <div className="relative group overflow-hidden rounded-xl md:col-span-2">
              <img src="/assets/grid-3.png" alt="25% Off | Zabo Plant" className="object-cover" />
              <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-center">
                <h4 className="text-white font-display leading-tight text-2xl md:text-3xl font-semibold mb-3">
                  25% Off | Zabo Plant
                </h4>
                <button
                  onClick={() => (window.location.href = "/shop")}
                  className="text-white text-xl border-b border-white w-fit hover:text-[#F97316] hover:border-[#F97316] transition-colors"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
