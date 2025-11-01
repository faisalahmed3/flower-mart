import React from "react";

export default function Button({ children, variant = "solid", className = "", ...props }) {
  const base = "inline-flex items-center justify-center py-2 px-4 rounded-md font-medium focus:outline-none";
  const variants = {
    solid: "bg-brand text-white hover:bg-brand-deep",
    ghost: "bg-white border border-gray-200 text-gray-800",
    outline: "border border-brand text-brand bg-transparent"
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
