"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { CiWallet, CiLocationOn, CiEdit } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";
import Button from "ui/Button";
import { useAuth } from "context/AuthContext";

function User() {
  const { phoneNumber, isLoggedIn, handleLogout } = useAuth();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    displayName: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isMobileEditing, setIsMobileEditing] = useState(false);

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
    console.log(userData);
    setIsEditing(false);
    setIsMobileEditing(false);
  };

  // const handleMobileEdit = () => {
  //   setIsMobileEditing(true);
  // };

  if (isMobileEditing) {
    return (
      <>
        {!isMobileEditing ? (
          <div className="grid grid-cols-2 grid-rows-3 gap-3 justify-center items-center">
            <p>نام: {userData.firstName || "---"}</p>
            <p>نام خانوادگی: {userData.lastName || "---"}</p>
            <p>ایمیل: {userData.email || "---"}</p>
            <p>شماره موبایل: {userData.phoneNumber || "---"}</p>
            <p>تاریخ تولد: {userData.birthDate || "---"}</p>
            <p>نام نمایشی: {"@" + userData.displayName || "---"}</p>
            <Button
              variant="secondary"
              className="flex items-center justify-center w-2/3 py-2 mt-4"
              onClick={() => setIsEditing(true)}
            >
              <CiEdit /> ویرایش اطلاعات شخصی
            </Button>
          </div>
        ) : (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">ویرایش اطلاعات عمومی</h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <input
                type="text"
                className="user-input w-full md:w-2/3"
                placeholder="نام"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                className="user-input w-full md:w-2/3"
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
                className="user-input  w-full md:w-2/3"
                placeholder="ادرس ایمیل"
              />
              <input
                type="phone"
                className="user-input w-full md:w-2/3"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
                placeholder="شماره موبایل"
              />
              <input
                type="date"
                className="user-input w-full md:w-2/3"
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
                className="user-input w-full md:w-2/3"
                placeholder="نام نمایشی"
              />
              <Button
                variant="secondary"
                className="w-full py-2 mt-4"
                type="submit"
                onClick={handleSubmit}
              >
                ذخیره اطلاعات
              </Button>
            </form>
            <Button
              variant="secondary"
              className="w-full py-2 mt-4"
              onClick={() => setIsMobileEditing(false)}
            >
              بازگشت
            </Button>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="md:flex md:gap-9 md:mx-16">
      <div className="h-screen md:h-auto md:border md:w-fit md:p-10 md:rounded-xl">
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
                ? `${userData.firstName} ${userData.lastName}`
                : "کاربرترخینه"}
            </span>
            <span>{phoneNumber}</span>
          </div>
        </div>
        <hr className="my-7 md:my-2" />
        <div className="flex flex-col gap-6 md:gap-2">
          <button className="flex items-center gap-2">
            <FaUser /> پروفایل
          </button>
          <div className="block md:hidden">
            <button
              className="flex items-center gap-2"
              onClick={() => setIsMobileEditing(true)}
            >
              <CiEdit />
              ویرایش اطلاعات عمومی
            </button>
          </div>
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
      <div className="hidden md:block border rounded-xl w-full">
        <h2 className="my-2 text-xl font-bold mr-3">پروفایل من</h2>
        <hr className="my-3" />
        {!isEditing ? (
          <div className="grid grid-cols-2 grid-rows-3 gap-3 justify-center items-center">
            <p>نام: {userData.firstName || "---"}</p>
            <p>نام خانوادگی: {userData.lastName || "---"}</p>
            <p>ایمیل: {userData.email || "---"}</p>
            <p>شماره موبایل: {userData.phoneNumber || "---"}</p>
            <p>تاریخ تولد: {userData.birthDate || "---"}</p>
            <p>نام نمایشی: {"@" + userData.displayName || "---"}</p>
            <Button
              variant="secondary"
              className="flex items-center justify-center w-2/3 py-2 mt-4"
              onClick={() => setIsEditing(true)}
            >
              <CiEdit /> ویرایش اطلاعات شخصی
            </Button>
          </div>
        ) : (
          <form
            className="grid grid-cols-2 grid-rows-3 gap-3 justify-center items-center"
            onSubmit={handleSubmit}
          >
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
              className=" w-2/3 py-2 pr-5 justify-self-center"
              type="submit"
              onClick={handleSubmit}
            >
              ذخیره اطلاعات
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

export default User;
