"use client";
import { useSearchParams } from "next/navigation";
import { searchData } from "../searchData";

export default function SearchClient() {
  const params = useSearchParams();
  const query = params.get("query") || "";

  const results = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="mt-[60px] px-[100px]">
      <h2 className="text-[32px] font-semibold mb-[30px]">
        Results for "{query}"
      </h2>

      {results.length === 0 ? (
        <p>No result found</p>
      ) : (
        <div className="grid grid-cols-4 gap-[24px]">
          {results.map((item, index) => (
            <div key={index} className="w-[220px] cursor-pointer">
              <div className="w-full h-[240px] rounded-[20px] overflow-hidden bg-[#f5f5f5] shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="mt-[14px] font-medium text-[16px] leading-[22px] text-[#2f2f2f]">
                {item.title}
              </h4>

              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>

              <p className="text-[14px] text-gray-800 font-medium mt-[2px]">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
