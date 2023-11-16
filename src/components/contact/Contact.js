import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="contact text-center items-center justify-center flex">
      <form class="xs:w-full md:w-1/2 lg:w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 xl:w-2/6backdrop-blur-sm bg-blend-luminosity">
        <div class="mb-4">
          <label class="block text-gray-700 text-lg font-bold mb-2" for="Name">
            Name
          </label>
          <input
            className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder=""
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-lg font-bold mb-2" for="Email">
            Email
          </label>
          <input
            className=" bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            type="email"
            placeholder=""
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-lg font-bold mb-2" for="Email">
            Phone
          </label>
          <input
            className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder=""
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-lg font-bold mb-2" for="Email">
            Message
          </label>
          <textarea
            className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder=""
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
