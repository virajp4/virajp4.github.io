"use client";
import GitHubCalendar from "react-github-calendar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

import projects from "@/components/ProjectList";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mt-20 sm:mt-0 md:mt-0 lg:mt-0">
      <div className="min-h-screen flex justify-center items-center" data-aos="fade-in" data-aos-duration="1500">
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
      <div className="flex justify-center items-center flex-col my-3">
        <div className="hidden lg:block">
          <GitHubCalendar username="virajp4" hideColorLegend labels={{ totalCount: `$ git push 'd {{count}} times in the last year.` }} />
        </div>
        <div className="hidden md:block lg:hidden">
          <GitHubCalendar
            username="virajp4"
            blockSize={10}
            hideColorLegend
            labels={{ totalCount: `$ git push 'd {{count}} times in the last year.` }}
          />
        </div>
        <div className="hidden sm:block md:hidden lg:hidden">
          <GitHubCalendar
            username="virajp4"
            blockSize={6}
            hideColorLegend
            labels={{ totalCount: `$ git push 'd {{count}} times in the last year.` }}
          />
        </div>
        <div className="block sm:hidden md:hidden lg:hidden">
          <GitHubCalendar
            username="virajp4"
            blockSize={4}
            hideColorLegend
            labels={{ totalCount: `$ git push 'd {{count}} times in the last year.` }}
            hideMonthLabels
          />
        </div>
      </div>
    </div>
  );
}
