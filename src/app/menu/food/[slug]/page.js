"use client";
import foods from "data/db.json";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FoodDetailPage({ params }) {
  const router = useRouter();
  const foodItem = foods.find((item) => item.slug === params.slug);

  if (!foodItem) {
    return <div>Food not found</div>;
  }

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <button className="absolute top-2 right-2" onClick={closeModal}>
          ✖
        </button>
        <h1 className="text-xl font-bold">{foodItem.name}</h1>
        <Image
          src={foodItem.image}
          alt={foodItem.name}
          className="w-full h-48 object-cover mt-4"
        />
        <p className="mt-4">{foodItem.description}</p>
        <p className="mt-4 font-bold">Price: {foodItem.price} تومان</p>
      </div>
    </div>
  );
}
