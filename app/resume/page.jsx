"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/router";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Scroll } from "lucide-react";

const handleClick = () => {
  window.open("https://www.google.com", "_blank");
};

const about = {
  title: "About me",
  description:
    "Passionate and ambitious professional with a diverse background in petroleum engineering, environmental engineering, and information engineering. Currently pursuing a second bachelor's degree in Information Engineering at the Hamburg University of Applied Sciences, I am dedicated to expanding my knowledge and skills in the field of data science and Full-Stack development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jason Faeq",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+49) 177 3442439",
    },
    {
      fieldName: "Experience",
      fieldValue: "9+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "jason.faeq",
    },
    {
      fieldName: "Country",
      fieldValue: "Germany",
    },
    {
      fieldName: "Email",
      fieldValue: "jasonfaeq@gmail.com",
    },
    {
      fieldName: "Availability",
      fieldValue: "Available",
    },
    {
      fieldName: "Interests",
      fieldValue: "Cycling, Running",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Experienced in various fields including web development, environmental analysis, and data analysis. Here are some of the positions I've held:",
  items: [
    {
      company: "eFusion Technology",
      position: "Front-End Developer (Remote)",
      duration: "December 2023 - June 2024",
    },
    {
      company: "DNO Iraq AS",
      position: "Junior Environmental Analyst",
      duration: "Feb 2023 - Aug 2023",
    },
    {
      company: "DNO Iraq AS",
      position: "Control Room Operator",
      duration: "Nov 2022 - Feb 2023",
    },
    {
      company: "Gulf Keystone Petroleum",
      position: "Oil Field Operator",
      duration: "Jun 2022 - Sep 2022",
    },
    {
      company: "AUK",
      position: "English & Math Teacher",
      duration: "May 2019 - Dec 2019",
    },
    {
      company: "Asiacell",
      position: "Data Analyst",
      duration: "July 2017 - December 2018",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have pursued a diverse educational background, spanning various engineering disciplines. Here are the details of my academic journey:",
  items: [
    {
      institution: "HAW - Hamburg, Germany",
      degree: "BSc in Information Engineering",
      duration: "2024 - 2027",
      description:
        "Electrical engineering courses coupled with computer science.",
    },
    {
      institution: "PoliTO - Turin, Italy",
      degree: "MSc in Environmental Engineering",
      duration: "2023 - 2024",
      description:
        "Further research in geology, environment, and land engineering.",
    },
    {
      institution: "AUK - Duhok, Iraq",
      degree: "BSc in Petroleum Engineering",
      duration: "2018 - 2022",
      description:
        "Gained theoretical and practical knowledge in various engineering subjects alongside using software such as MATLAB, Oracle Suite, etc.",
    },
    {
      institution: "Mutamayizeen  - Baghdad",
      degree: "International Baccalaureate Degree",
      duration: "2012 - 2015",
      description:
        "Gained theoretical and practical knowledge in various engineering subjects alongside using software such as MATLAB, Oracle Suite, etc.",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum ab possimus saepe fugiat animi voluptatum accusantium tenetur perspiciatis at exercitationem.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">Biography</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience Front */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          onClick={handleClick}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer hover:bg-orange-800 transition-all duration-500 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Experience Back */}
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3>{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </h3>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
