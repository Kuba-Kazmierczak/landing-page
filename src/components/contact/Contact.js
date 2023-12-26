import React from "react";
import "./Contact.css";

const Contact = () => {
  const inputStyle =
    "bg-transparent border-none shadow-2xl appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:shadow-outline drop-shadow-2xl backdrop-invert-0 bg-white/20 focus:animate-pulse focus:bg-white/80 focus:outline-none focus:scale-125 ease-in duration-300";
  return (
    <div className="contact text-center items-center justify-center flex">
      <form className="xs:w-full md:w-1/2 lg:w-1/3 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 xl:w-2.5/6 bg-black/20 bg-blur-lg">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="Name"
          >
            Name
          </label>
          <input className={inputStyle} id="Name" type="text" placeholder="" />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className={inputStyle}
            id="Email"
            type="email"
            placeholder=""
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-black text-lg font-bold mb-2"
            htmlFor="Email"
          >
            Phone
          </label>
          <input className={inputStyle} id="phone" type="text" placeholder="" />
        </div>
        <div className="mb-6">
          <label
            className="block text-black text-lg font-bold mb-2"
            htmlFor="Email"
          >
            Message
          </label>
          <textarea
            className={inputStyle}
            id="message"
            type="text"
            placeholder=""
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:ease-in hover:duration-300"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
