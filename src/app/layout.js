"use client";
import estedadFont from "context/localFont";
import "style/globals.css";
import Header from "components/Header";
import Footer from "components/Footer";

export default function RootLayout({ children, foodDetail }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${estedadFont.variable} font-sans min-h-screen max-w-full overflow-x-hidden`}
      >
        <Header />
        <div>{children}</div>
        <div>{foodDetail}</div>
        <Footer />
      </body>
    </html>
  );
}
