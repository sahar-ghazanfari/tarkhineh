import { IoIosArrowBack } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { PiNotebook } from "react-icons/pi";
import { FaWifi, FaChartLine } from "react-icons/fa6";
import Button from "ui/Button";

function About() {
  return (
    <div
      className="px-5 lg:px-0 py-20 text-white flex flex-col lg:flex-row items-center
     lg:justify-around bg-[url('/images/about/about-mobile.png')] lg:bg-[url('/images/about/about.png')] bg-cover bg-no-repeat"
    >
      <div className="flex flex-col w-fit">
        <div>
          <h2 className="font-bold text-lg lg:text-2xl">
            رستوران‌های‌زنجیره‌ای‌ترخینه
          </h2>
          <p className="my-6 max-w-xl lg:line-clamp-5 line-clamp-none">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
        </div>
        <Button
          variant="footer"
          className=" flex w-fit px-6 py-3 items-center gap-x-2"
        >
          اطلاعات‌ بیشتر
          <IoIosArrowBack />
        </Button>
      </div>
      <div className="mt-10 lg:mt-0 grid grid-cols-2 grid-rows-2 gap-10">
        <div className="flex flex-col items-center">
          <FiUser size={48} />
          <span>پرسنلی‌مجرب‌و‌محبوب</span>
        </div>
        <div className="flex flex-col items-center">
          <FaWifi size={48} />
          <span>محیطی‌دلنشین‌و‌ارام</span>
        </div>
        <div className="flex flex-col items-center">
          <FaChartLine size={48} />
          <span>کیفیت‌بالای‌غذایی</span>
        </div>
        <div className="flex flex-col items-center">
          <PiNotebook size={48} />
          <span>منوی‌متنوع</span>
        </div>
      </div>
    </div>
  );
}

export default About;
