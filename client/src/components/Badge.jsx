import React from "react";
import { FiCheck } from "react-icons/fi";

export default function Badge({ children }) {
  return (
    <div className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow text-sm font-semibold">
      <FiCheck className="text-green-600 w-4 h-4 mr-2" aria-hidden="true" />
      {children}
    </div>
  );
}
