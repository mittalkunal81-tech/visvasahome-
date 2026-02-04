"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, Star, Check, Shield, ChevronDown } from "lucide-react";

export default function ServiceDetailPage() {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const serviceOptions = [
    { id: 1, title: "Unknown issue", rating: "4.78", reviews: "168K", price: "₹199" },
    { id: 2, title: "Not spinning/washing", rating: "4.77", reviews: "75K", price: "₹199" },
    { id: 3, title: "Draining issue", rating: "4.77", reviews: "44K", price: "₹199" },
    { id: 4, title: "Error code", rating: "4.77", reviews: "22K", price: "₹199" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Karthik",
      initial: "K",
      location: "Chennai",
      date: "7 Oct 24",
      rating: 5,
      text: "The professional did efficient and quality job at my home. He took 3.5hrs for 3 bathrooms and the result is very impressive. The stains were tough to remove. Happy with the result !"
    },
    {
      id: 2,
      name: "Adarshita Vijay",
      initial: "A",
      location: "Bangalore",
      date: "8 Oct 24",
      rating: 5,
      text: "First time I had booked Urban clap. And I'm sure I'll come again. 10,000 sq ft place with 3 bathrooms and 1 kitchen was cleaned by them. Their attitude was very professional and they were quite satisfied with the work."
    }
  ];

  return (
    // Dark overlay background
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Modal container */}
      <div className="bg-white rounded-2xl w-full max-w-3xl h-[90vh] relative flex flex-col">

        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 bg-gray-200 rounded-t-2xl overflow-hidden">

          <Image 
            src="/images/same.png" 
            alt="Service" 
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">

          {/* Title & Rating */}
          <h2 className="text-2xl font-bold mb-2">Automatic top load machine check-up</h2>
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.77</span>
            <span className="text-gray-500 text-sm">(352K reviews)</span>
          </div>

          {/* UC Cover Card */}
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-teal-600 text-white px-3 py-1 rounded font-semibold text-sm">
                uc cover
              </div>
              <span className="text-sm font-medium">Standard rate card</span>
            </div>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Service Options */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-3">
              {serviceOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedIssue(option.id)}
                  className={`border rounded-lg p-4 text-left transition ${
                    selectedIssue === option.id
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-300 hover:border-purple-400"
                  }`}
                >
                  <h3 className="font-semibold text-sm mb-2">{option.title}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{option.rating}</span>
                    <span className="text-xs text-gray-500">({option.reviews} reviews)</span>
                  </div>
                  <p className="font-bold">{option.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* See the difference */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">See the difference yourself</h3>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {[{ label: "Before" }, { label: "After" }].map((item, i) => (
                <div key={i} className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                  <Image src="/images/same.png" alt={item.label} fill className="object-cover" />
                  <span className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative h-20 bg-gray-200 rounded-lg overflow-hidden">
                  <Image src="/images/same.png" alt={`Gallery ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Top professionals */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Top professionals</h3>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl">
                👷
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-sm">4.79 (100+ hours)</span>
                </div>
                <div className="space-y-1 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Average 4.8+ ratings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Served 100k+ homes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Verified by UC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our cleaning equipments */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Our cleaning equipments</h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { name: "Cleaning solutions", icon: "🧴" },
                { name: "Fine scrubber", icon: "🧽" },
                { name: "Brush", icon: "🪥" },
                { name: "Wiper", icon: "🧹" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="bg-gray-100 rounded-xl p-3 mb-2 aspect-square flex items-center justify-center">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-tight">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What is covered */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">What is covered</h3>
            <div className="space-y-2">
              {[
                "Hard water stains",
                "Toilet seat from outside & inside",
                "Tiles, taps & other fixtures",
                "Mirrors, windows & glass partition",
                "Exhaust fan & other hard to reach areas"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What we need from you */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">What we will need from you</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Water", icon: "💧" },
                { name: "Power supply", icon: "🔌" },
                { name: "Ladder etc", icon: "🪜" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="bg-gray-100 rounded-xl p-4 mb-2 aspect-square flex items-center justify-center">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What is NOT covered */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">What is not covered</h3>
            <div className="space-y-2">
              {[
                "Corners & rust stains",
                "Cabinet, drawers, shelves, mugs & stools",
                "Dismantling & cleaning of any appliance"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Damage Protection */}
          <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Damage protection</h3>
              <p className="text-sm text-gray-700">
                Up to ₹10,000 cover if any damage caused during the job.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Frequently asked questions</h3>
            <div className="space-y-1">
              {[
                {
                  question: "Do I need to provide any cleaning materials or chemicals?",
                  answer: "No, our professionals bring all necessary cleaning materials and chemicals."
                },
                {
                  question: "What if there is electricity during the service?",
                  answer: "Our professionals are trained to work safely. We will reschedule if conditions are unsafe."
                }
              ].map((faq, i) => (
                <div key={i} className="border-b">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-3 text-left"
                  >
                    <span className="text-sm pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        openFaqIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === i && (
                    <div className="pb-3 text-sm text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rating summary */}
          <div className="mb-6">
            <div className="flex items-start gap-6 mb-6">
              <div>
                <div className="text-4xl font-bold mb-2">4.79</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-500">93 ratings</div>
              </div>
            </div>

            {/* Rating bars */}
            <div className="space-y-2 mb-6">
              {[
                { stars: 5, count: 81, percentage: 87 },
                { stars: 4, count: 7, percentage: 8 },
                { stars: 3, count: 3, percentage: 3 },
                { stars: 2, count: 1, percentage: 1 },
                { stars: 1, count: 1, percentage: 1 }
              ].map((rating, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-sm w-3">{rating.stars}</span>
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8 text-right">{rating.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">All reviews</h3>
              <button className="text-sm text-blue-600 font-semibold">Filter</button>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm whitespace-nowrap font-medium">
                Most relevant
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm whitespace-nowrap">
                In my area
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm whitespace-nowrap">
                Recent posts
              </button>
            </div>

            {/* Review cards */}
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {review.initial}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{review.name}</div>
                        <div className="text-xs text-gray-500">
                          {review.location} • {review.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-sm">
                      <span>{review.rating}</span>
                      <Star className="w-3 h-3 fill-white" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    {review.text}
                  </p>
                  <button className="text-sm text-blue-600 font-semibold">
                    Show more
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Add Button */}
          <button
            onClick={() => router.back()}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 sticky bottom-0"
          >
            Add to Cart - ₹697
          </button>
        </div>
      </div>
    </div>
  );
}