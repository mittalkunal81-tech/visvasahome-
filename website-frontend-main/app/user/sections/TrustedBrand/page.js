"use client";

import Image from "next/image";

export default function TrustedBrands() {
  return (
    <section className="w-full py-6 mt-15 overflow-hidden">
      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="mx-auto bg-black w-[1350px] h-[229px] flex flex-col justify-center">
        <p className="text-center text-[22px] -mt-15 text-gray-300">
          Trusted & verified brand in use.
        </p>

        <div className="relative overflow-hidden mt-10">
          <div className="marquee items-center gap-[102px]">
            {/* logos */}
            <Brand src="/images/RR.svg" w={120} />
            <Brand src="/images/path.svg" w={260} />
            <Brand src="/images/h.svg" w={260} />
            <Brand src="/images/p.svg" w={280} />

            {/* duplicate for infinite scroll */}
            <Brand src="/images/RR.svg" w={120} />
            <Brand src="/images/path.svg" w={260} />
            <Brand src="/images/h.svg" w={260} />
            <Brand src="/images/p.svg" w={280} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Brand({ src, w }) {
  return (
    <Image
      src={src}
      alt="brand"
      width={w}
      height={40}
      className="
        opacity-80
        hover:opacity-100
        hover:scale-110
        transition-all
        duration-300
        cursor-pointer
      "
    />
  );
}
