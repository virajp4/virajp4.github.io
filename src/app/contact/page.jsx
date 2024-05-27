import ContactForm from "@/components/ContactForm";

export default function page() {
  return (
    <div className="mt-32 flex justify-center items-center">
      <div className="md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="md:w-11/12" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-3xl">Want to chat?</h1>
          <p className="text-lg my-5 font-light leading-relaxed">
            Feel free to connect with me on these social platforms or send me a message through the form on the right!
          </p>
          <div className="flex items-center justify-start gap-2">
            <a href="https://www.linkedin.com/in/virajpatel4/" target="_blank">
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a href="https://github.com/virajp4/" target="_blank">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a href="https://twitter.com/viraj_patel4/" target="_blank">
              <i className="fa-brands fa-x-twitter fa-xl"></i>
            </a>
            <a href="https://www.instagram.com/viraj.patel4/" target="_blank">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
