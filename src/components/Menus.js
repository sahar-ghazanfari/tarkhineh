import Image from "next/image";
import Link from "next/link";

function Menus() {
  const menuList = [
    {
      links: "main-dish",
      img: "/images/menu/ghazaasli.svg",
      description: "غذای‌اصلی",
    },
    {
      links: "Appetizer",
      img: "/images/menu/pishghaza.svg",
      description: "پیش‌غذا",
    },
    {
      links: "dessert",
      img: "/images/menu/deser.svg",
      description: "دسر",
    },
    {
      links: "drink",
      img: "/images/menu/nushidani.svg",
      description: "نوشیدنی",
    },
  ];

  return (
    <div>
      <h2 className=" flex justify-center text-Gray-8 lg:text-lg font-bold my-8">
        منوی‌ رستوران
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-7 gap-y-6 lg:w-full lg:gap-x-7 mx-7 mt-20 sm:mt-16 lg:mt-28">
          {menuList.map((item, index) => (
            <div
              key={index}
              className="relative flex justify-center rounded-lg h-1/2 lg:h-2/3 max-w-60 lg:max-w-none bg-primary"
            >
              <div className="relative w-52 lg:w-64 h-64 ">
                <Image
                  src={item.img}
                  alt={item.description}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="-translate-y-1/2"
                />
              </div>
                <Link
                  className="flex px-10 py-3 rounded-lg absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2  justify-center font-semibold text-Gray-8 bg-white shadow-lg"
                  href={`${item.links}`}
                >
                  {item.description}
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menus;
