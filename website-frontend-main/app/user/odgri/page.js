"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "../../components/footer/page";

/* ---------------- DATA ---------------- */

const SERVICES = {
  "Cat Food": [
    { id: "c1", title: "Switchbox Installation", price: 898, time: "60 mins" },
    { id: "c2", title: "AC Switchbox Installation", price: 898, time: "60 mins" },
  ],
  "Rabbit Food": [
    { id: "r1", title: "Intense Bathroom Cleaning", price: 1299, time: "90 mins" },
  ],
  "Dog Food": [
    { id: "d1", title: "Intense Bathroom Cleaning", price: 1299, time: "90 mins" },
  ],
  "Birds Food": [
    { id: "b1", title: "Ceiling Fan Cleaning", price: 499, time: "30 mins" },
  ],
  "Pet Toys": [
    { id: "p1", title: "Microwave Cleaning", price: 399, time: "30 mins" },
  ],
  "Pet House": [
    { id: "h1", title: "Inverter Installation", price: 1499, time: "90 mins" },
  ],
};

const banners = [
  "/images/banner.png",
  "/images/same.png",
  "/images/same1.png",
];

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
        placeholder="Search for 'Electrician'"
        className="w-96 border rounded-lg px-4 py-2 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  </nav>
);

/* ---------------- SERVICE ITEM ---------------- */

const ServiceItem = ({ item, cart, setCart }) => {
  const qty = cart[item.id]?.qty || 0;
  const router = useRouter();

  const add = () =>
    setCart((c) => ({
      ...c,
      [item.id]: { ...item, qty: qty + 1 },
    }));

  const remove = () => {
    if (qty === 1) {
      const c = { ...cart };
      delete c[item.id];
      setCart(c);
    } else {
      setCart((c) => ({
        ...c,
        [item.id]: { ...item, qty: qty - 1 },
      }));
    }
  };

  const handleServiceClick = () => {
    // Navigate to service detail page
    router.push(`/user/odgri/service-detail/${item.id}`);
  };

  return (
    <div
      className="flex justify-between gap-2 py-3 last:border-b-0 cursor-pointer"
      onClick={handleServiceClick}
    >
      <div>
        <h4 className="text-start font-semibold">{item.title}</h4>
        <p className="text-xs text-gray-500 mt-1">
          ⭐ 4.79 (4.1K reviews)
        </p>
        <p className="text-xs mt-1">
          ₹{item.price} • {item.time}
        </p>
        <p className="text-xs text-purple-600 mt-1 cursor-pointer">
          View Details
        </p>
      </div>

      {qty === 0 ? (
        <div className="flex flex-col items-center gap-1">
          <Image src="/images/same.png" alt="icon" width={80} height={30} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              add();
            }}
            className="h-fit px-4 py-1 border rounded text-purple-600 text-sm"
          >
            Add
          </button>
        </div>
      ) : (
        <div
          className="flex items-center gap-2 border rounded px-2 py-1"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={remove}>−</button>
          <span>{qty}</span>
          <button onClick={add}>+</button>
        </div>
      )}
    </div>
  );
};

/* ---------------- CART ---------------- */

const Cart = ({ cart }) => {
  const items = Object.values(cart);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="sticky top-24 rounded-xl p-5 bg-white">
      <h3 className="font-semibold mb-4">Cart</h3>

      {items.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <Image src="/images/cart.png" alt="Empty" width={400} height={70} />
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
  const [cart, setCart] = useState({});
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredServices = Object.fromEntries(
    Object.entries(SERVICES).map(([cat, items]) => [
      cat,
      items.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          cat.toLowerCase().includes(search.toLowerCase())
      ),
    ])
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar search={search} setSearch={setSearch} />

      {/* HERO */}
      <section className="bg-white px-10 py-4 ">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            Odgri Pets Food
          </h1>

          <div className="flex items-center gap-2 mt-1 text-gray-700">
            <span className="text-sm">★</span>
            <span className="text-sm font-medium">4.79</span>
            <span className="text-sm text-gray-500">(4.1K Bookings)</span>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          {/* LEFT */}
          <div className="w-[300px] border mb-80 border-[#C8C4C4] rounded-lg px-4 py-3">
            <h2 className="font-semibold text-sm mb-2">Visvasa Promise</h2>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>✔ Verified Professionals</li>
              <li>✔ Hassle Free Booking</li>
              <li>✔ Transparent Pricing</li>
            </ul>
          </div>

          {/* RIGHT SLIDER */}
          <div className="flex-1 max-h-[480px] rounded-[24px] overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentBanner * 100}%)` }}
            >
              {banners.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="Banner"
                  width={800}
                  height={480}
                  className="w-full h-[780px] object-cover flex-shrink-0"
                  priority
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-10 py-8">
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          <div className="col-span-8 space-y-6">
            {Object.entries(filteredServices)
              .filter(([cat, items]) => items.length > 0)
              .map(([cat, items]) => (
                <div
                  key={cat}
                  className="bg-white border border-[#C8C4C4] rounded-xl p-4 w-[520px] ml-60"
                >
                  <h3
                    className={`mb-3 ${cat === "Cat Food" || cat === "Dog Food" || cat === "Birds Food" || cat === "Rabbit Food"
                      || cat === "Pet Toys"
                        ? "text-xl font-bold"
                        : "font-semibold"
                      }`}
                  >
                    {cat}
                  </h3>

                  {items.map((item) => (
                    <ServiceItem
                      key={item.id}
                      item={item}
                      cart={cart}
                      setCart={setCart}
                    />
                  ))}
                </div>
              ))}
          </div>

          <div className="col-span-4">
            <Cart cart={cart} />
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
                <span>{openIndex === index ? "▲" : "▼"}</span>
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