import Link from "next/link";
import Calendars from "@/components/Calendars";

export default function About() {
  return (
    <div className="flex flex-col gap-5" id="about">
      <div className="text-lg font-extralight">
        Computer Science graduate who loves building, breaking and fixing things as a hobby.
        <br />
        Trying to solve problems, one project at a time.
      </div>
      <Calendars />
      <div className="flex flex-col gap-3.5">
        <Experience
          company="Alai (YC W24)"
          title="Software Engineer"
          startDate="Sept 2024"
          endDate="Present"
          link="https://getalai.com"
        />
        <Experience
          company="Freelancer"
          title="Developer"
          startDate="Jan 2024"
          endDate="Aug 2024"
        />
        <Experience
          company="SIMS Hospitals"
          title="Web Developer"
          startDate="Sept 2023"
          endDate="Dec 2023"
        />
      </div>
    </div>
  );
}

function Experience({ company, title, startDate, endDate, link }) {
  return (
    <div className="flex flex-col text-md w-fit">
      {link ? (
        <Link
          href={link}
          className="font-medium hover:opacity-70 transition-all duration-250"
          target="_blank"
        >
          {company}
        </Link>
      ) : (
        <div className="font-medium">{company}</div>
      )}
      <div className="opacity-70 font-thin">
        {title} — {startDate} - {endDate}
      </div>
    </div>
  );
}
