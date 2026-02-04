"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInfinity, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import SpotlightSection from "./sections/spotlight/page";
import ConstructionContract from "./sections/ourcontraction/page";
import NewAndNoteworthy from "./sections/new/page";
import PopularServices from "./sections/popular/page";
import OurContractors from "./sections/contractor/page";
import CleanEssentials from "./sections/clean/page";
import ApplianceServiceRepair from "./sections/appliance/page";
import HomeRepairInstallation from "./sections/homerepair/page";
import PetAndFeeding from "./sections/petFeeding/page";
import PetBreeds from "./sections/petbreeds/page";
import Footer from "../components/footer/page";
import HeroSection from "./sections/herosection/page";




export default function UserHome() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      router.push(`/user/search?query=${searchQuery}`);
    }
  };


  return (
    <main className="page-wrapper">

      {/* NAVBAR */}
      <div className="navbar-wrapper">
        <nav className="navbar light-navbar">

          {/* LEFT */}
          <div className="nav-left">
            {/* LOGO IMAGE (replace src later) */}
            <img
              src="images/logo.png"
              alt="VisvasaHome"
              className="logo-img"
            />
            <Link href="/user/odgri">
              <span className="city-text">Vodgri</span>
            </Link>
          </div>

          {/* CENTER */}
          <div className="nav-center">
            <select className="location-select">
              <option>Gandhi Path, Jaipur</option>
              <option>Vaishali Nagar</option>
            </select>

            <input
              className="search-input"
              placeholder="Search for 'Electrician'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchQuery.trim() !== "") {
                  router.push(`/user/search?query=${searchQuery}`);
                }
              }}
            />

          </div>

          {/* RIGHT */}
          <div className="nav-right flex items-center mr-3.5">
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
              <img
                src="/images/shop.png"
                alt="Cart"
                className="w-[23px] h-[23px]"
              />
            </div>

            <Link href="/login">
              <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer ml-2">
                <img
                  src="/images/user.png"
                  alt="User"
                  className="w-[23px] h-[23px]"
                />
              </div>
            </Link>
          </div>


        </nav>
      </div>

      {/* HERO SECTION */}
      <HeroSection />

      {/* IN THE SPOTLIGHT */}
      <SpotlightSection />

      {/* CONSTRUCTIONS CONTRACT */}
      <ConstructionContract />

      {/* NEW & NOTEWORTHY SECTION */}
      <NewAndNoteworthy />

      {/* Popular services */}
      <PopularServices />


      <div className="bg-white relative">
        <div className="flex items-center justify-between px-[185px] py-24">

          {/* TEXT SECTION */}
          <div
            className="
              w-[720.25px]
             h-[168.44px]
             font-medium
             text-[46px]
             leading-[57px]
             tracking-normal
             capitalize
  "
          >
            <h1 className="text-[42px] font-semibold leading-tight">
              Create, Innovate, And Accelerate <br />
              With Intelligence
            </h1>

            <p className="mt-3 text-[15px] text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry
            </p>

            <button className="mt-5 px-8 py-3 rounded-full bg-gray-100 text-sm">
              Reach Out Now
            </button>
          </div>

          {/* IMAGE SECTION */}
          <div
            className="w-[693px] h-[387px] overflow-hidden"
          >
            <img
              src="/images/banner1.png"
              alt="Hero Image"
              className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="flex justify-center my-6">
          <div className="h-10 w-[90%] bg-[#06283D] rounded-sm"></div>
        </div>

      </div>

      {/* our contractor */}
      <OurContractors />
      {/* Clean Essentials */}
      <CleanEssentials />

      <div className="relative w-[1500px] h-[550px] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 flex items-center justify-between">

          {/* LEFT CONTENT */}
          <div className="max-w-lg">
            <h1 className="font-segoeui text-[46px] leading-[57px] font-semibold text-gray-900 capitalize">
              Give your space the <br />
              <span className="font-bold">glow-up it deserves</span>
            </h1>


            <p className="mt-4 max-w-md font-segoeui text-[18px] leading-[28px] font-normal text-gray-600">
              Give your space the glow-up it deserves
            </p>


            <button className="mt-6 px-8 py-3 rounded-full bg-gray-100 text-sm hover:bg-gray-200">
              Reach Out Now
            </button>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative w-[540px] h-[489px] flex items-end justify-center">

            {/* HALF CIRCLE BACKGROUND */}
            <div className="absolute bottom-0 w-[540px] h-[270px] bg-[#FF6F61] rounded-t-full" />

            {/* PRODUCT IMAGE */}
            <img
              src="images/device.png"
              alt="Device"
              className="absolute  width: 540;
                height: 489;
               angle: 0 deg;
                opacity: 1;
               
              left: 983px;
          object-contain"
            />
          </div>

        </div>
      </div>

      {/* Appliance Service & Repair*/}
      <ApplianceServiceRepair />
      {/* Home Repair & installation  */}
      <HomeRepairInstallation />
     
      {/* pet  */}
      <PetAndFeeding />

      <section className="w-[1500px] h-[550px] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center ">
          {/* Left Content */}
          <div className="ml-22">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Give your space the <br /> glow-up it deserves
            </h1>

            <p className="text-gray-500 max-w-md mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            </p>

            <button className="inline-flex items-center justify-center rounded-full bg-gray-100 px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">
              Reach Out Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/petfood.png"
              alt="Product"
              width={1700}
              height={880}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>


      {/* pet breeds*/}
      <PetBreeds />


      <section className="w-full py-12">
        <div className="mx-auto max-w-[1300px] bg-[#90CAF9] rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-12 py-10">

            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-medium text-black leading-tight mb-6">
                Give your space the <br /> glow-up it deserves
              </h1>

              <p className="text-sm text-gray-700 max-w-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
              </p>
            </div>

            {/* Right Image Box */}
            <div className="p-6 rounded-sm flex items-center justify-center h-[400px]">
              <Image
                src="/images/civil.png"
                alt="Construction"
                width={720}
                height={460}
                className="object-contain max-h-full"
              />
            </div>

          </div>
        </div>
      </section>



      <Footer />



    </main>
  );
}
