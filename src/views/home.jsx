import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroImg from "@/assets/images/hero-cover.jpg";
import EarthImg from "@/assets/images/Earth.svg";
import {
  MessageSquare,
  Building2,
  Globe,
  Star,
  StarHalf,
  Video,
  Shield,
  CheckCircle,
  Award,
  FireExtinguisher,
  Droplets,
  ShieldAlert,
  ClipboardCheck,
  Bell,
  Users,
  ChevronRight,
  CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { productCategories } from "@/lib/data";
import ProductCarousel from "@/components/productCarousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactUsImg from "@/assets/images/contact-us-img.png";
import heroVideo from "@/assets/videos/hero-section-video.mp4";
import aboutUsVideo from "@/assets/videos/about-us-video.mp4";
import clientImg1 from "@/assets/images/client-1.jpeg";
import clientImg2 from "@/assets/images/client-2.png";
import clientImg3 from "@/assets/images/client-3.jpeg";
import clientImg4 from "@/assets/images/client-4.png";

import ItemImg6 from "@/assets/images/item-6.jpg";
import ItemImg5 from "@/assets/images/item-5.jpeg";
import ItemImg4 from "@/assets/images/item-4.jpeg";
import ItemImg3 from "@/assets/images/item-3.jpeg";
import ItemImg2 from "@/assets/images/extinguisher-item-9.jpeg";
import ItemImg1 from "@/assets/images/item-1.jpeg";
const Home = () => {
  const services = [
    {
      id: 1,
      title: "Fire Extinguisher Supply",
      description:
        "Complete range of fire extinguishers with professional installation, maintenance and refilling services for all commercial and industrial needs.",
      link: "/fire-extinguishers",
      img: ItemImg1,
      icon: <FireExtinguisher className="h-10 w-10 text-white" />,
      color: "from-red-600 to-red-700",
    },
    {
      id: 2,
      title: "Fire Hydrant System & AMC",
      description:
        "Professional installation and maintenance of fire hydrant systems with annual maintenance contracts ensuring your systems are always operational.",
      link: "/hydrant-systems",
      img: ItemImg2,
      icon: <Droplets className="h-10 w-10 text-white" />,
      color: "from-red-500 to-red-600",
    },
    {
      id: 3,
      title: "Fire Suppression System",
      description:
        "Advanced automatic fire suppression systems for specialized environments, including kitchens, server rooms, and industrial facilities.",
      link: "/suppression-systems",
      img: ItemImg3,
      icon: <ShieldAlert className="h-10 w-10 text-white" />,
      color: "from-red-600 to-red-700",
    },
    {
      id: 4,
      title: "Fire Safety Audit",
      description:
        "Comprehensive fire safety audits conducted by certified professionals to identify risks and ensure compliance with all safety regulations.",
      link: "/fire-audit",
      img: ItemImg4,
      icon: <ClipboardCheck className="h-10 w-10 text-white" />,
      color: "from-red-500 to-red-600",
    },
    {
      id: 5,
      title: "Fire Alarm & Smoke Detection",
      description:
        "State-of-the-art fire alarm and smoke detection systems with professional installation, testing and ongoing maintenance services.",
      link: "/alarm-systems",
      img: ItemImg5,
      icon: <Bell className="h-10 w-10 text-white" />,
      color: "from-red-600 to-red-700",
    },
    {
      id: 6,
      title: "Fire Fighting Training",
      description:
        "Expert-led fire safety training programs customized for your staff and facilities, including hands-on exercises and emergency response procedures.",
      link: "/training",
      img: ItemImg6,
      icon: <Users className="h-10 w-10 text-white" />,
      color: "from-red-500 to-red-600",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Aftab Ahmed",
      title: "Lightex Owner",
      image: clientImg1,
      rating: 5,
      text: "Impressed with the quality of your fire safety products! The fire extinguisher not only meets our safety standards but also exceeds expectations. Great job!",
    },
    {
      id: 2,
      name: "Robert Chen",
      title: "Building Supervisor",
      image: clientImg2,
      rating: 4.5,
      text: "Our experience with your business for fire safety products has been outstanding. The products' performance and your commitment to quality have made you our go-to supplier for safety equipment. Keep up the good work!",
    },
    {
      id: 3,

      name: "Sarah Williams",
      title: "Office Manager",
      image: clientImg4,
      rating: 5,
      text: "Your fire safety products have proven to be reliable and durable. It's reassuring to know that we have top-notch safety equipment in place. Thank you for your excellent service!",
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <section
        id="home"
        className="relative h-[400px] md:h-[90vh] flex items-center justify-center text-center w-full overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-fill w-full h-full brightness-50"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Top Ten Fire Safety Services
          </h1>
          <p className="text-lg mb-8 animate-fade-in-up delay-100">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Button className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white border-none">
              Get Quote Now
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="aboutUs"
        className="py-24 px-4 max-w-7xl mx-auto bg-gradient-to-b from-white to-gray-50"
      >
        <div className="text-center mb-16">
          <Badge className="mb-3 px-4 py-1 bg-red-100 text-[#d32f2f] hover:bg-red-100">
            Our Story
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-[#d32f2f]">Top Ten Fire Safety</span>
          </h2>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6">
              Our Mission <span className="text-[#d32f2f]">|</span> Excellence
              in Fire Safety
            </h3>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                At Top Ten Fire Safety, we pride ourselves on our extensive
                expertise in testing and manufacturing a comprehensive array of
                fire fighting equipment and systems. Our commitment to
                excellence drives us to continually refine our products to
                better serve our customers and address the unique challenges
                they face.
              </p>

              <div className="pl-4 border-l-4 border-[#d32f2f] py-2">
                <p className="text-gray-800 font-medium italic">
                  "We will deliver the best service to our customers and exceed
                  their expectations."
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Our product line includes a diverse selection of Fire
                Extinguishers, designed for various applications, Special
                Application Extinguishers, state-of-the-art In-Panel Suppression
                Systems, Total Flooding Systems, Wet Chemical Based Kitchen Fire
                Suppression Systems, Hydrant Systems, and other advanced fire
                fighting technologies.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#services">
                <Button className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-6 cursor-pointer">
                  Our Services
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  className="border-[#d32f2f] text-[#d32f2f] hover:bg-red-50"
                >
                  Contact Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-[#d32f2f]">25+</p>
                <p className="text-gray-600 text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-[#d32f2f]">1000+</p>
                <p className="text-gray-600 text-sm mt-1">Happy Clients</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-[#d32f2f]">100%</p>
                <p className="text-gray-600 text-sm mt-1">Quality Assured</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex justify-center">
              <div className="relative border-none">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=" object-cover w-full h-full border-none"
                >
                  <source src={aboutUsVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 p-8 bg-white rounded-xl shadow-md text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Leading Fire Safety Services
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Top Ten Fire Safety Services will be a leading fire safety and
            security services providing a quality service to our customers. We
            will strive to be the best in the industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4">
              Fire Extinguishers
            </Badge>
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4">
              Suppression Systems
            </Badge>
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4">
              Hydrant Systems
            </Badge>
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4">
              Kitchen Fire Safety
            </Badge>
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4">
              Special Applications
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Fire Safety Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Protecting lives and property with cutting-edge fire safety
              equipment, systems, and services backed by over 50 years of
              industry expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group pt-0"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* Background Image with Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${service.img})`,
                      // If you want to use a placeholder image when testing:
                      // backgroundImage: `url(/api/placeholder/800/400)`
                    }}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-50`}
                  ></div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg w-fit">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <Button className="bg-red-600 hover:bg-red-700 text-white border-none group-hover:pl-6 transition-all duration-300">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <span className="text-sm text-gray-400">
                      24/7 Available
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to action section with background image */}
          <div className="mt-16 relative rounded-xl overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/fire-safety-team.jpg)",
                // Or use a placeholder:
                // backgroundImage: 'url(/api/placeholder/1200/400)'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-90"></div>
            <div className="relative p-8 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Need a Custom Fire Safety Solution?
                </h3>
                <p className="text-white/80">
                  Contact our expert team today for a personalized consultation
                  and free safety assessment for your property.
                </p>
              </div>
              <a href="#contact">
                <Button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-6 text-lg font-semibold shadow-md border-none">
                  Request Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/**product sections */}
      <main id="products" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-2 px-4 py-1 bg-red-100 text-[#d32f2f] hover:bg-red-100">
            Fire Safety Solutions
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#d32f2f]">Premium</span> Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Protect what matters most with our comprehensive range of fire
            safety equipment. Designed for reliability when you need it most.
          </p>
        </div>

        <div className="space-y-8">
          {productCategories.map((category) => (
            <section key={category.id} className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 mb-3">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="w-16 h-1 bg-[#d32f2f] mx-auto"></div>
              </div>
              <ProductCarousel products={category.products} />
            </section>
          ))}
        </div>

        <div className="mt-24 bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need Help Choosing the Right Fire Safety Equipment?
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our fire safety experts are available to guide you through selecting
            the appropriate equipment for your needs.
          </p>
          <a href="#contact">
            <Button className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-8 py-2">
              Contact Our Team
            </Button>
          </a>
        </div>
      </main>

      {/* Testimonials Section */}
      <section
        id="testimonial"
        className="py-20 px-4 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Shield className="text-red-600 w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Trusted by Safety-Conscious Businesses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our fire safety equipment has helped countless businesses prevent
              disasters and maintain compliance with safety regulations.
            </p>
          </div>

          {/* Testimonial stats */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-3 gap-8 md:gap-16 text-center">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-red-600">500+</span>
                <span className="text-gray-600 mt-2">Businesses Protected</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-red-600">99%</span>
                <span className="text-gray-600 mt-2">Satisfaction Rate</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-red-600">24/7</span>
                <span className="text-gray-600 mt-2">Support Available</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-8 border-0 shadow-lg rounded-xl overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-100">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                <div className="flex text-yellow-400 mb-4">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <StarHalf className="w-5 h-5 fill-current" />
                  )}
                </div>

                <p className="text-gray-600 italic">"{testimonial.text}"</p>

                <div className="mt-6 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="ml-2 text-sm text-green-600">
                    Verified Purchase
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">
              Certified and Trusted By Industry Leaders
            </p>
            <div className="flex justify-center space-x-8 items-center">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-red-600" />
                <span className="ml-2 font-medium">NFPA Compliant</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 text-red-600" />
                <span className="ml-2 font-medium">UL Listed</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 text-red-600" />
                <span className="ml-2 font-medium">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <a href="#contact">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Fire Safety Consultation
              </button>
            </a>
            <p className="text-gray-500 mt-4">
              Free assessment for new customers
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section
        id="contact"
        className="py-24 px-4 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-3 px-4 py-1 bg-red-100 text-[#d32f2f] hover:bg-red-100">
              Book a Consultation
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Schedule Your{" "}
              <span className="text-[#d32f2f]">Free Consultation</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our fire safety experts are ready to assess your needs and provide
              personalized recommendations for your property
            </p>
            <div className="w-16 h-1 bg-[#d32f2f] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch bg-white rounded-xl overflow-hidden shadow-lg border">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-[#d32f2f]/10 z-10"></div>
              <img
                src={clientImg3}
                alt="Fire safety consultation"
                className="object-cover w-full h-full min-h-[400px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h3 className="text-white text-xl font-bold mb-4">
                  Why Choose Our Consultation?
                </h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center">
                    <div className="bg-[#d32f2f] rounded-full p-1 mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Expert assessment of your fire safety needs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#d32f2f] rounded-full p-1 mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Personalized equipment recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#d32f2f] rounded-full p-1 mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Compliance guidance for regulations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#d32f2f] rounded-full p-1 mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>No obligation quote and consultation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Request Your Free Quote
              </h3>

              <form className="space-y-5">
                <div className="space-y-5">
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <User className="h-5 w-5" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Your Full Name"
                      className="bg-gray-50 pl-10 py-6 border-gray-200 focus:border-[#d32f2f] focus:ring-[#d32f2f]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="bg-gray-50 pl-10 py-6 border-gray-200 focus:border-[#d32f2f] focus:ring-[#d32f2f]"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        className="bg-gray-50 pl-10 py-6 border-gray-200 focus:border-[#d32f2f] focus:ring-[#d32f2f]"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Subject"
                      className="bg-gray-50 pl-10 py-6 border-gray-200 focus:border-[#d32f2f] focus:ring-[#d32f2f]"
                    />
                  </div>

                  <div className="relative">
                    <Textarea
                      placeholder="Describe your requirements..."
                      className="bg-gray-50 min-h-[150px] border-gray-200 focus:border-[#d32f2f] focus:ring-[#d32f2f]"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <Button className="w-full md:w-auto bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-6 px-8 rounded-md flex items-center justify-center">
                    <span>Request Quote</span>
                  </Button>
                  <p className="text-gray-500 text-sm">
                    We'll respond within 24 hours
                  </p>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 text-sm">
                  Prefer to talk to someone directly?
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="h-4 w-4 text-[#d32f2f]" />
                  <span className="font-medium">+1 (800) FIRE-SAFE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#d32f2f]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quick Response</h3>
              <p className="text-gray-600">
                We respond to all consultation requests within 24 hours
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="h-8 w-8 text-[#d32f2f]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Book appointments that work with your busy schedule
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-[#d32f2f]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Advice</h3>
              <p className="text-gray-600">
                Get personalized recommendations from fire safety professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in touch</h3>
              <p className="text-gray-600 mb-2">Work and general inquiries</p>
              <p className="text-gray-800 font-semibold mb-6">+91-9691787839</p>

              <p className="text-gray-600 mb-2">Assistance hours:</p>
              <p className="text-gray-800 mb-1">Monday - Friday</p>
              <p className="text-gray-800">6 am to 8 pm EST</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Post Address</h3>
              <div className="mb-6">
                <p className="text-gray-600 mb-2">Service Office</p>
                <p className="text-gray-800">
                  Plot No. 150/ Part, Sy. No. 144, near Ramawath High School,
                  Subash Nagar, IDA Jeedimetla, Subhash Nagar, Jeedimetla,
                  Hyderabad,
                </p>
                <p className="text-gray-800">Telangana 500055</p>
              </div>

              <div>
                <p className="text-gray-600 mb-2">Head Office</p>
                <p className="text-gray-800">
                  15/F, KURLA INDUSTRIAL ESTATE, N.S.S. ROAD, GHATKOPAR (WEST),
                </p>
                <p className="text-gray-800">MUMBAI- 400 086</p>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="h-full w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243635.85043738657!2d78.24541182812501!3d17.420895682752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91d01854ba35%3A0x16ae35eff74f5794!2sTop%20Ten%20Fire%20Safety%20Services!5e0!3m2!1sen!2sin!4v1741201892808!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Check = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
export default Home;
