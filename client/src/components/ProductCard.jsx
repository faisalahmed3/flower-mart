import React, { useState } from "react";
import Button from "./Ui/Button";

const getImageUrl = (item) => {
  // prefer imageURL from your API, but be flexible
  let url =
    item?.imageURL ||
    item?.imageUrl ||
    item?.image ||
    item?.photo ||
    item?.image_link ||
    "";

  // auto-fix the bad host from your dataset
  if (url.includes("i.ibb.co.com")) {
    url = url.replace("i.ibb.co.com", "i.ibb.co");
  }

  return url || null;
};

export default function ProductCard({ item }) {
  const [adding, setAdding] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  if (!item)
    return <div className="bg-gray-100 rounded-lg p-4 h-64 animate-pulse" />;

  const displayName = item.name || item.title || "Untitled";
  const priceNum = Number(item.price) || 0;
  const addId = item?._id || item?.id;

  const fallback = `https://source.unsplash.com/600x600/?flowers,${encodeURIComponent(
    displayName
  )}`;

  const imgSrc = imgErr ? fallback : getImageUrl(item) || fallback;

  const handleAddToCart = async () => {
    if (!addId) {
      console.error("No valid item ID found on product:", item);
      return;
    }
    try {
      setAdding(true);
      const res = await fetch(
        `https://flower-mart-backend.onrender.com/cart/${encodeURIComponent(
          addId
        )}`,
        { method: "POST" }
      );
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Add to cart failed:", res.status, text);
        throw new Error(`Failed to add to cart (HTTP ${res.status})`);
      }
      window.dispatchEvent(new Event("cart:updated"));
    } catch (err) {
      console.error("Error adding to cart:", err);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className=" overflow-hidden shadow-sm flex flex-col items-center p-4">
      <img
        src={imgSrc}
        alt={displayName}
        className="w-full h-60 object-cover"
        onError={() => setImgErr(true)}
        loading="lazy"
      />

      <div className="mt-4 text-center">
        <h3 className="font-semibold text-gray-900">{displayName}</h3>
        <p className="text-sm text-gray-600 mt-1">${priceNum}</p>
        <p className="text-xs text-gray-400 mt-1">{item.description}</p>

        <Button
          onClick={handleAddToCart}
          disabled={adding}
          className="mt-4 w-full bg-brand hover:bg-pink transition-transform transform hover:scale-105 rounded-none disabled:opacity-60"
        >
          {adding ? "ADDING..." : "ADD TO CART"}
        </Button>
      </div>
    </div>
  );
}
