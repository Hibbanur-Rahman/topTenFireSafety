import { Mail, Phone, ChevronDown, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#252b42] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-sm mb-4">Copyright © 2020 Nexcent ltd.</p>
              <p className="text-sm mb-6">All rights reserved</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Stay up to date</h4>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-700 border-gray-600 text-white rounded-r-none"
                />
                <Button className="bg-gray-600 hover:bg-gray-500 rounded-l-none">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33301 10H16.6663"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6663 5L16.6663 10L11.6663 15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
