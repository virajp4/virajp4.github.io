import AlaiLogo from "@/assets/other/alai.png";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
  return (
    <div className="flex flex-col gap-4" id="work">
      <div className="text-lg">Work</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <WorkCard title="Alai" image={AlaiLogo} link="/alai" />
      </div>
    </div>
  );
}

function WorkCard({ title, image, link }) {
  return (
    <Link href={link} className="flex flex-col gap-2.5 text-lg group">
      <Image
        src={image}
        width="500"
        alt={title}
        className="opacity-75 group-hover:opacity-100 border border-white border-opacity-30 group-hover:border-opacity-50 ease-in transition-all duration-400 p-8 md:p-12 lg:p-16 rounded-md"
      />
      <div className="opacity-55 group-hover:opacity-100 ease-in transition-all duration-400">
        {title}
      </div>
    </Link>
  );
}
