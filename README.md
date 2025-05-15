# 🛒 Tech eCommerce App

A beginner-friendly tech eCommerce web app built with **React**. This project includes user login, protected routes, product browsing by category, a shopping cart, and a checkout process — all designed for learning and practicing real-world web development concepts.

---

## 🚀 Features

- 🔐 User Authentication (Login, Create Profile)
- 🔒 Protected Routes for Cart, Checkout, Products
- 🖥️ Home Page 
- 🛍️ Product Listing by Category
- 🛒 Add to Cart & View Cart
- 💳 Checkout Page (UI only)
- 🌐 Routing using React Router DOM

---

## 📁 Project Structure (Simplified)

src/
├── components/ # Reusable component(eg., NavBar)
├── context/ # AuthContext for login state
├── pages/ # Home, Login, Profile, Products, Cart, Checkout
├── routes/ # AppRoutes and ProtectedRoute
├── App.jsx # Root component
└── main.jsx # Entry poin


---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Kairo248/TekSmith.git
cd my-ecommerce-app

```install dependencies
npm install

``` Run the development server
npm run dev
Open your browser at http://localhost:5173

🛠️ Tech Stack
React

React Router DOM

Context API (Auth)

Vite (or CRA/Next.js depending on setup)

LocalStorage (for storing user credentials)

✅ Still in Progress
This is a beginner project and is still in development. More improvements coming soon, including:

Product details

Better styling (maybe Tailwind/CSS modules)

Persistent cart and authentication

Real backend integration