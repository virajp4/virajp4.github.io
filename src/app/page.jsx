'use client';
import projects from "@/components/ProjectList";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mt-28 sm:mt-12 md:mt-5 lg:mt-0">
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
                Check out some of my interesting projects below 👇
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center" data-aos="fade-in" data-aos-duration="800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-2">
          {projects.map((project, idx) => project.class === "featured" && <ProjectCard key={idx} {...project} />)}
        </div>
      </div>
    </div>
  );
}
