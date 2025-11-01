import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import Cart from "./Cart";

export default function Navbar() {
  const [navbarData, setNavbarData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load navbar.json (logo, links, cart icon)
  useEffect(() => {
    fetch("/data/navbar.json")
      .then((res) => res.json())
      .then(setNavbarData)
      .catch((err) => console.error("Error loading navbar data:", err));
  }, []);

  // Fetch cart items from backend
  const fetchCart = useCallback(() => {
    fetch("https://flower-mart-backend.onrender.com/cart")
      .then((res) => res.json())
      .then((data) => setCartItems(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Error loading cart:", err));
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // 🔄 Keep navbar total in sync when any page updates the cart
  useEffect(() => {
    const onCartUpdated = () => fetchCart();
    window.addEventListener("cart:updated", onCartUpdated);
    return () => window.removeEventListener("cart:updated", onCartUpdated);
  }, [fetchCart]);

  // Remove item from cart
  const handleRemoveFromCart = (id) => {
    fetch(`https://flower-mart-backend.onrender.com/cart/${id}`, {
      method: "DELETE",
    })
      .then(() =>
        setCartItems((prev) => prev.filter((item) => item._id !== id))
      )
      .catch((err) => console.error("Error removing from cart:", err));
  };

  if (!navbarData) return null;

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (item.qty || 1),
    0
  );

  return (
    <>
      {/* ===== Navbar ===== */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="section-container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img
              src={navbarData.logo}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-8">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
              {navbarData.navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold"
                      : "text-[rgba(0,0,0,0.5)]"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-[15px] text-black hover:opacity-80 transition"
            >
              <img
                src={navbarData.cartIcon}
                alt="Cart"
                className="w-5 h-5 object-contain"
              />
              <span className="hidden sm:inline">
                Cart (${cartTotal.toFixed(2)})
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        <div
          className={`md:hidden bg-white border-t shadow-inner overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-48 py-3" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-3 text-[15px] font-medium">
            {navbarData.navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold"
                    : "text-[rgba(0,0,0,0.5)]"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== Cart Modal ===== */}
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          removeFromCart={handleRemoveFromCart}
          total={cartTotal}
          isOpen={isCartOpen}
        />
      )}
    
    </>
  );
}
