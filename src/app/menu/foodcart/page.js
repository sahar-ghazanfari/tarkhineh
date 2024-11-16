"use client";
import Image from "next/image";
import { numberToFa } from "utils/numbrToPersian";
import { RiShoppingCartLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "ui/Button";
import LikeButton from "ui/LikeButton";
import Rating from "ui/Rating";

function FoodCart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/foods")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let lastCategory = "";

  return (
    <div>
      <div className="flex justify-end">
        <Button
          variant="secondary"
          className="flex items-center lg:px-10 py-2 px-5"
        >
          <RiShoppingCartLine />
          نکمیل خرید
        </Button>
      </div>
      <div className="grid items-end grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((item) => {
          const showCategory = item.category !== lastCategory;

          if (showCategory) {
            lastCategory = item.category;
          }

          return (
            <div key={item.id}>
              {showCategory && (
                <h2 className="font-bold lg:text-2xl mb-8 text-xl">
                  {item.category === "iraniFoods"
                    ? "غذاهای ایرانی"
                    : item.category === "InternationalCuisine"
                    ? "غذاهای بین المللی"
                    : item.category === "pizza"
                    ? "پیتزاها"
                    : "ساندویچ ها"}
                </h2>
              )}
              <div className="border gap-y-3 grid grid-cols-3 grid-rows-3 rounded-lg overflow-hidden cursor-pointer">
                <div className="relative w-full h-full overflow-hidden row-span-3">
                  <Image
                    src={item.image}
                    alt="foods"
                    sizes="(max-width: 768px) 100vw"
                    fill
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <Link href={`menu/${item.slug}`}>
                  <span className="m-2 text-nowrap">{item.name}</span>
                </Link>
                <div className="m-2 justify-self-end col-start-3 row-start-1">
                  <LikeButton />
                </div>
                <span className="mx-2 row-start-2 col-start-2 overflow-hidden overflow-ellipsis text-nowrap lg:line-clamp-2 lg:text-wrap">
                  {item.descrption}
                </span>
                <span className="my-2 row-start-1 col-start-3 line-through decoration-Gray-5 text-Gray-5 lg:row-start-2 justify-self-start h-fit">
                  {item.discount !== 0
                    ? numberToFa(item.price.toLocaleString("en-US"))
                    : ""}
                </span>
                <span
                  className={`mx-2 col-start-3 row-start-2 justify-self-end lg:row-start-2 w-fit h-fit ${
                    item.discount === 0
                      ? ""
                      : "text-error bg-error_extra_light px-1 rounded-xl"
                  }`}
                >
                  {item.discount ? numberToFa(item.discount) + "%" : ""}
                </span>
                <span
                  className={`mx-2 self-end col-start-3 row-start-2 justify-self-start lg:justify-self-end ${
                    item.discount === 0
                      ? "lg:self-start justify-self-end"
                      : "lg:self-end"
                  }`}
                >
                  {item.discount === 0
                    ? numberToFa(item.price.toLocaleString("en-US")) + "تومان"
                    : numberToFa(
                        Math.abs(
                          item.price * (item.discount / 100) - item.price
                        ).toLocaleString("en-US")
                      ) + "تومان"}
                </span>
                <div className="col-start-2 row-start-3 justify-self-center">
                  <Rating initialRating={0} />
                </div>
                <Button
                  variant="primary"
                  className="text-nowrap col-start-3 row-start-3 text-xs lg:text-lg"
                >
                  افزودن به سبد خرید
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodCart;
