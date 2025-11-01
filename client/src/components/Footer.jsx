import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [footerData, setFooterData] = useState(null);
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    fetch("/data/footer.json")
      .then((res) => res.json())
      .then((data) => setFooterData(data))
      .catch((err) => console.error("Error loading footer.json:", err));
  }, []);

  useEffect(() => {
    fetch("/data/social.json")
      .then((res) => res.json())
      .then((data) => setSocialLinks(data.socials || []))
      .catch((err) => console.error("Error loading social.json:", err));
  }, []);

  if (!footerData) return null;

  return (
    <footer className="bg-white text-gray-700 lg:mt-12">
      {/* Top Section */}
      <section
        className="relative bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: `url(${footerData.footerImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <h2
            className="text-white font-display font-bold text-2xl md:text-5xl mb-6 text-center"
            style={{ width: "100%", maxWidth: "586px" }}
          >
            {footerData.title}
          </h2>

          <form className="flex w-full max-w-[768px] bg-white overflow-hidden">
            <input
              type="email"
              placeholder={footerData.inputPlaceholder}
              className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="bg-brand hover:bg-brand-deep text-white text-sm px-6 py-3 transition-colors whitespace-nowrap"
            >
              {footerData.buttonText}
            </button>
          </form>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <div className="flex flex-col items-start text-gray-500">
            <img src={footerData.logo} alt="Logo" className="w-32 mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">
              {footerData.description}
            </p>
          </div>

          <div>
            <ul className="text-sm space-y-3 text-gray-500">
              {footerData.column1.map((item, i) => (
                <li key={i}>
                  <Link to={item.link} className="hover:text-brand transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-gray-500">
            <ul className="text-sm space-y-3">
              {footerData.column2.map((item, i) => (
                <li key={i}>
                  <Link to={item.link} className="hover:text-brand transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:justify-end gap-4 mt-6 md:mt-0">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.name} className="w-10 h-10" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
