"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function ConstructionContract() {
  const cards = [
    { title: "Electrician", image: "/images/electrician.png" },
    { title: "Gardner", image: "/images/gardner.png" },
    { title: "Carpenter", image: "/images/carpenter.png" },
    { title: "Painter", image: "/images/painter.png" },
    { title: "Construction", image: "/images/construction.png" },
    { title: "Gardner", image: "/images/gardner.png" },
  ];

  const sliderRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  // 🔥 arrow logic
  const [showArrow, setShowArrow] = useState(false);
  const hideTimeout = useRef(null);

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  const handleScroll = () => {
    setShowArrow(true);

    clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setShowArrow(false);
    }, 1000);
  };

  return (
    <section className="mt-[100px] px-[100px]">
      {/* Header */}
      <div className="flex justify-between items-start mb-[40px]">
        <div>
          <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
            Construction Contract
          </h2>
          <p className="text-[17px] text-gray-500 mt-[4px]">
            Pamper Home With Trusted Local Experience
          </p>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOpenModal(true);
          }}
          className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]"
        >
          See all
        </button>
      </div>

      {/* Cards Slider */}
      <div className="relative">
        <div
          ref={sliderRef}
          onScroll={handleScroll}   // ✅ IMPORTANT
          className="
            flex
            gap-x-[24px]
            overflow-x-scroll
            scrollbar-hide
            cursor-grab
            active:cursor-grabbing
          "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[220px] flex-shrink-0 cursor-pointer"
            >
              <div className="w-full h-[240px] rounded-[20px] overflow-hidden bg-[#f5f5f5] shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="mt-[14px] font-medium text-[16px] text-[#2f2f2f]">
                {card.title}
              </h4>

              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>

              <p className="text-[14px] text-gray-800 font-medium mt-[2px]">
                ₹898
              </p>
            </div>
          ))}
        </div>

        {/* ✅ RIGHT ARROW */}
        <button
          onClick={slideRight}
          className={`
            absolute top-1/2 -translate-y-1/2 right-[-20px] z-20
            w-10 h-10 rounded-full bg-white shadow-lg
            flex items-center justify-center
            transition-all duration-300
            ${
              showArrow
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75 pointer-events-none"
            }
          `}
        >
          ➜
        </button>
      </div>
    </section>
  );
}
