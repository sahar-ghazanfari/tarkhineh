"use client";
import { CiSquareCheck, CiMoneyCheck1 } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import Button from "ui/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";
import { numberToFa } from "utils/numbrToPersian";
import { useCart } from "context/cartContext";
// import useCart from "hooks/useCart";

function CartView() {
  const { cart } = useCart();
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
      <div className="block lg:hidden w-full my-4">
        <div className="flex justify-between mx-10">
          <MdKeyboardArrowRight size={20} />
          <h2>سبد خرید</h2>
          <RiDeleteBinLine size={20} />
        </div>
      </div>
      <div className="hidden lg:block w-full max-w-3xl">
        <ol className="mb-8 flex items-center w-full font-medium lg:text-lg text-base justify-center text-center text-Gray-4">
          <li className="flex md:w-full gap-x-2 items-center text-primary sm:after:content-[''] after:w-full after:h-1 after:border-dashed after:border-b after:border-Gray-4 after:border-1 after:inline-block after:mx-6">
            <RiShoppingCartLine size={34} />
            <span className="inline-flex text-nowrap">سبد خرید</span>
          </li>
          <li className="flex md:w-full gap-x-2 items-center after:content-[''] after:w-full after:h-1 after:border-dashed after:border-b after:border-Gray-4 after:border-1 after:inline-block after:mx-6">
            <CiSquareCheck size={34} />
            <span className="inline-flex text-nowrap">تکمیل اطلاعات</span>
          </li>
          <li className="flex gap-x-2 items-center">
            <CiMoneyCheck1 size={34} />
            <span className="text-nowrap"> پرداخت</span>
          </li>
        </ol>
      </div>
      <div className="w-full">
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-y-4 border-2 lg:mx-20 mx-10 py-40 rounded-lg">
            <p className="text-Gray-6">
              شما در حال حاضر هیچ سفارشی ثبت نکردید!
            </p>
            <Button className="px-6 py-2" variant="secondary">
              <Link href={"/menu"}>منوی رستوران</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-9 grid-cols-1 gap-x-12 mx-10 gap-y-6">
            <div className="border h-96 lg:col-start-2 lg:col-span-4">
              {cart.map((item) => (
                <div key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.price} تومان</p>
                </div>
              ))}
            </div>
            <div className="border h-fit lg:col-start-6 lg:col-span-3 p-8">
              <div className="flex justify-between border-b-2 mx-2 py-3">
                <span>سبد خرید ({cart.length})</span>
                <RiDeleteBinLine />
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
              <Button className="w-full py-3" variant="primary">
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
