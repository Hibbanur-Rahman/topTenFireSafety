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
import DownloadDialog from "./downloads";

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
      "aboutUs",
      "services",
      "products",
      "testimonial",
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
                   
                    {/* about */}
                    <li>
                      <a
                        href="#aboutUs"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        About
                      </a>
                    </li>
                     {/* service */}
                     <li>
                      <a
                        href="#services"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Services
                      </a>
                    </li>
                     {/* products */}
                     <li>
                      <a
                        href="#products"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Products
                      </a>
                    </li>
                    {/* gallery
                    <li>
                      <a
                        href="#home"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Gallery
                      </a>
                    </li> */}
                    {/* catalogue */}
                    <li>
                      <p
                        onClick={() => setIsOpenDownload(!isOpenDownload)}
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Catalogue
                      </p>
                    </li>
                    <DownloadDialog
                      open={isOpenDownload}
                      setOpen={setIsOpenDownload}
                    />
                    {/* Testimonial */}
                    <li>
                      <a
                        href="#testimonial"
                        className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg block"
                      >
                        Testimonial
                      </a>
                    </li>
                    {/* Contact Us */}
                    <li>
                      <a
                        href="#contact"
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
             
              {/* About */}
              <li className="relative group">
                <a
                  href="#aboutUs"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  About
                </a>
              </li>
               {/* Service */}
               <li className="relative group">
                <a
                  href="#services"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  Service
                </a>
              </li>
              {/* Product */}
              <li className="relative group">
                <a
                  href="#products"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  Product
                </a>
              </li>
              {/* Catalogue */}
              <li className="relative group cursor-pointer">
                <p
                  onClick={() => setIsOpenDownload(!isOpenDownload)}
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  Catalogue
                </p>
              </li>
              <DownloadDialog
                open={isOpenDownload}
                setOpen={setIsOpenDownload}
              />
              {/* Testimonial */}
              <li className="relative group">
                <a
                  href="#testimonial"
                  className="font-semibold hover:text-blue-800 hover:bg-gray-100 py-2 px-4 rounded-lg"
                >
                  Testimonial
                </a>
              </li>
              {/* Contact Us */}
              <li className="relative group">
                <a
                  href="#contact"
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
