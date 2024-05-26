import projects from "@/components/ProjectList";
import ProjectCard from "@/components/ProjectCard";

export default function page() {
  return (
    <div className="mt-28 flex flex-col justify-center items-center gap-10">
      <div className="mx-10 my-2 flex-col items-center justify-center" data-aos="fade-down" data-aos-duration="800">
        <div className="text-center">
          <h1 className="text-2xl mb-2">Just when I was wondering when you’d visit this page, here you are {`:)`}</h1>
          <h5 className="text-xl">Take a look at most of my projects below.</h5>
        </div>
      </div>
      <div className="flex justify-center items-center" data-aos="fade-in" data-aos-duration="800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
