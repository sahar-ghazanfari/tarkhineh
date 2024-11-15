import { useRouter } from "next/router";
import foods from "data/db.json";

export default function FoodDetailPage() {
  const router = useRouter();
  const { foodSlug } = router.query; // دریافت پارامتر slug از URL

  // پیدا کردن غذا با استفاده از slug
  const foodItem = foods.find((item) => item.slug === foodSlug);

  if (!foodItem) {
    return <h1>غذا پیدا نشد</h1>; // در صورت نبودن غذا، پیغام خطا نمایش داده شود
  }

  return (
    <div>
      <h1>{foodItem.name}</h1>
      <p>{foodItem.descrption}</p>
      <img src={foodItem.image} alt={foodItem.name} />
      <p>قیمت: {foodItem.price} تومان</p>
    </div>
  );
}
