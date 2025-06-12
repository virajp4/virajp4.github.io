export default function WorkHero({ company, description }) {
  return (
    <div className="h-72 lg:h-96 md:w-1/2 my-2 flex flex-col justify-center items-start gap-3">
      <div className="font-light text-xl lg:text-2xl flex flex-col gap-7">
        <span>At {company} —</span>
        <span>{description}</span>
      </div>
      <div className="opacity-60 font-extralight">
        For in-depth details of my work, please contact me.
      </div>
    </div>
  );
}
