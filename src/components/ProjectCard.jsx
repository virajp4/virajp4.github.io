import { Badge } from "@/components/ui/badge";

import Image from "next/image";

export default function ProjectCard({ name, description, image, github, website, stack }) {
  return (
    <div className="p-0.5 z-10 overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
      <div className="bg-black p-1.5 h-full">
        <Image src={image} className="mb-5" alt={name} />
        <div className="flex flex-col gap-2">
          <div className="text-3xl flex items-center gap-2">
            <span className="underline underline-offset-8 leading-normal cursor-default">{name}</span>
            {github && (
              <span>
                <a href={github} target="_blank">
                  <i className="fa-brands fa-github fa-xs hover:text-gray-300 transition-all duration-150 ease-in-out"></i>
                </a>
              </span>
            )}
            {website && (
              <a href={website} target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square fa-xs hover:text-gray-300 transition-all duration-150 ease-in-out"></i>
              </a>
            )}
          </div>
          <p className="mt-5 text-lg leading-normal cursor-default">{description}</p>
        </div>
        <div className="flex gap-1 mt-2 flex-wrap">
          {stack.map((skill, idx) => (
            <Badge key={idx} variant="secondary" className={"font-normal cursor-default"}>
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
