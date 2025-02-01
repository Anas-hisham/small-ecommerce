'use client'

import { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import CartContext from './_context/CartContext';

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart data from local storage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart }}>
      <html lang="en">
      <head>
          <title>Mastering Frontend</title>
          <meta 
            name="description" 
            content="Shop high-quality front-end development courses. Learn HTML, CSS, Bootstrap, Tailwind, JavaScript, ES6, React, Vite, and Next.js to become a skilled web developer." 
          />
          <meta name="keywords" content="HTML, CSS, Bootstrap, Tailwind, JavaScript, ES6, React, Vite, Next.js, Front-End Development, Web Development Courses" />
          <meta name="author" content="Anas Hisham" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={`${roboto.variable} font-sans antialiased`}>
          <Header>
            <h1>Learn Front-End Programming & Shop Coding Courses</h1>
            <h2>Master the skills you need to build modern web applications</h2>
          </Header>
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </CartContext.Provider>
  );
}
