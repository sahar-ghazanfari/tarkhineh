import { CiSquareCheck, CiMoneyCheck1 } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import Button from "ui/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="block lg:hidden">
        <div className="flex justify-between w-full">
          <MdKeyboardArrowRight />
          <h2>سبد خرید</h2>
          <RiDeleteBinLine />
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
      <div className="border-2 w-full max-w-xs sm:max-w-7xl h-auto rounded-lg">
        <div className="flex gap-y-6 flex-col items-center justify-center py-40 lg:py-52 rounded-lg ">
          <p className="text-Gray-6">شما در حال حاضر هیچ سفارشی ثبت نکردید!</p>
          <Button className="px-6 py-2" variant="secondary">
            منوی رستوران
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
