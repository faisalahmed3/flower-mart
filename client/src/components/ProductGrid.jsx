import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://flower-mart-backend.onrender.com/items")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => (Array.isArray(data) ? setProducts(data) : setProducts([])))
      .catch((err) => {
        console.error("Error loading products:", err);
        setError(err.message);
      });
  }, []);

  if (error)
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load products: {error}
      </div>
    );

  return (
    <section className="py-12">
      <div className="section-container">
        <h2 className="text-3xl text-center font-semibold">
          <span className="text-brand font-display text-2xl lg:text-5xl leading-tight font-bold">
            Our
          </span>{" "}
          <span className="font-display text-2xl lg:text-5xl leading-tight font-bold">
            Plants
          </span>
        </h2>
        <p className="text-center text-gray-500 mt-2 max-w-2xl mx-auto">
          Indulge your senses with the beauty and fragrance of our fresh flower
          shop. From classic roses to exotic blooms, we offer a wide variety of
          fresh.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
