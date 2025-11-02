import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const footerImage = "/assets/footer-image.png";
  const logo = "/assets/logo.png";

  const title = "Join the colorful Bunch";
  const inputPlaceholder = "Write email";
  const buttonText = "Subscribe";
  const description =
    "Indulge your senses with the beauty and fragrance of our fresh flower shop.";

  const column1 = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Shop", link: "/shop" },
  ];

  const column2 = [
    { name: "Pricing", link: "/pricing" },
    { name: "Terms of Service", link: "/terms" },
    { name: "Help Center", link: "/help" },
  ];

  const socials = [
    { name: "Facebook", icon: <FaFacebookF />, link: "#" },
    { name: "X", icon: <FaXTwitter />, link: "#" },
    { name: "Instagram", icon: <FaInstagram />, link: "#" },
    { name: "YouTube", icon: <FaYoutube />, link: "#" },
  ];

  return (
    <footer className="bg-white text-gray-700 lg:mt-12">
      {/* Top Section */}
      <section
        className="relative bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <h2
            className="text-white font-display font-bold text-2xl md:text-5xl mb-6 text-center"
            style={{ width: "100%", maxWidth: "586px" }}
          >
            {title}
          </h2>

          <form className="flex w-full max-w-[768px] bg-white overflow-hidden">
            <input
              type="email"
              placeholder={inputPlaceholder}
              className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="bg-brand hover:bg-brand-deep text-white text-sm px-6 py-3 transition-colors whitespace-nowrap"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <div className="flex flex-col items-start text-gray-500">
            <img src={logo} alt="Logo" className="w-32 mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">{description}</p>
          </div>

          <div>
            <ul className="text-sm space-y-3 text-gray-500">
              {column1.map((item, i) => (
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
              {column2.map((item, i) => (
                <li key={i}>
                  <Link to={item.link} className="hover:text-brand transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:justify-end gap-4 mt-6 md:mt-0">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand hover:border-brand transition"
                aria-label={s.name}
                title={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
