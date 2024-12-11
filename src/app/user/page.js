"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { CiWallet, CiLocationOn, CiEdit } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";
import Button from "ui/Button";
import { useAuth } from "context/AuthContext";

function user() {
  const { phoneNumber, isLoggedIn, handleLogout } = useAuth();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    nickName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/";
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", userData);
  };

  return (
    <div className="flex gap-9 mx-16">
      <div className="border w-fit p-10 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden w-fit">
            <Image
              src={"/images/user-default.jpg"}
              alt="user image"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col">
            <span>
              {userData.firstName && userData.lastName
                ? userData.firstName + "" + userData.lastName
                : "کاربرترخینه"}
            </span>
            <span>{phoneNumber}</span>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-2">
            <FaUser /> پروفایل
          </button>
          <button className="flex items-center gap-2">
            <CiWallet />
            پیگیری‌سفارشات
          </button>
          <button className="flex items-center gap-2">
            <GoHeart />
            علاقه‌مندی‌ها
          </button>
          <button className="flex items-center gap-2">
            <CiLocationOn />
            ادرس‌های‌من
          </button>
          <button
            className="flex items-center gap-2 text-red-600"
            onClick={handleLogout}
          >
            <IoExitOutline />
            خروج
          </button>
        </div>
      </div>
      <div className="border rounded-xl w-full">
        <h2 className="my-2 text-xl font-bold mr-3">پروفایل من</h2>
        <hr className="my-3" />
        <form className="grid grid-cols-2 grid-rows-3 gap-3 justify-center items-center">
          <input
            type="text"
            className="user-input"
            placeholder="نام"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            className="user-input"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            placeholder="نام خانوادگی"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="user-input"
            placeholder="ادرس ایمیل"
          />
          <input
            type="phone"
            className="user-input"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
            placeholder="شماره موبایل"
          />
          <input
            type="date"
            className="user-input"
            name="birthDate"
            value={userData.birthDate}
            onChange={handleChange}
            placeholder="تاریخ تولد"
          />
          <input
            type="text"
            name="displayName"
            value={userData.displayName}
            onChange={handleChange}
            className="user-input"
            placeholder="نام نمایشی"
          />
          <Button
            variant="secondary"
            className="flex items-center w-2/3 py-2 pr-5 justify-self-center "
            onClick={handleSubmit}
          >
            <CiEdit /> ویرایش‌ اطلاعات‌ شخصی
          </Button>
        </form>
      </div>
    </div>
  );
}

export default user;
