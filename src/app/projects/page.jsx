"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import projects from "@/components/ProjectList";
import WorkCard from "@/components/WorkCard";

const TabContent = ({ value }) => {
  let proj = projects;
  const ignored = ["fullStack", "python", "openSource"];
  if (value !== "all") {
    proj = proj.filter((project) => project.class.includes(value));
  } else {
    proj = proj.filter((project) => ignored.every((i) => !project.class.includes(i)));
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2 mt-10">
      {proj.map((project, idx) => (
        <WorkCard key={idx} {...project} />
      ))}
    </div>
  );
};

export default function page() {
  return (
    <div className="mt-28 flex flex-col justify-center items-center gap-10">
      <div
        className="mx-10 my-2 flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="text-center">
          <h1 className="text-2xl mb-2">
            Just when I was wondering when you’d visit this page, here you are {`:)`}
          </h1>
          <h5 className="text-xl">Take a look at most of my projects below.</h5>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Tabs
          defaultValue="fullStack"
          className="w-full flex items-center justify-center flex-col"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <TabsList>
            <TabsTrigger value="fullStack">Fullstack</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="openSource">Open Source</TabsTrigger>
            <TabsTrigger value="all">Basic</TabsTrigger>
          </TabsList>
          <TabsContent value="fullStack">
            <TabContent value="fullStack" />
          </TabsContent>
          <TabsContent value="python">
            <TabContent value="python" />
          </TabsContent>
          <TabsContent value="openSource">
            <TabContent value="openSource" />
          </TabsContent>
          <TabsContent value="all">
            <TabContent value="all" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
