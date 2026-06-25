export default function WorkHero({ company, description }) {
  return (
    <div className="h-72 lg:h-96 md:w-3/4 my-2 flex flex-col justify-center items-start gap-3">
      <div className="font-light text-xl lg:text-2xl flex flex-col gap-5">
        <span>At {company} —</span>
        <div className="flex flex-col gap-3 leading-snug">{description}</div>
      </div>
      <div className="opacity-60 font-extralight">
        For in-depth details of my work, please contact me.
      </div>
    </div>
  );
}
