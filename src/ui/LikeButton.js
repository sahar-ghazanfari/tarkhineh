import { GoHeart } from "react-icons/go";

function LikeButton({ liked, onClick }) {
  return (
    <button
      onClick={onClick}
    >
      <GoHeart color={liked ? "red" : "grey"} size={18} />
    </button>
  );
}

export default LikeButton;
