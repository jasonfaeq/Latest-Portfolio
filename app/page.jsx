import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import WordAnimation from "@/components/WordAnimation";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Photo Part */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
          {/* Text Part */}
          <div className="text-center xl:text-left order-2 xl:order-none w-[50%]">
            <h1 className="h1 mb-6">
              <span className="">A</span>
              <span>
                <WordAnimation /> <br />
                Engineer
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A humble quick learner with skills in programming and software,
              backed by studies in petroleum, information and environmental
              engineering.
            </p>

            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/JasonFaeqsResume.pdf"
                download="resume.pdf"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
