import Image from "next/image";
import myImage from "@/assets/other/me.jpg";

export default function HomeHero() {
  return (
    <div className="font-light h-52 md:h-48 lg:h-60 xl:h-96 my-2 flex flex-col justify-center md:flex-row md:items-center md:justify-between gap-10">
      <div className="text-xl lg:text-2xl">
        Viraj Patel,
        <span className="opacity-50">
          {" "}
          software engineer currently <br className="hidden xl:block" /> enhancing slides at{" "}
        </span>
        Alai (YC W24).
      </div>
      <div className="hidden md:block w-[400px] xl:w-[500px] border border-white border-opacity-50 hover:border-opacity-100 ease-in transition-all duration-400 p-2 rounded-lg">
        <Image src={myImage} className="rounded-md md:h-1/2" alt="Me" />
      </div>
    </div>
  );
}
