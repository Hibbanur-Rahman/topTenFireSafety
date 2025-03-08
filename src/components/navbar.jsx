import { Button } from "@/components/ui/button";
import logo from "../assets/images/logo-1.jpg";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Mail, Phone, Clock, ChevronDown, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenDownload, setIsOpenDownload] = useState(false);

  // Function to handle dropdown toggle on hover
  const handleMouseEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (sectionId) => activeSection === sectionId;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = [
      "home",
      "about-manuu",
      "about-iclt",
      "about-manuu-law",
      "call-for-paper",
      "committee",
      "paper-submission",
      "important-dates",
      "registration-details",
      "contact",
    ];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      {/* *====== upper part ======
      <div
        id="upper-nav"
        className="w-full flex justify-center items-center border border-x-0 border-t-0 bg-white z-[50] relative"
      >
        <div className="md:w-10/12 w-full max-w-7xl flex md:flex-row flex-col md:justify-between items-center py-3">
          <div className="flex items-center">
            <img src={manuuLogo} alt="" className="md:w-[100px] w-[60px]" />
            <div className="h-[50px] w-[1px] bg-black mx-3"></div>
            <img src={springerLogo} className="md:w-[240px] w-[140px]" />
            <div className="h-[50px] w-[1px] bg-black mx-3 md:hidden flex"></div>

            <img
              src={birminghamLogo}
              alt=""
              className="md:hidden flex w-[60px]"
            />
          </div>
          <div className="rounded-2xl shadow-sm p-3 w-[250px] flex flex-col items-center border md:my-0 my-2">
            <p className="text-sm font-medium my-1">Conference Date</p>
            <p className="text-sm font-medium my-1">January 15-16, 2026</p>
            <div className="rounded-xl p-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700  transform hover:scale-105 transition-all shadow-lg hover:shadow-xl text-white font-medium flex items-center justify-center mt-2">
              HYBRID MODE
            </div>
          </div>
          <div className="md:flex hidden items-center">
            <div className="h-[50px] w-[1px] bg-black mx-3"></div>
            <img src={birminghamLogo} alt="" className="w-[100px]" />
          </div>
        </div>
      </div> */}
      {/**====== main navbar ========= */}
      <div
        className={`w-full bg-white shadow-md p-4 py-0 z-50 transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0" : "relative"
        }`}
      >
        <div className="md:w-11/12 max-w-7xl flex flex-row flex-wrap justify-between items-center mx-auto py-2">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-[60px] md:w-[60px] h-[60px] md:h-[60px]"
          />

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <button
                  variant="ghost"
                  onClick={() => setIsDrawerOpen(true)}
                  className="w-min"
                >
                  <FiMenu className="text-3xl" />
                </button>
              </DrawerTrigger>
              <DrawerContent
                className="w-64 p-4 bg-white shadow-lg m-0 h-full"
                onClose={() => setIsDrawerOpen(false)}
              >
                {/* Drawer Content */}
                <div className="flex flex-col gap-4">
                  <ul className="md:hidden flex flex-col space-y-2 mt-4">
                    {/* Home */}
                    <li>
                      <a
                        href="#home"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Home
                      </a>
                    </li>
                    {/* service */}
                    <li>
                      <a
                        href="#home"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Service
                      </a>
                    </li>
                    {/* about */}
                    <li>
                      <a
                        href="#home"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        About
                      </a>
                    </li>
                    {/* gallery */}
                    <li>
                      <a
                        href="#home"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Gallery
                      </a>
                    </li>
                    {/* catalogue */}
                    <li>
                      <a
                        href="#home"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Catalogue
                      </a>
                    </li>
                    {/* Testimonial */}
                    <li>
                      <a
                        href="#Testimonial"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Testimonial
                      </a>
                    </li>
                    {/* Contact Us */}
                    <li>
                      <a
                        href="#Contact Us"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <div className="flex items-center gap-[10px]">
                    <div className="bg-red-700 flex h-[45px] w-[45px] rounded-lg items-center justify-center ">
                      <PhoneCall className="text-white" />
                    </div>
                    <div className="">
                      <p>Call Us</p>
                      <p>+91-8125231812</p>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Desktop Menu */}
          <nav className="bg-white md:flex hidden">
            <ul className="flex space-x-4 items-center">
              {/* Home */}
              <li className="relative group">
                <a
                  href="#home"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  Home
                </a>
              </li>
              {/* Service */}
              <li className="relative group">
                <a
                  href="#Service"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  Service
                </a>
              </li>
              {/* About */}
              <li className="relative group">
                <a
                  href="#About"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  About
                </a>
              </li>
              {/* Product */}
              <li className="relative group">
                <a
                  href="#Product"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  Product
                </a>
              </li>
              {/* Catalogue */}
              <li className="relative group">
                <a
                  href="#Catalogue"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  Catalogue
                </a>
              </li>
              {/* Testimonial */}
              <li className="relative group">
                <a
                  href="#Testimonial"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  Testimonial
                </a>
              </li>
              {/* Contact Us */}
              <li className="relative group">
                <a
                  href="#Contact Us"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-[10px]">
            <div className="bg-red-700 flex h-[45px] w-[45px] rounded-lg items-center justify-center ">
              <PhoneCall className="text-white" />
            </div>
            <div className="">
              <p>Call Us</p>
              <p>+91-8125231812</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
