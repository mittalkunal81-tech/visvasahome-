"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "../../components/footer/page";

/* ---------------- FAQ DATA ---------------- */

const faqs = [
  {
    question: "What are the payment terms for the service?",
    answer:
      "Payments can be made online using supported payment methods at the time of booking.",
  },
  {
    question: "What if I cancel a booking in the middle of the service?",
    answer:
      "If you cancel mid-service, charges may apply based on the work already completed.",
  },
  {
    question: "Who will clean up the house after the service?",
    answer:
      "Our professionals ensure basic cleanup after completing the service.",
  },
  {
    question: "What if I have an issue or a doubt after booking?",
    answer:
      "You can contact our support team anytime through the help section.",
  },
];

/* ---------------- NAVBAR ---------------- */

const Navbar = ({ search, setSearch }) => (
  <nav className="flex items-center h-20 px-10 bg-white ">
    <Image src="/images/logo.png" alt="Logo" width={120} height={40} />

    <div className="flex flex-1 justify-center gap-4">
      <select className="w-64 border rounded-lg px-4 py-2 text-sm">
        <option>Gandhi Path, Jaipur</option>
      </select>
      <input
        placeholder="Search for ‘Painter’"
        className="w-96 border rounded-lg px-4 py-2 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  </nav>
);

/* ---------------- CART ---------------- */

const Cart = ({ cart }) => {
  const items = Object.values(cart);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="sticky top-24 border border-[#C8C4C4] rounded-xl p-5 bg-white ">
      <h3 className="font-semibold mb-4">Cart</h3>

      {items.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <Image src="/images/cart.png" alt="Empty" width={200} height={70} />
          <p className="text-sm mt-4">No items in your cart</p>
        </div>
      ) : (
        <>
          {items.map((i) => (
            <div key={i.id} className="flex justify-between mb-3 text-sm">
              <div>
                <p>{i.title}</p>
                <p className="text-xs text-gray-500">
                  ₹{i.price} × {i.qty}
                </p>
              </div>
              <p>₹{i.price * i.qty}</p>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg">
            Book Now
          </button>
        </>
      )}
    </div>
  );
};

/* ---------------- PAGE ---------------- */

export default function OdgriPage() {
  const [cart] = useState({});
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar search={search} setSearch={setSearch} />

      {/* HERO */}
      <section className="bg-white px-10 py-4 ">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            Painting & Waterproofing
          </h1>

          <div className="flex items-center gap-2 mt-1 text-gray-700">
            <span className="text-sm">★</span>
            <span className="text-sm font-medium">4.79</span>
            <span className="text-sm text-gray-500">(4.1K Bookings)</span>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          {/* LEFT */}
          <div className="w-[300px] border rounded-lg px-4 py-3 mb-72">
            <h2 className="font-semibold text-sm mb-2">Visvasa Promise</h2>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>✔ Verified Professionals</li>
              <li>✔ Hassle Free Booking</li>
              <li>✔ Transparent Pricing</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex-1 max-h-[480px] rounded-[24px] overflow-hidden">
            <Image
              src="/images/painting.png"
              alt="Banner"
              width={800}
              height={280}
              className="w-full h-[480px] object-cover rounded-[24px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-10 py-8">
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* LEFT */}
          <div className="col-span-8 space-y-6">
            {/* IMAGE SERVICES BLOCK */}

            <div className="bg-white border border-[#C8C4C4] rounded-xl p-4 w-[520px] ml-60">

              {/* TOP SMALL CARD */}
              <div className="  p-3 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight mb-4">
                      Full Home Painting Consultation
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      ★ 4.79 (4.1K reviews)
                    </p>
                    <p className="text-xs mt-1 text-gray-700">
                      ₹898 • 60mins
                    </p>
                  </div>
                  <button className="text-sm border px-3 py-1 rounded text-purple-600">
                    Add
                  </button>
                </div>
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-bold leading-tight mb-4">
                For All Your Painting<br />Needs
              </h2>

              {/* GRID */}
              <div className="grid grid-cols-2 gap-4 ">
                {[
                  {
                    title: "Interiors & exteriors",
                    desc: "Colour your home inside out",
                    img: "/images/same.png",
                  },
                  {
                    title: "Wood polish",
                    desc: "shine your home like never before",
                    img: "/images/same.png",
                  },
                  {
                    title: "Texture",
                    desc: "Elevate your space with wall beautification",
                    img: "/images/same1.png",
                  },
                  {
                    title: "Waterproofing",
                    desc: "seal, shield & sustain your home",
                    img: "/images/same1.png",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="w-full h-[280px] rounded-xl overflow-hidden bg-gray-100">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={260}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h4 className="mt-2 text-sm font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button className="mt-4 flex items-center gap-1 text-sm text-gray-700 border px-3 py-1 rounded-full">
                Reach Out Now →
              </button>

              {/* OUR PROMISES SECTION */}
              <div className="mt-10">

                {/* TOP IMAGE */}
                <div className="w-full h-[280px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/promise-banner.png"   // yahan apni image lagana
                    alt="Promise"
                    width={600}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-4">Our Promises</h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-100 rounded-xl h-[160px] flex items-center justify-center text-sm text-gray-600 text-center px-4">
                    On-Time Completion Guarantee
                  </div>

                  <div className="bg-gray-100 rounded-xl h-[160px] flex items-center justify-center text-sm text-gray-600 text-center px-4">
                    1-Year Warranty
                  </div>

                  <div className="bg-gray-100 rounded-xl h-[160px] flex items-center justify-center see text-sm text-gray-600 text-center px-4">
                    Post-Service Cleaning
                  </div>

                  <div className="bg-gray-100 rounded-xl h-[160px] flex items-center justify-center text-sm text-gray-600 text-center px-4">
                    Accurate Quotations,<br />No Hidden Charges
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <h3 className="text-green-600 text-xl font-semibold">
                    Play After Saftaction
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Play After 100% Saftaction, Or Painting Free
                  </p>
                </div>
              </div>


              {/* WHY CHOOSE US */}

              <div className="w-full h-[280px] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/promise-banner.png"   // yahan apni image lagana
                  alt="Promise"
                  width={600}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Why Choose Us ?</h2>

                <div className="border rounded-xl overflow-hidden text-sm">
                  {/* Header */}
                  <div className="grid grid-cols-3 bg-gray-100 font-semibold">
                    <div className="p-3">VH</div>
                    <div className="p-3 text-center">Odgri</div>
                    <div className="p-3 text-center">Other Market</div>
                  </div>

                  {[
                    "Pay After 100% Quality Satisfaction",
                    "Full Material Procurement",
                    "Trained Experts And Advanced Tools",
                    "100% Packing And No Spilling",
                    "Daily Quality Checks And Post Painting",
                    "Timely Completion And Clean Up",
                  ].map((text, i) => (
                    <div key={i} className="grid grid-cols-3 border-t">
                      {/* Left text */}
                      <div className="p-3">{text}</div>

                      {/* Green column */}
                      <div className="flex items-center justify-center bg-green-400">
                        <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          ✓
                        </span>
                      </div>

                      {/* Red column */}
                      <div className="flex items-center justify-center">
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          ✕
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOP TRAINED PROFESSIONALS */}
<div className="mt-12 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold">
    Top Trained Professionals,
  </h2>
  <h3 className="text-xl font-bold text-green-600 mb-6">
    Top Quality Work
  </h3>

  <ul className="space-y-5 text-sm text-gray-800">
    <li className="flex items-start gap-4">
      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        ✓
      </span>
      <span>We Only Choose The Finest Painters</span>
    </li>

    <li className="flex items-start gap-4">
      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        ✓
      </span>
      <span>300+ Hrs. Intensive Training</span>
    </li>

    <li className="flex items-start gap-4">
      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        ✓
      </span>
      <span>5-Step Background Check</span>
    </li>

    <li className="flex items-start gap-4">
      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        ✓
      </span>
      <span>On-Time Completion And Daily Supervision</span>
    </li>
  </ul>
</div>



              {/* CUSTOMERS LOVE US */}
              <div className="mt-12">
                <h2 className="text-xl font-bold mb-1">Customers Love Us !</h2>
                <p className="text-sm text-gray-600 mb-4">See For Yourself.</p>

                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white border rounded-xl p-3">
                      <div className="w-full h-[140px] rounded-lg overflow-hidden mb-2">
                        <Image
                          src="/images/review.png"   // apni image lagana
                          alt="review"
                          width={200}
                          height={140}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h4 className="text-sm font-semibold">Ganesh Dherkar</h4>
                      <p className="text-xs text-gray-500">Mumbai Nagar • October 2023</p>
                      <p className="text-xs text-gray-600 mt-1">
                        The painters were professional and did a neat job. Very satisfied with the service.
                      </p>
                    </div>
                  ))}
                </div>
              </div>


            </div>


          </div>

          {/* RIGHT */}
          <div className="col-span-4">
            <Cart cart={{}} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-10 py-10 border-t border-[#C8C4C4]">
        <h3 className="font-semibold mb-6">Frequently asked questions</h3>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#C8C4C4]">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="text-sm text-gray-800">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                >
                  ▾
                </span>
              </button>

              {openIndex === index && (
                <p className="text-sm text-gray-600 pb-4 pr-6">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
