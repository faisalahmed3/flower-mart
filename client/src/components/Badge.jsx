import React from "react";

export default function Badge({ children }) {
  return (
    <div className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow text-sm font-semibold">
      <span className="text-xs text-green-600 mr-2">✔</span>
      {children}
    </div>
  );
}
