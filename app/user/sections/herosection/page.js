"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [openModal, setOpenModal] = useState(false);

  const needs = [
    { icon: "/icon/electrician.png", label: "Electrician, Plumber & Carpenter" },
    { icon: "/icon/repair.png", label: "Appliance Repair", link: "/appliance-repair" },
    { icon: "/icon/cleaning.png", label: "Cleaning", link: "/cleaning" },
    { icon: "/icon/gardener1.png", label: "Gardener", link: "/gardener" },
    { icon: "/icon/Vodgri.png", label: "Vodgi", link: "/vodgi" },
    { icon: "/icon/painting.png", label: "Painting & waterproofing", link: "/painting" },
    { icon: "/icon/gardener.png", label: "Gardener", link: "/gardener" },
    { icon: "/icon/labour.png", label: "Labour", link: "/labour" },
    { icon: "/icon/contractors.png", label: "Contractors", link: "/contractors" },
  ];

  return (
    <>
      <section className="flex justify-between px-[113px] pt-[60px]">
        {/* LEFT SIDE */}
        <div className="max-w-[520px]">
          <h1 className="text-[34px] font-semibold text-[#2f2f2f] leading-[1.3]">
            On-Demand Contractors & Home Services
          </h1>

          {/* WHAT WE NEED CARD */}
          <div className="mt-2 border border-gray-300 rounded-[18px] p-6 w-[420px]">
            <h3 className="text-[20px] font-semibold mb-6">
              What We Need ?
            </h3>

            <div className="grid grid-cols-3 gap-y-6 gap-x-4 text-center">
              {needs.map((item, index) => (
                <div key={index}>
                  {index === 0 ? (
                    <button
                      onClick={() => setOpenModal(true)}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-[44px] h-[44px] object-contain"
                      />
                      <p className="text-[12px] text-gray-600 group-hover:underline">
                        {item.label}
                      </p>
                    </button>
                  ) : (
                    <Link href={item.link}>
                      <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="w-[44px] h-[44px] object-contain"
                        />
                        <p className="text-[12px] text-gray-600 group-hover:underline">
                          {item.label}
                        </p>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="flex gap-[60px] mt-[60px]">
            <div>
              <h2 className="text-[32px] font-semibold">15+</h2>
              <p className="text-[14px] text-gray-500">Years Of Excellence</p>
            </div>

            <div>
              <h2 className="text-[32px] font-semibold">4.5</h2>
              <p className="text-[14px] text-gray-500">Services Rating</p>
            </div>

            <div>
              <h2 className="text-[32px] font-semibold">12k</h2>
              <p className="text-[14px] text-gray-500">Family In Jaipur</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE COLLAGE */}
        <div className="relative w-[720px] h-[620px] grid grid-cols-2 grid-rows-[1fr_1fr_1fr] gap-4">
          <div className="overflow-hidden rounded-2xl group">
            <img src="/images/civil.png" className="w-full h-full object-cover group-hover:scale-105 duration-500" />
          </div>

          <div className="overflow-hidden rounded-2xl group row-span-2">
            <img src="/images/home2.png" className="w-full h-full object-cover group-hover:scale-105 duration-500" />
          </div>

          <div className="overflow-hidden rounded-2xl group row-span-2">
            <img src="/images/home3.png" className="w-full h-full object-cover group-hover:scale-105 duration-500" />
          </div>

          <div className="overflow-hidden rounded-2xl group col-start-2 row-start-3">
            <img src="/images/home4.png" className="w-full h-full object-cover group-hover:scale-105 duration-500" />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[600px] rounded-2xl p-8 relative">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6">
              Electrician, Plumber & Carpenter
            </h2>

            <h3 className="font-semibold mb-3">Repairs</h3>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Link href="/appliance-repair" className="flex flex-col items-center gap-2 group">
                <img
                  src="/icon/electrician.png"
                  alt="Appliance Repair"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-sm group-hover:underline">
                  electrician
                </span>
              </Link>
              <Link href="/appliance-repair" className="flex flex-col items-center gap-2 group">
                <img
                  src="/icon/repair.png"
                  alt="Appliance Repair"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-sm group-hover:underline">
                  plumber
                </span>
              </Link>

              <Link href="/carpenter" className="flex flex-col items-center gap-2 group">
                <img
                  src="/icon/contractors.png"
                  alt="Carpenter"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-sm group-hover:underline">
                  Carpenter
                </span>
              </Link>
            </div>



          </div>
        </div>
      )}
    </>
  );
}
