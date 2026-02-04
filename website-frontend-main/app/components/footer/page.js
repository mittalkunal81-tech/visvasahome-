"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-100 text-gray-500">

      {/* Top Footer */}
      <div className="mx-auto max-w-[1500px] px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* Company */}
        <div>
          <h4 className="font-semibold text-black mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/components/aboutus">About us</a></li>
            <li><a href="/terms">Terms & conditions</a></li>
            <li><a href="/privacy">Privacy policy</a></li>
           
          </ul>
        </div>

        {/* For Customers */}
        <div>
          <h4 className="font-semibold text-black mb-6">For Customers</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/reviews">VH's reviews</a></li>
            <li><a href="/categories">Categories near you</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>

        {/* For Partners */}
        <div>
          <h4 className="font-semibold text-black mb-6">For Partners</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/register-professional">Register as a professional</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-black mb-6">Social Links</h4>

          <div className="flex items-center gap-3 mb-6">
            <a href="https://facebook.com" className="w-10 h-10 border rounded-full flex items-center justify-center"><FaFacebookF /></a>
            <a href="https://twitter.com" className="w-10 h-10 border rounded-full flex items-center justify-center"><FaTwitter /></a>
            <a href="https://instagram.com/visvasa_home_" className="w-10 h-10 border rounded-full flex items-center justify-center"><FaInstagram /></a>
            <a href="https://linkedin.com/company/visvasahome" className="w-10 h-10 border rounded-full flex items-center justify-center"><FaLinkedinIn /></a>
          </div>

          <div className="space-y-4">
            <a href="https://apps.apple.com">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" className="h-12" />
            </a>
            <a href="https://play.google.com/store">
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="h-14" />
            </a>
          </div>
        </div>
      </div>

      

      {/* Bottom Bar */}
      <div className="mx-auto max-w-[1500px] px-12 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="VisvasaHomes" className="h-8" />
          
        </div>

        <div>
          © Copyright 2025 VisvasaHomes Technologies India Pvt. Ltd. All rights reserved.
        </div>
      </div>

    </footer>
  );
}
