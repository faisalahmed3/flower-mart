🌸 Flower Mart Backend

Backend server for Flower Mart, built with Node.js, Express, and MongoDB.

🚀 Live Server

Base URL:
👉 https://flower-mart-backend.onrender.com

⚙️ API Endpoints
🌿 Items
Method Endpoint Description
GET /items Fetch all available items
🛒 Cart
Method Endpoint Description
GET /cart Get all items in the cart
POST /cart/:id Add an item to the cart by item ID
DELETE /cart/:id Remove an item from the cart by cart ID
💻 Run Locally
git clone -b Sayeed https://github.com/faisalahmed3/flower-mart.git

cd flower-mart/server
npm install

Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the server:

npm start

Runs on 👉 http://localhost:5000

🔗 Notes

Hosted on Render

Database: MongoDB Atlas

Env variables managed in Render settings
