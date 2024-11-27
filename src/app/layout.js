"use client";
import estedadFont from "context/localFont";
import "style/globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import { CartProvider } from "context/cartContext";
// import { CartProvider } from "context/cartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${estedadFont.variable} font-sans min-h-screen max-w-full overflow-x-hidden`}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
