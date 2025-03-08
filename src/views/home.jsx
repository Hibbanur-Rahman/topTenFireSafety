import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroImg from "@/assets/images/hero-cover.jpg";
import EarthImg from "@/assets/images/Earth.svg";
import {
  MessageSquare,
  Building2,
  Globe,
  Star,
  StarHalf,
  Video,
} from "lucide-react";
import { productCategories } from "@/lib/data";
import ProductCarousel from "@/components/productCarousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactUsImg from "@/assets/images/contact-us-img.png";
import heroVideo from "@/assets/videos/hero-section-video.mp4";
import clientImg1 from '@/assets/images/client-1.jpeg';
import clientImg2 from '@/assets/images/client-2.png';
import clientImg3 from '@/assets/images/client-3.jpeg';
const Home = () => {
  const services = [
    {
      title: "Second Opinion",
      icon: <MessageSquare className="h-12 w-12 text-white" />,
      description:
        "When facing a serious, life-changing illness, we understand the critical importance of obtaining expert advices.",
    },
    {
      title: "Treatment",
      icon: <Building2 className="h-12 w-12 text-white" />,
      description:
        "Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States.",
    },
    {
      title: "Global Plans",
      icon: <Globe className="h-12 w-12 text-white" />,
      description:
        "Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Client 1",
      image: clientImg1,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Client 2",
      image:clientImg2,
      rating: 4,
    },
    {
      id: 3,
      name: "Client 3",
      image: clientImg3,
      rating: 4.5,
    },
  ];

  return (
    <main className="min-h-screen w-full ">
      <section className="relative h-[400px] md:h-[90vh] flex items-center justify-center text-center w-full overflow-hidden">
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
      <section className="py-16 px-4 max-w-7xl mx-auto mt-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              About Us <span className="text-[#d32f2f]">|</span> Who We Are
            </h2>

            <p className="text-[#83868a] mt-6">
              At Top Ten Fire Safety, we pride ourselves on our extensive
              expertise in testing and manufacturing a comprehensive array of
              fire fighting equipment and systems. Our commitment to excellence
              drives us to continually refine our products to better serve our
              customers and address the unique challenges they face.
            </p>
            <p className="text-[#83868a] mt-1">
              Fire Safety Equipment – Top ten Fire safety Services will be a
              leading fire safety and security services providing a quality
              service to our customers. We will strive to be the best in the
              industry. We will deliver the best service to our customers and
              exceed their expectations.
            </p>
            <p className="text-[#83868a] mt-1">
              Our product line includes a diverse selection of Fire
              Extinguishers, designed for various applications, Special
              Application Extinguishers, state-of-the-art In-Panel Suppression
              Systems, Total Flooding Systems, Wet Chemical Based Kitchen Fire
              Suppression Systems, Hydrant Systems, and other advanced fire
              fighting technologies.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <img
                src={EarthImg}
                alt="Globe illustration"
                width={256}
                height={256}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
          <p className="text-center text-[#83868a] mb-12 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-[#d32f2f] text-white rounded-lg overflow-hidden border-none"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm">{service.description}</p>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 mt-auto bg-transparent"
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Second row of services (duplicated in the image) */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {services.map((service, index) => (
              <Card
                key={index + 3}
                className="bg-[#d32f2f] text-white rounded-lg overflow-hidden border-none"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm">{service.description}</p>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 mt-auto bg-transparent"
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#d32f2f] mb-2">
            Our Products
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="space-y-16">
          {productCategories.map((category) => (
            <section key={category.id} className="space-y-6">
              <h2 className="text-2xl font-semibold text-center text-[#d32f2f]">
                {category.name}
              </h2>
              <ProductCarousel products={category.products} />
            </section>
          ))}
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#d32f2f] mb-2">
              Our Clients Say
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-8 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border border-gray-300">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={120}
                    height={120}
                    className="object-cover "
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
                <div className="flex text-yellow-400 mt-2">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <StarHalf className="w-5 h-5 fill-current" />
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#d32f2f] mb-2">
              Make An Appointment
            </h2>
            <p className="text-gray-500">Request a free quote</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src={contactUsImg}
                alt="People looking at laptop"
                className="object-cover w-full h-[350px]"
              />
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-50"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-gray-50"
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Write your Heading"
                  className="bg-gray-50"
                />
                <Textarea
                  placeholder="Write your Message"
                  className="bg-gray-50 min-h-[150px]"
                />
                <Button className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white">
                  Send
                </Button>
              </form>
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
                <p className="text-gray-800">Gachibowli, hyderabad,</p>
                <p className="text-gray-800">Telangana, 500032</p>
              </div>

              <div>
                <p className="text-gray-600 mb-2">Head Office</p>
                <p className="text-gray-800">Gachibowli, hyderabad,</p>
                <p className="text-gray-800">Telangana, 500032</p>
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

export default Home;
