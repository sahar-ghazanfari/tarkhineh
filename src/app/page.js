import About from "components/About";
import Branchs from "components/Branchs";
import Menus from "components/Menus";
import Slider from "components/Slider";

export default function Home() {
  const images = [
    {
      id: 1,
      img: "/images/slider_home/slide1.svg",
      description: "یک ماجراجویی آشپزی برای تمام حواس",
    },
    {
      id: 2,
      img: "/images/slider_home/slide2.svg",
      description: "هر روز، یک تجربه مزه جدید",
    },
    {
      id: 3,
      img: "/images/slider_home/slide3.svg",
      description: " تجربه‌ای که فراموش نخواهید کرد",
    },
    {
      id: 4,
      img: "/images/slider_home/slide4.svg",
      description: "طعم بی‌نظیر طبیعت!",
    },
    {
      id: 5,
      img: "/images/slider_home/slide5.svg",
      description: "یک وعده غذایی ساده با هم",
    },
    {
      id: 6,
      img: "/images/slider_home/slide6.svg",
      description: "طعمی که به یاد خواهید آورد",
    },
  ];

  return (
    <div>
      <Slider images={images} buttonShowing={true} />
      <Menus />
      <About />
      <Branchs />
    </div>
  );
}
