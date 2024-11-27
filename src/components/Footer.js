"use client";
import Link from "next/link";
import { PiTelegramLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { numberToFa } from "utils/numbrToPersian";
import { SlSocialTwitter } from "react-icons/sl";
import { useState } from "react";
import Button from "ui/Button";

function Footer() {
  const [textArea, setTextArea] = useState("");
  const [commentForm, setCommentForm] = useState({
    names: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleGetNumOfTexts = (e) => {
    setTextArea(e.target.value);
  };

  const handleTextArea = (e) => {
    handleGetNumOfTexts(e);
    handleChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(commentForm);
  };

  return (
    <div className="mt-12 image-footer text-white items-center grid grid-cols-4 lg:grid-cols-8">
      <div className="flex flex-col col-start-1 lg:col-start-2 gap-y-5 lg:gap-y-7">
        <h3 className="text-xl lg:text-2xl font-semibold">دسترسی‌آسان</h3>
        <Link href={"/"} className="text-sm lg:text-lg">
          پرسش‌های‌متداول
        </Link>
        <Link href={"/"} className="text-sm lg:text-lg">
          قوانین‌ترخینه
        </Link>
        <Link href={"/"} className="text-sm lg:text-lg">
          حریم‌خصوصی‌
        </Link>
        <div className="flex gap-x-4">
          <SlSocialTwitter size={25} />
          <FaInstagram size={25} />
          <PiTelegramLogo size={25} />
        </div>
      </div>
      <div className="flex flex-col col-start-3 gap-y-5 lg:gap-y-7">
        <h3 className="text-xl lg:text-2xl font-semibold">شعبه‌های‌ترخینه</h3>
        <span href={"/"} className="text-sm lg:text-lg">
          شعبه اکباتان
        </span>
        <span href={"/"} className="text-sm lg:text-lg">
          شعبه چالوس
        </span>
        <span href={"/"} className="text-sm lg:text-lg">
          شعبه اقدسیه
        </span>
        <span href={"/"} className="text-sm lg:text-lg">
          شعبه ونک
        </span>
      </div>
      <div className="hidden lg:block col-start-5 col-span-3">
        <form
          onSubmit={handleSubmit}
          className="gap-3 grid grid-cols-2 grid-rows-4 lg:py-4"
        >
          <h3 className="text-2xl font-semibold">شعبه‌های‌ترخینه</h3>
          <input
            type="text"
            name="names"
            value={commentForm.names}
            className="inputs col-start-1 placeholder:text-white"
            placeholder="نام و نام‌خانوادگی"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            value={commentForm.phone}
            className="inputs col-start-1 placeholder:text-right placeholder:text-white"
            placeholder="شماره تماس"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={commentForm.email}
            className="inputs col-start-1 placeholder:text-white"
            placeholder="آدرس ایمیل(اختیاری)"
            onChange={handleChange}
          />
          <textarea
            name="message"
            value={commentForm.message}
            onChange={handleTextArea}
            rows="7"
            cols="30"
            maxLength="200"
            placeholder="پیام شما"
            className="inputs col-start-2 row-start-2 row-end-5 placeholder:text-white placeholder:p-2 "
          ></textarea>
          <span className="col-start-2 flex justify-end">
            <span>{numberToFa(textArea.length)}</span>/۲۰۰
          </span>
          <div className="col-start-2 flex justify-end">
            <Button variant="footer" type="submit">
              ارسال‌‌‌پیام
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
