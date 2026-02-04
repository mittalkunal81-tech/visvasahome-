"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center h-20 px-10 bg-white border-b">

      {/* LEFT */}
      <div className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="VisvasaHome" width={36} height={36} />
        <Link href="/user/odgri">
          <span className="text-xl font-semibold text-[#0B3E74] cursor-pointer">
            Odgri
          </span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="flex flex-1 justify-center gap-4">
        <select className="w-60 rounded-lg border px-4 py-2.5 text-base">
          <option>Gandhi Path, Jaipur</option>
          <option>Vaishali Nagar</option>
        </select>

        <input
          placeholder="Search for ‘Electrician’"
          className="w-80 rounded-lg border px-4 py-2.5 text-base"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/user/odgri">
          <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Image src="/images/shop.png" alt="Cart" width={22} height={22} />
          </div>
        </Link>

        <Link href="/user/sections/login">
          <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Image src="/images/user.png" alt="User" width={22} height={22} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
