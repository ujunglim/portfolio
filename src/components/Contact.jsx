import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to bg-gray-800 text-white w-full h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Please send your email here to get in touch with me!
          </p>
        </div>
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/58af8c76-dfe0-44b8-8778-3dc18121a8e5"
            method="POST"
            className="flex flex-col sm:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="form-input"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="form-input my-4"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="form-input"
            ></textarea>
            <button className="text-white bg-gradient-to-b from from-cyan-500 to to-blue-500 px-6 py-3 rounded-md my-8 mx-auto flex items-center hover:scale-105 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
