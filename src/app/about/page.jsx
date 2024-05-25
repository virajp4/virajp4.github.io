import Image from "next/image";
import myImage from "@/assets/other/me.jpg";

export default function About() {
  return (
    <div className="mt-32 w-full flex justify-center items-center">
      <div className="w-5/6 flex flex-col md:flex-row gap-10 mx-5">
        <div className="md:w-4/5 flex flex-col gap-6 order-2 md:order-1" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-3xl leading-normal">So, you want to know more about me?</h1>
          <div className="md:w-[85%] flex flex-col gap-3 text-lg">
            <p className="block">
              I am a Computer Science student who’s interested in Software and Full Stack Development. I’m also passionate about UI/UX design, being
              an infinite player, and Artificial Intelligence. I love learning new perspectives from different people, enriching my mind with
              different views & experiences.
            </p>
            <p className="block">
              As a young kid growing up in India, I was always fascinated by the world of computers and technology. I remember spending hours on my
              computer, playing games, and customizing my desktop with resource hungry apps. Which is why I decided to pursue Computer Science as my
              major.
            </p>
            <p className="block">
              I was introduced to programming in my high school, where I learnt the basics of progamming with the help of Java. I was fascinated by
              the fact that I could create something out of nothing, and that too with the help of a few lines of code. I was hooked. In my first year
              of college, I got to learn about C++ and Python, and I’ve been learning and developing my skills ever since.
            </p>
            <p className="block">
              With the help of amazing teachers like Andrew Ng and Colt Steele, I’ve been able to learn about Machine Learning and Full Stack
              Development. I’ve also been participating in Open Source events, like UPES Open Summer of Code, and contributing to open source projects
              to learn from the community.
            </p>
            <p className="block">
              Basically, my life currently revolves around learning new skills, and trying to make the world a better place with the help of
              technology.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center md:items-start order-1 md:order-2" data-aos="fade-down" data-aos-duration="1000">
          <Image src={myImage} className="w-2/3 md:w-full" alt="Thats me!!" />
        </div>
      </div>
    </div>
  );
}
