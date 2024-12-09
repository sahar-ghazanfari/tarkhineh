"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "ui/Button";
import User from "app/user/page";
import toast from "react-hot-toast";

const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedPhoneNumber = localStorage.getItem("phoneNumber");
    if (savedPhoneNumber) {
      setPhoneNumber(savedPhoneNumber);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/user");
    }
  }, [isLoggedIn, router]);

  const handleLogin = () => {
    if (phoneNumber.trim() === "") {
      return;
    }
    if (phoneNumber.length < 11) {
      return null;
    }
    localStorage.setItem("phoneNumber", phoneNumber);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("phoneNumber");
    setPhoneNumber("");
    setIsLoggedIn(false);
    onClose();
  };

  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleLogout}>close</button>
      ) : (
        <div className="fixed backdrop-brightness-50  inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="p-6 bg-white rounded-lg max-w-md w-full relative">
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="absolute top-3 left-3 text-gray-600 hover:text-gray-800"
              >
                <IoMdClose />
              </button>
              <div className="relative w-full max-w-sm h-10">
                <Image
                  sizes="(max-width: 768px) 100vw"
                  src="/images/logo.svg"
                  fill
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex justify-center text-Gray-8 text-xl py-4">
              ثبت نام/ورود
            </div>
            <p className="mb-7 text-Gray-7 text-sm flex justify-center ">
              با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
            </p>
            <div className="mb-4 relative border-Gray-8 py-2 border rounded">
              <label
                htmlFor=""
                className="text-sm absolute text-Gray-8 -top-3 right-5 bg-white px-2"
              >
                شماره همراه
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="px-2  border-none w-full"
              />
            </div>
            <div className="mb-4 flex justify-center ">
              <Button
                variant={phoneNumber.length < 11 ? "disable" : "primary"}
                className="font-semibold w-full py-2 "
                onClick={handleLogin}
              >
                ادامه
              </Button>
            </div>
            <div className="flex justify-center">
              <p className="text-xs border-b w-fit">
                ورود و عضویت در ترخینه به منزله قبول &nbsp;
                <Link className="text-primary" href="#">
                  قوانین و مقررات
                </Link>
                &nbsp; است
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
