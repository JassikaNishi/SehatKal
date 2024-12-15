import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          We'd love to hear from you. Feel free to reach out for any inquiries or feedback!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 lg:px-20 py-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Address:</span> VIT Vellore, Tamil Nadu, 632014, India
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Phone:</span> +91 98765*****
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Email:</span> SehatKal@gmail.com
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="#!" className="bg-blue-500 p-4 rounded-full text-white hover:bg-blue-400">
              <i className="fab fa-facebook-f">f</i>
            </a>
            <a href="#!" className="bg-blue-400 p-4 rounded-full text-white hover:bg-blue-300">
              <i className="fab fa-twitter">T</i>
            </a>
            <a href="#!" className="bg-blue-600 p-4 rounded-full text-white hover:bg-blue-500">
              <i className="fab fa-linkedin-in">Li</i>
            </a>
            <a href="#!" className="bg-pink-500 p-4 rounded-full text-white hover:bg-pink-400">
              <i className="fab fa-instagram">I</i>
            </a>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.987926395307!2d78.2151624!3d12.9900076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9f18ec8b29b7d%3A0x9d0a746c464f3702!2sVIT%20University%2C%20Vellore!5e0!3m2!1sen!2sin!4v1672533764897!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      <div className="bg-white p-10 lg:p-20 rounded-lg shadow-lg mx-8 lg:mx-20 mb-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
              placeholder="Email Address"
              required
            />
          </div>
          <textarea
            className="w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
