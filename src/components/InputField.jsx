import React from "react";

export default function InputField({ label, type, id, required = false, refr, isWarning = false }) {
  const isMessage = id === "message";

  const baseClass =
    "block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg appearance-none text-white focus:outline-none focus:ring-0 peer border-2";
  const baseLabelClass = `absolute text-sm duration-300 text-gray-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus:px-1 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`;

  const labelClass = `${baseLabelClass} ${isWarning ? "text-red-300 peer-focus:text-red-500" : ""}`;
  const inputClass = `${baseClass} ${isWarning ? "border-red-500 focus:border-red-500" : "border-gray-600 focus:border-blue-500"}`;

  return (
    <div className="relative">
      {!isMessage && <input type={type} id={id} className={inputClass} placeholder=" " required={required} ref={refr} />}
      {isMessage && <textarea id={id} rows="2" className={inputClass} placeholder="" required={required} ref={refr}></textarea>}
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </div>
  );
}
