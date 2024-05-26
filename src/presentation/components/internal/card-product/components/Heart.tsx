import { useState } from "react";

export function Heart() {
  const [colorHeart, setColorHeart] = useState(false);

  function hanldeSetColorHeart() {
    setColorHeart(!colorHeart);
  }
  return (
    <button
      onClick={hanldeSetColorHeart}
      className="flex items-end justify-end absolute z-10 "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={colorHeart ? "#41873F" : "none"}
        stroke="#41873F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="bg-[#e9f7e9] border rounded-full hover:border-[#41873F]"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    </button>
  );
}
