import GitHubCalendar from "react-github-calendar";

export default function GithubCalendars() {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div className="w-full hidden md:flex md:justify-start md:items-center text-wrap">
        <GitHubCalendar
          username="virajp4-alai"
          blockSize={10}
          hideColorLegend
          hideTotalCount
          hideMonthLabels
        />
      </div>
      <div className="w-full hidden sm:flex sm:justify-start sm:items-center md:hidden lg:hidden text-wrap">
        <GitHubCalendar
          username="virajp4-alai"
          blockSize={8}
          hideColorLegend
          hideTotalCount
          hideMonthLabels
        />
      </div>
      <div className="w-full flex justify-start items-center sm:hidden md:hidden lg:hidden text-wrap">
        <GitHubCalendar
          username="virajp4-alai"
          blockSize={6}
          hideColorLegend
          hideTotalCount
          hideMonthLabels
        />
      </div>
    </div>
  );
}
