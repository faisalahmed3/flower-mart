import React from "react";

export default function Container({ children, className = "" }) {
  return <div className={`section-container ${className}`}>{children}</div>;
}
