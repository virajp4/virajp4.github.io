"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import projects from "@/components/ProjectList";
import ProjectCard from "@/components/ProjectCard";

const TabContent = ({ value }) => {
  let proj = projects.filter((project) => project.class === value);
  if (value == "all") proj = projects;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2 mt-10">
      {proj.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
};

export default function page() {
  return (
    <div className="mt-28 flex flex-col justify-center items-center gap-10">
      <div className="mx-10 my-2 flex-col items-center justify-center" data-aos="fade-down" data-aos-duration="800">
        <div className="text-center">
          <h1 className="text-2xl mb-2">Just when I was wondering when you’d visit this page, here you are {`:)`}</h1>
          <h5 className="text-xl">Take a look at most of my projects below.</h5>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col" data-aos="fade-in" data-aos-duration="800">
        <Tabs defaultValue="featured" className="w-full flex items-center justify-center flex-col">
          <TabsList>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
          <TabsContent value="featured">
            <TabContent value="featured" />
          </TabsContent>
          <TabsContent value="all">
            <TabContent value="all" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
