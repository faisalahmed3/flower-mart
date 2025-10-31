const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// SCHEMAS & MODELS

// Item Schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageURL: { type: String },
});
const Item = mongoose.model("Item", itemSchema);

// Cart Schema
const cartSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageURL: { type: String },
});
const Cart = mongoose.model("Cart", cartSchema, "cart");

// API ROUTES

// Root route for testing
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

// Get all items
app.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Add item to cart by ID
app.post("/cart/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: "Item not found" });

    const exists = await Cart.findOne({ itemId: item._id });
    if (exists) return res.status(400).json({ msg: "Item already in cart" });

    const cartItem = new Cart({
      itemId: item._id,
      name: item.name,
      price: item.price,
      imageURL: item.imageURL,
    });
    await cartItem.save();

    res.json({ msg: "Item added to cart", cartItem });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Get all cart items
app.get("/cart", async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Delete an item from cart by ID
app.delete("/cart/:id", async (req, res) => {
  try {
    const deleted = await Cart.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Item not in cart" });

    res.json({ msg: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// DATABASE CONNECTION

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection failed:", err.message));
