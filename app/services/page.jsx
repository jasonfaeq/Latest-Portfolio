"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive and high-performing websites with the most modern of technologies to ensure compatibility with most devices and gadgets.",
    href: "",
  },
  {
    num: "02",
    title: "UX/UI Design",
    description:
      "Creating intuitive and visually appealing animated user interfaces that enhance user experience and engagement and have easier access as well.",
    href: "",
  },
  {
    num: "03",
    title: "Video Editing",
    description:
      "I love crafting compelling video content with professional editing techniques to captivate people and whatever set audience I am targeting.",
    href: "",
  },
  {
    num: "04",
    title: "Data Analysis",
    description:
      "A passion for analyzing and interpreting complex data sets to drive informed decision-making and strategic planning.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold  group-hover:text-accent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-white/60">{service.description}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
