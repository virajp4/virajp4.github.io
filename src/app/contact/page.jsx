"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { set, z } from "zod";

import InputField from "@/components/InputField.jsx";

export default function page() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const message = useRef();
  const form = useRef();

  const [isSuccess, setIsSuccess] = useState(false);
  const [warnings, setWarnings] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setWarnings([]);

    const formData = {
      name: firstName.current.value + " " + lastName.current.value,
      email: email.current.value,
      message: message.current.value.trim(),
    };

    const formSchema = z.object({
      name: z.string().min(2, "First name is required"),
      email: z.string().email("Invalid email address"),
      message: z.string().min(1, "Message is required"),
    });

    try {
      formSchema.parse(formData);
      emailjs.send("service_virajp4", "template_default", formData, "Aavtdi8KNcns6SiNT").then(function (response) {
        form.current.reset();
        setIsSuccess(true);
      });
    } catch (error) {
      error.errors.forEach((err) => {
        setWarnings((prev) => [...prev, err.path[0]]);
        setIsSuccess(false);
      });
    }
  }

  return (
    <div className="mt-32 flex justify-center items-center">
      <div className="md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="md:w-11/12">
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
        <form className="flex flex-col gap-5" onSubmit={handleSubmit} ref={form}>
          {isSuccess && <div className="text-green-500 text-sm px-0.5">Message sent successfully!</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-3">
            <InputField label="First Name *" type="text" id="firstName" refr={firstName} isWarning={warnings.includes("name")} />
            <InputField label="Last Name" type="text" id="lastName" refr={lastName} />
          </div>
          <InputField label="Email *" type="email" id="email" refr={email} isWarning={warnings.includes("email")} />
          <InputField label="Message *" type="message" id="message" refr={message} isWarning={warnings.includes("message")} />
          <button
            type="submit"
            className="sm:w-1/2 text-white focus:outline-none focus:ring-2 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-600 border-gray-700 transition-colors duration-150"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
