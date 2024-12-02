"use client";
import Button from "ui/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";
import { numberToFa } from "utils/numbrToPersian";
import { useCart } from "context/cartContext";
import Image from "next/image";

function CartView() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (1 - item.discount / 100 || 1),
    0
  );
  const totalDiscount = cart.reduce(
    (sum, item) => sum + item.price * (item.discount / 100),
    0
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-y-4 border-2 lg:mx-20 mx-10 py-40 rounded-lg">
            <p className="text-Gray-6">
              شما در حال حاضر هیچ سفارشی ثبت نکردید!
            </p>
            <Link
              className="text-primary border border-primary rounded px-6 py-2 "
              href={"/menu"}
            >
              منوی رستوران
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-9 grid-cols-1 gap-x-12 mx-10 gap-y-6">
            <div className="overflow-y-auto border h-96 lg:col-start-2 lg:col-span-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border gap-y-3 m-2 grid grid-cols-3 grid-rows-3 rounded-lg overflow-hidden cursor-pointer"
                >
                  <div className="relative w-full h-full overflow-hidden row-span-3">
                    <Image
                      src={item.image}
                      alt="foods"
                      fill
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="m-2 text-nowrap cursor-pointer">
                    {item.name}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center pl-4 justify-end"
                  >
                    <RiDeleteBinLine />
                  </button>
                  <span
                    className={`row-start-2 col-start-3 mx-2 self-end justify-self-start lg:justify-self-end ${
                      item.discount === 0
                        ? "lg:self-start justify-self-end"
                        : "lg:self-end"
                    }`}
                  >
                    {numberToFa(item.price.toLocaleString("en-US"))}
                    تومان
                  </span>
                  <div className="row-start-3 col-start-2 mr-2 bg-primary text-white w-fit h-fit px-2 py-1 rounded flex gap-x-3">
                    <Button onClick={() => increaseQuantity(item.id)}>+</Button>
                    <Button>{item.quantity}</Button>
                    <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border h-fit lg:col-start-6 lg:col-span-3 p-8">
              <div className="flex justify-between border-b-2 mx-2 py-3">
                <span>سبد خرید ({cart.length})</span>
                <button onClick={clearCart}>
                  <RiDeleteBinLine />
                </button>
              </div>
              <div className="flex justify-between border-b-2 mx-2 py-3">
                <span>تخفیف محصولات</span>
                <span>{numberToFa(totalDiscount.toLocaleString())} تومان</span>
              </div>
              <div className="flex justify-between border-b-2 mx-2 py-3">
                <span>هزینه ارسال</span>
                <span>۰ تومان</span>
              </div>
              <div className="flex justify-between border-b-2 mx-2 py-3">
                <span>مبلغ قابل پرداخت</span>
                <div>
                  <span>
                    <span>{numberToFa(totalPrice.toLocaleString())}</span>
                  </span>
                  <span> تومان</span>
                </div>
              </div>
              <Button variant="primary" className="w-full py-3">
                تایید سفارش
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartView;
