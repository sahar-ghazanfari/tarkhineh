import { useState } from "react";

function Rating({ initialRating = 0}) {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          className={`cursor-pointer text-2xl lg:text-3xl ${star <= rating ? "text-yellow-400" : "text-Gray-3"}`}
      
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
