import React from "react";
import { FiX } from "react-icons/fi";

export default function Cart({ isOpen, onClose, cartItems, removeFromCart, total }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50">
      <div className="bg-white w-80 mt-20 p-5 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          aria-label="Close cart"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <FiX className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold mb-3">Your Cart</h2>

        {!cartItems || cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="max-h-64 overflow-y-auto space-y-3">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name || item.title}</p>
                    <p className="text-sm text-gray-500">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <hr className="my-3" />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
