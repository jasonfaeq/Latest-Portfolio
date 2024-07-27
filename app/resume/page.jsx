"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPowerbi,
  SiVegas,
  SiAdobepremierepro,
  SiCplusplus,
} from "react-icons/si";
import { PiFileSqlLight, PiMicrosoftExcelLogo } from "react-icons/pi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

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
      fieldValue: "6+ years",
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
      location: " - Singapore, Singapore",
      duration: "Dec 2023 - Jun 2024",
      description:
        "• Developed and maintained web applications using modern frontend technologies.\n• Collaborated with design and backend teams to implement user-friendly and responsive interfaces.\n• Optimized web performance and improved user experience through code reviews and debugging.",
    },
    {
      company: "DNO Iraq AS",
      position: "Junior Environmental Analyst",
      location: " - Zakho, Iraq",
      duration: "Feb 2023 - Aug 2023",
      description:
        "• Conducted Environmental Impact Assessments (EIAs) and managed environmental monitoring programs.\n• Developed and implemented environmental management plans and compliance reports.\n• Automated data processing for environmental monitoring using Python and SQL, enhancing efficiency and accuracy.",
    },
    {
      company: "DNO Iraq AS",
      position: "Control Room Operator",
      location: " - Zakho, Iraq",
      duration: "Nov 2022 - Feb 2023",
      description:
        "• Monitored and controlled petroleum refining processes to ensure safety and efficiency.\n• Responded to operational alarms and anomalies, troubleshooting issues promptly.\n• Maintained detailed operational records and data logs for analysis.",
    },
    {
      company: "Gulf Keystone Petroleum",
      position: "Oil Field Operator",
      location: " - Sheikhan, Iraq",
      duration: "Jun 2022 - Sep 2022",
      description:
        "• Monitored well performance and conducted routine maintenance checks.\n• Collected and analyzed crude oil samples for quality control.\n• Assisted in optimizing operational procedures to enhance field productivity.",
    },
    {
      company: "AUK",
      position: "English & Math Teacher",
      location: " - Duhok, Iraq",
      duration: "May 2019 - Dec 2019",
      description:
        "• Provided one-on-one and group tutoring sessions to undergraduate students in English and Math, helping them to understand complex concepts, improve their skills, and achieve better academic results.\n• Custom learning plan for each student with proper constructive feedback.",
    },
    {
      company: "Asiacell",
      position: "Data Analyst",
      location: " - Baghdad, Iraq",
      duration: "Jul 2017 - Dec 2018",
      description:
        "• Sales prediction and improvement using various Python algorithms and scripts. \n• Designed a cloud-hosted app that saves new clients data using SQL, Azure, Python and basic HTML, CSS and JavaScript.\n• Performed regular data cleaning, standardization, and automation for large datasets.",
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
      institution: "HAW",
      fullInstName: "The Hamburg University of Applied Sciences",
      degree: "BSc in Information Engineering",
      location: " - Hamburg, Germany",
      duration: "Apr 2024 - Jan 2027",
      description:
        "Electrical engineering courses coupled with computer science.",
    },
    {
      institution: "PoLito",
      fullInstName: "Politecnico Di Torino",
      degree: "MSc in Environmental Engineering",
      location: " - Turin, Italy",
      duration: "Oct 2023 - Mar 2024",
      description:
        "Further research in geology, environment, and land engineering.",
    },
    {
      institution: "AUK",
      fullInstName: "The American University of Kurdistan",
      degree: "BSc in Petroleum Engineering",
      location: " - Duhok, Iraq",
      duration: "Jan 2019 - Dec 2022",
      description:
        "Gained theoretical and practical knowledge in various engineering subjects alongside using software such as MATLAB, Oracle Suite, etc.",
    },
    {
      institution: "Mutamayizeen",
      fullInstName: "Mutamayizeen Secondary School",
      degree: "International Baccalaureate Degree",
      location: " - Baghdad, Iraq",
      duration: "Oct 2012 - Aug 2015",
      description:
        "El-Mutamayizeen is a secondary school for distuinguished students in Baghdad.",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "With knowledge in many theoritical and technical topics and proficency in multiple technologies that concern web development, video editing, data analysis, etc, below is the list that highlights my skills:",
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
    {
      icon: <PiFileSqlLight />,
      name: "SQL",
    },
    {
      icon: <SiPowerbi />,
      name: "Microsoft PowerBI",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiVegas />,
      name: "Sony Vegas",
    },
    {
      icon: <SiAdobepremierepro />,
      name: "Adobe Premier Pro",
    },
    {
      icon: <SiCplusplus />,
      name: "C and C++",
    },
    {
      icon: <PiMicrosoftExcelLogo />,
      name: "Microsoft Excel",
    },
  ],
};

// Modal Component
function Modal({ isOpen, onClose, content }) {
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg relative"
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
}

const Resume = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer hover:bg-blue-500/70 transition-all duration-500"
                          onClick={() => handleItemClick(item)}
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer hover:bg-blue-500/70 transition-all duration-500"
                          onClick={() => handleItemClick(item)}
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
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px] px-4">
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
                </ScrollArea>
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
      <Modal
        isOpen={!!selectedItem}
        onClose={closeModal}
        content={
          selectedItem && (
            <>
              <h2 className="text-2xl font-bold text-gray-600">
                {selectedItem.position}
              </h2>{" "}
              <h2 className="text-2xl font-bold text-gray-600">
                {selectedItem.degree}
              </h2>
              <p className="text-gray-600">
                {selectedItem.company}
                {selectedItem.fullInstName}
                {selectedItem.location}
              </p>
              <p className="text-gray-600">{selectedItem.duration}</p>
              <p className="text-gray-600 whitespace-pre-line py-4">
                {selectedItem.description}
              </p>
            </>
          )
        }
      />
    </motion.div>
  );
};

export default Resume;
