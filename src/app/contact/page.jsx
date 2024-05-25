import React from "react";

function inputField({ label, type, id, required = false }) {
  const isMessage = id === "message";
  return (
    <div class="relative">
      {!isMessage && (
        <input
          type={type}
          id={id}
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-600 appearance-none text-white focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required={required}
        />
      )}
      {isMessage && (
        <textarea
          id={id}
          rows="2"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-600 appearance-none text-white focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          placeholder=""
          required={required}
        ></textarea>
      )}
      <label
        for={id}
        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus:px-1 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
}

export default function page() {
  return (
    <div class="mt-32 flex justify-center items-center">
      <div class="md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="md:w-11/12">
          <h1 class="text-3xl">Want to chat?</h1>
          <p class="text-lg my-5 font-light leading-relaxed">
            Feel free to connect with me on these social platforms or send me a message through the form on the right!
          </p>
          <div class="flex items-center justify-start gap-2">
            <a href="https://www.linkedin.com/in/virajpatel4/" target="_blank">
              <i class="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a href="https://github.com/virajp4/" target="_blank">
              <i class="fa-brands fa-github fa-xl"></i>
            </a>
            <a href="https://twitter.com/viraj_patel4/" target="_blank">
              <i class="fa-brands fa-x-twitter fa-xl"></i>
            </a>
            <a href="https://www.instagram.com/viraj.patel4/" target="_blank">
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
          </div>
        </div>
        <form class="flex flex-col gap-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-3">
            {inputField({ label: "First Name *", type: "text", id: "firstName", required: true })}
            {inputField({ label: "Last Name", type: "text", id: "lastName" })}
          </div>
          {inputField({ label: "Email *", type: "email", id: "email", required: true })}
          {inputField({ label: "Message *", type: "text", id: "message", required: true })}
          <button
            type="button"
            class="sm:w-1/2 text-white focus:outline-none focus:ring-2 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-600 border-gray-700 transition-colors duration-150"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
