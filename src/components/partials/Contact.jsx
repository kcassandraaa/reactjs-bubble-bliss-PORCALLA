import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-pink-100 to-purple-100"
      >
        <div className="container mx-auto items-center justify-items-center">
          <h2 className="text-center font-bold text-3xl mb-2">
            Get Your{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text ">
              Milk Tea
            </span>{" "}
            Fix
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Have questions or want to share your favorite flavor? We'd love to
            hear from you!
          </p>

          <div className="bg-white p-8 w-[90%] lg:w-[60%] rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="">
                <label className="text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <div className="">
                <label className="text-gray-700 mb-4">Email Address</label>
                <input
                  type="text"
                  placeholder="jane@example.com"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
            </div>

            <div className="flex flex-col mt-5 ">
              <label className="text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-gray-700 mb-2">Your Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your favorite milk tea..."
                className="border border-gray-300 rounded-lg px-4 py-2"
              ></textarea>
            </div>

            <a
              href="#"
              className="bg-pink-500 text-white font-semibold w-full py-3 inline-block text-center rounded-md mt-8 hover:bg-pink-300 hover:text-pink-500 transition"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
