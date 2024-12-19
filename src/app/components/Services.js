"use client";

import { useRef, useState, useEffect } from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

const services = [
  {
    id: 1,
    title: "Haircuts",
    description: "Precision cuts tailored to your style.",
    icon: "/icons/haircut.png", // Replace with real icons
  },
  {
    id: 2,
    title: "Styling",
    description: "Elegant styles for every occasion.",
    icon: "/icons/styling.png",
  },
  {
    id: 3,
    title: "Spa Treatments",
    description: "Relax and rejuvenate with our premium spa services.",
    icon: "/icons/spa.png",
  },
  {
    id: 4,
    title: "Beard Trim",
    description: "Get the perfect beard trim and maintenance.",
    icon: "/icons/beard.png",
  },
  {
    id: 5,
    title: "Hair Coloring",
    description: "Express yourself with vibrant hair colors.",
    icon: "/icons/coloring.png",
  },
];

export default function Services() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Check scroll position for arrow visibility
  const checkScroll = () => {
    const { current } = scrollRef;
    if (current) {
      setShowLeftArrow(current.scrollLeft > 0);
      setShowRightArrow(
        current.scrollLeft < current.scrollWidth - current.clientWidth
      );
    }
  };

  // Handle scrolling when clicking arrows
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      checkScroll();
      current.addEventListener("scroll", checkScroll);
      return () => current.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <section className="py-16 bg-brand-light relative">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-brand-dark mb-8 text-center">
          Our Services
        </h2>

        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 p-3 rounded-full bg-white shadow-lg transform -translate-y-1/2 z-10 hover:bg-gray-200 transition"
          >
            <AiOutlineLeft size={24} className="text-brand-dark" />
          </button>
        )}

        {/* Scrollable Service Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar scroll-smooth space-x-6"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="min-w-[250px] w-[250px] flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-brand-dark">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 p-3 rounded-full bg-white shadow-lg transform -translate-y-1/2 z-10 hover:bg-gray-200 transition"
          >
            <AiOutlineRight size={24} className="text-brand-dark" />
          </button>
        )}
      </div>
    </section>
  );
}
