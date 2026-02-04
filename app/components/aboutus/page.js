import Image from "next/image";
import Footer from "../footer/page";

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* TOP BAR */}
      <div className="border-b py-5 px-6 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={128} height={28} />
        </div>
        <div className="flex gap-6 text-gray-600">
          <span>Register As a professional</span>
          <span>Help</span>
        </div>
      </div>

      {/* HERO */}
      <div className="bg-[#0b3a6a] text-white text-center py-4 font-semibold text-lg">
        ABOUT VISVASAHOMESHOME
      </div>

      {/* ABOUT CONTENT */}
      <section className="max-w-5xl mx-auto bg-white shadow mt-10 p-10">
        <h2 className="italic text-xl mb-4">
          Deliver Home Services And Solutions Like Never Experienced Before
        </h2>
        <p className="text-gray-600 mb-4">
          Visvasa Home And VisvasaHome is a technology-driven platform that connects customers with trusted, verified
          professionals for a wide range of home and lifestyle services.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is simple: to simplify urban living by delivering high-quality, transparent, and dependable
          services every single time.
        </p>
        <p className="text-gray-700 font-semibold">Founder & CEO: Kundal Mittal</p>
        <p className="text-gray-600">
          VisvasaHome was founded by Kundal Mittal, an entrepreneur passionate about building a trustworthy ecosystem
          for home services in India.
        </p>
      </section>

      {/* INDIA CONSUMER SERVICES */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-2xl font-bold text-center mb-4">India Consumer Services</h2>
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-10">
          Visvasa Home currently operates across key cities in India.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Our Services Include</h3>
            <p className="text-sm text-gray-600">
              Insta Help<br />Cleaning & Pest Control<br />Home Repair & Maintenance<br />Skilled contractors
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow border-2 border-blue-500">
            <h3 className="font-semibold mb-2">VODGRI</h3>
            <p className="text-sm text-gray-600">
              Food for street dogs and home pets — young and old.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-2">International Presence</h3>
            <p className="text-sm text-gray-600">
              Visvasa Home is expanding beyond India.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERS */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold underline decoration-blue-500 mb-2">
          VH’s Leaders & Family Member
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { name: "Kunal Mittal", linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
            { name: "Mukesh Choudary", linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
            { name: "Kushagra Mittal", linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
            { name: "Sanjay Mittal", linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
          ].map((member, i) => (
            <div key={i}>
              {/* SINGLE IMAGE ONLY */}
              <Image
                src="/images/same.png"
                alt={member.name}
                width={200}
                height={260}
                className="mx-auto"
              />

              <p className="font-semibold mt-2">{member.name}</p>
              <p className="text-sm text-gray-500">Founder / CHRO</p>

              {/* SOCIAL LINKS */}
              <div className="flex justify-center gap-3 mt-2">
                <a href={member.linkedin} target="_blank">
                  <Image src="/linkedin.png" alt="linkedin" width={16} height={16} />
                </a>
                <a href={member.twitter} target="_blank">
                  <Image src="/x.png" alt="twitter" width={16} height={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <p className="italic text-gray-500">For media queries contact: info@VisvasaHomes.com</p>
        <p className="text-gray-600 font-semibold mt-4">
          You Could be a part of our journey. Interested?
        </p>
        <button className="mt-6 bg-black text-white px-10 py-3 rounded">
          Apply now
        </button>
      </section>

      <Footer />
    </div>
  );
}
