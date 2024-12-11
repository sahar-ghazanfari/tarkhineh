"use client";
import estedadFont from "context/localFont";
import "style/globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import { CartProvider } from "context/cartContext";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBinLine, RiShoppingCartLine } from "react-icons/ri";
import { CiMoneyCheck1, CiSquareCheck } from "react-icons/ci";
import { AuthProvider } from "context/AuthContext";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const activePaths = ["/shoppingCart", "/complete-information", "/payment"];
  const isActive = (path) => pathname === path;

  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${estedadFont.variable} font-sans min-h-screen max-w-full overflow-x-hidden`}
      >
        <AuthProvider>
          <CartProvider>
            <Header />
            {activePaths.includes(pathname) && (
              <div className="flex justify-center">
                <div className="block lg:hidden w-full my-4">
                  <div className="flex justify-between mx-10">
                    <MdKeyboardArrowRight size={20} />
                    <h2>سبد خرید</h2>
                    <RiDeleteBinLine size={20} />
                  </div>
                </div>
                <div className="hidden lg:block w-full max-w-3xl">
                  <ol className="mb-8 flex items-center w-full font-medium lg:text-lg text-base justify-center text-center text-Gray-4">
                    <li
                      className={`flex md:w-full gap-x-2 items-center sm:after:content-[''] after:w-full after:h-1 after:border-dashed after:border-b after:border-Gray-4 after:border-1 after:inline-block after:mx-6 ${
                        isActive("/shoppingCart") ? "text-primary" : ""
                      }`}
                    >
                      <RiShoppingCartLine size={34} />
                      <span className="inline-flex text-nowrap">سبد خرید</span>
                    </li>
                    <li
                      className={`flex md:w-full gap-x-2 items-center sm:after:content-[''] after:w-full after:h-1 after:border-dashed after:border-b after:border-Gray-4 after:border-1 after:inline-block after:mx-6 ${
                        isActive("/complete-information") ? "text-primary" : ""
                      }`}
                    >
                      <CiSquareCheck size={34} />
                      <span className="inline-flex text-nowrap">
                        تکمیل اطلاعات
                      </span>
                    </li>
                    <li
                      className={`flex gap-x-2 items-center ${
                        isActive("/payment") ? "text-primary" : ""
                      }`}
                    >
                      <CiMoneyCheck1 size={34} />
                      <span className="text-nowrap"> پرداخت</span>
                    </li>
                  </ol>
                </div>
              </div>
            )}
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
