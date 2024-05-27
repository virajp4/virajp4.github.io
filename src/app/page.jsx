"use client";
import { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Button } from "@/components/ui/button";

import projects from "@/components/ProjectList";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mt-20 sm:mt-0 md:mt-0 lg:mt-0">
      <div className="min-h-screen flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000">
        <div className="w-[80%] sm:w-[70%] md:w-[60%] flex flex-col gap-7 text-lg">
          <h1 className="text-3xl">Bonjour! I’m Viraj,</h1>
          <div className="flex flex-col gap-5">
            <p className="block">Here’s my TLDR</p>
            <div className="flex flex-col gap-3.5">
              <p className="block">
                I am an undergraduate Computer Science student from S.R.M. Institute of Science and Techology, Chennai, India. My coursework has
                provided me with a strong foundation in Python, C++ and Software Engineering.
              </p>
              <p className="block">
                I’m passionate about Open Source development, and always on the lookout for solving real-world problems with the help of programming.
                I enjoy tackling LeetCode problems and working on new projects. Photography and gaming are amongst my other hobbies.
              </p>
              <p className="block">
                Currently, I’m seeking to attain an internship role in Software Engineering. <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-5 sm:mt-3 w-full">
        <div className="w-full hidden lg:flex lg:flex-col lg:justify-center lg:items-center text-wrap" data-aos="fade-up" data-aos-duration="600">
          <GitHubCalendar username="virajp4" hideColorLegend labels={{ totalCount: `$ git push 'd {{count}} times over the last year.` }} />
        </div>
        <div className="w-full hidden md:flex md:justify-center md:items-center lg:hidden text-wrap" data-aos="fade-up" data-aos-duration="600">
          <GitHubCalendar
            username="virajp4"
            blockSize={10}
            hideColorLegend
            labels={{ totalCount: `$ git push 'd {{count}} times over the last year.` }}
          />
        </div>
        <div
          className="w-full hidden sm:flex sm:justify-center sm:items-center md:hidden lg:hidden text-wrap"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <GitHubCalendar
            username="virajp4"
            blockSize={6}
            hideColorLegend
            labels={{ totalCount: `$ git push 'd {{count}} times over the last year.` }}
          />
        </div>
        <div className="w-full flex justify-center items-center sm:hidden md:hidden lg:hidden text-wrap" data-aos="fade-up" data-aos-duration="600">
          <GitHubCalendar
            username="virajp4"
            blockSize={3}
            hideColorLegend
            labels={{ totalCount: `$ git push 'd {{count}} times over the last year.` }}
            hideMonthLabels
          />
        </div>
      </div>
    </div>
  );
}
