"use client";
import useMoveBack from "hooks/useMoveBack";
import Image from "next/image";
import { IoIosArrowForward} from "react-icons/io";

export default function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="flex justify-center">
      <div>
        <button
          onClick={moveBack}
          className="mb-12 cursor-pointer flex text-primary font-semibold"
        >
          <IoIosArrowForward size={30} />
          <p>برگشت</p>
        </button>
        <div className="flex items-center text-8xl lg:text-[10rem] text-primary">
          <h2>4</h2>
          <div className="relative w-40 h-40 lg:w-56 lg:h-52">
            <Image
              src="/images/not-found.png"
              alt="not found"
              fill
            />
          </div>
          <h2>4</h2>
        </div>
        <h2 className="text-2xl flex justify-center mt-10 text-primary font-semibold ">
          صفحه مورد نظر یافت نشد
        </h2>
      </div>
    </div>
  );
}
