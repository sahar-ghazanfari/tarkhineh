"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

function Slider({ images, buttonShowing }) {
  let [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage(activeImage + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeImage]);

  const nextImage = () => {
    setActiveImage(activeImage + 1);
  };

  const lastImage = () => {
    setActiveImage(activeImage - 1);
  };

  if (activeImage > 5) {
    activeImage = 0;
  }
  if (activeImage < 0) {
    activeImage = 5;
  }

  return (
    <div>
      <div className="relative">
        <div className="relative">
          <div className="relative aspect-video w-full h-[16rem] lg:h-[21.313rem]">
            <Image
              sizes="(max-width: 768px) 100vw"
              priority
              className="brightness-50 object-center object-cover"
              src={images[activeImage].img}
              alt={images[activeImage].description}
              fill
            />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ">
            <div className="text-Tint-1 w-screen flex justify-center lg:justify-between">
              <button className="mr-5 hidden lg:block" onClick={nextImage}>
                <IoIosArrowForward size={30} />
              </button>
              <h2
                className={`font-bold text-md sm:text-3xl ${
                  buttonShowing ? "" : "mb-10"
                }`}
              >
                {images[activeImage].description}
              </h2>
              <button className="ml-5 hidden lg:block" onClick={lastImage}>
                <IoIosArrowBack size={30} />
              </button>
            </div>
            <div className="flex flex-col items-center mt-10 lg:mt-14">
              {buttonShowing && (
                <Link
                  href={"/menu"}
                  className="rounded text-white bg-primary lg:font-semibold mb-5 px-4 lg:px-8 py-1 lg:py-2 flex justify-center text-sm"
                >
                  سفارش‌آنلاین‌غذا
                </Link>
              )}
              <div className="flex items-end">
                <div className="before-after-dots-slide shadow-[-1rem_1.3rem_0_0_white]"></div>
                <div className="w-24 bg-white bottom-0 h-6 lg:h-8 rounded-t-xl flex justify-center items-center gap-x-1">
                  {images.map((image, index) => (
                    <div
                      key={image.id}
                      className={`w-2 h-2 rounded-full bg-Gray-5 ${
                        index === activeImage
                          ? "bg-primary w-3 h-3"
                          : "bg-Gray-5"
                      }`}
                      style={{ order: images.length - index }}
                    />
                  ))}
                </div>
                <div className="before-after-dots-slide shadow-[1rem_1.3rem_0_0_white]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
