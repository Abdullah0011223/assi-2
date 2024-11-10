"use client";

import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-6">Contact Us</h1>
      <p className="text-xl text-gray-700 text-center mb-8">
        If you have any questions or feedback, please reach out to us using the form below.
      </p>

      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          />
        </div>

        <div>
          <textarea
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg h-32"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-12 text-center text-gray-600">
        <p>Thank you for reaching out! We&apos;ll get back to you shortly.</p> {/* Escaped apostrophe */}
        <p>
          Or visit our{" "}
          <a href="/" className="text-indigo-600 hover:underline">
            homepage
          </a>{" "}
          to learn more about us.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;

