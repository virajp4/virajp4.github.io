"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { set, z } from "zod";

import InputField from "@/components/InputField.jsx";

export default function ContactForm() {
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
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} ref={form} data-aos="fade-down" data-aos-duration="1000">
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
  );
}
