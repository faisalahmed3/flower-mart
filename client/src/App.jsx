import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./router";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Router />
      </main>
      <Footer />
    </div>
  );
}
