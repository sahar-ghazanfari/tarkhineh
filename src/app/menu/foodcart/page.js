"use client";
import Image from "next/image";
import { numberToFa } from "utils/numbrToPersian";
import { RiShoppingCartLine } from "react-icons/ri";
import { Suspense, useEffect, useState } from "react";
import Button from "ui/Button";
import LikeButton from "ui/LikeButton";
import Rating from "ui/Rating";
import { IoClose } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useCart } from "context/cartContext";
// import useCart from "hooks/useCart";

function FoodCart() {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    if (product) {
      toast.success("به سبد خرید اضافه شد", {
        style: {
          background: "#00966d",
          color: "#fff",
          borderRadius: "1rem",
          boxShadow: "none",
        },
        icon: "✅",
      });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/foods")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let lastCategory = "";

  const openModal = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const getDiscountedPrice = (price, discount) => {
    if (discount === 0) return numberToFa(price.toLocaleString("en-US"));
    const discountedPrice = price - price * (discount / 100);
    return numberToFa(discountedPrice.toLocaleString("en-US"));
  };

  return (
    <div>
      <div className="flex justify-end">
        <Link href={"/shoppingCart"}>
          <Button
            variant="secondary"
            className="flex items-center lg:px-10 py-2 px-5"
          >
            <RiShoppingCartLine />
            تکمیل خرید
          </Button>
        </Link>
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
              <Suspense fallback>
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
                  <div
                    onClick={() => openModal(item)}
                    className="m-2 text-nowrap cursor-pointer"
                  >
                    {item.name}
                  </div>
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
                    {item.discount ? `${numberToFa(item.discount)}%` : ""}
                  </span>
                  <span
                    className={`mx-2 self-end col-start-3 row-start-2 justify-self-start lg:justify-self-end ${
                      item.discount === 0
                        ? "lg:self-start justify-self-end"
                        : "lg:self-end"
                    }`}
                  >
                    {getDiscountedPrice(item.price, item.discount)} تومان
                  </span>
                  <div className="col-start-2 row-start-3 justify-self-center">
                    <Rating initialRating={0} />
                  </div>
                  <Button
                    variant="primary"
                    className="text-nowrap col-start-3 row-start-3 text-xs lg:text-lg"
                    onClick={() => handleAddToCart(item)}
                  >
                    افزودن به سبد خرید
                  </Button>
                  <Toaster />
                </div>
              </Suspense>
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-gray-950 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-xl w-full">
            <div className="flex justify-between p-4">
              <h2 className="text-xl font-bold text-Gray-8">اطلاعات محصول</h2>
              <button>
                <IoClose onClick={() => setIsModalOpen(false)} />
              </button>
            </div>
            <div className="relative w-full h-80">
              <Image
                src={selectedFood?.image}
                alt={selectedFood?.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2">
              <div className="flex justify-between">
                <h2>{selectedFood?.name}</h2>
                <Rating initialRating={0} />
              </div>
              <div>
                <p>{selectedFood?.descrption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodCart;
