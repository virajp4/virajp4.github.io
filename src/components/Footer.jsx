export default function Footer() {
  return (
    <section className="max-w-screen-xl mx-auto w-11/12 xl:w-full my-6 px-[30px] md:px-[25px] flex flex-col justify-between items-start gap-2">
      <div className="text-xl">
        <h5>VIRAJ PATEL</h5>
      </div>
      <div className="flex justify-start items-center gap-2">
        <a className="text-white hover:text-gray-300 transition-all duration-150 ease-in" href="https://www.linkedin.com/in/virajpatel4/" target="_blank">
          <i className="fa-brands fa-linkedin-in fa-xl"></i>
        </a>
        <a className="text-white hover:text-gray-300 transition-all duration-150 ease-in" href="https://github.com/virajp4/" target="_blank">
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        <a className="text-white hover:text-gray-300 transition-all duration-150 ease-in" href="https://twitter.com/viraj_patel4/" target="_blank">
          <i className="fa-brands fa-x-twitter fa-xl"></i>
        </a>
        <a className="text-white hover:text-gray-300 transition-all duration-150 ease-in" href="https://www.instagram.com/viraj.patel4/" target="_blank">
          <i className="fa-brands fa-instagram fa-xl"></i>
        </a>
      </div>
    </section>
  );
}
