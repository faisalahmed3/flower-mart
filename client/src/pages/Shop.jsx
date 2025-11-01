// src/pages/Shop.jsx
import React from "react";
import ProductGrid from "../components/ProductGrid";

export default function Shop() {
  return (
    // Push content below the fixed navbar (adjust if your navbar is taller)
    <main className="pt-28 lg:pt-32 bg-[#F9FAFB]">
      {/* Keep your layout spacing consistent with Home */}
      <section className="lg:px-32">
        <ProductGrid />
      </section>
    </main>
  );
}
