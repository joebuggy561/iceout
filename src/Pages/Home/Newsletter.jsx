import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { supabase } from "../supabaseClient"; // Make sure you create this file

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    const { data, error } = await supabase
      .from("newsletter") // Your Supabase table name
      .insert([{ email }]);

    if (error) {
      console.error(error);
      setMessage("Failed to subscribe. Try again!");
    } else {
      setMessage("Thanks for subscribing!");
      setEmail(""); // clear input
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-gray-600 rounded-2xl overflow-hidden">
        <div className="relative px-6 md:px-16 py-16 md:py-24">
          {/* Decorative background */}
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-700 clip-path-slant hidden md:block" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left content */}
            <div className="text-white max-w-lg text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
                Subscribe to the newsletter
              </h2>
              <p className="text-gray-200 text-sm sm:text-base">
                Get the latest updates and alerts directly from us.
              </p>
            </div>

            {/* Right content */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 w-full sm:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-gray-900 placeholder:text-gray-700 placeholder:text-sm sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
              />

              <button
                type="submit"
                className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl flex items-center justify-center gap-2 hover:bg-gray-900 transition"
              >
                <span>Subscribe</span>
                <HiArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Message */}
          {message && (
            <p className="mt-4 text-center text-sm text-white">{message}</p>
          )}
        </div>
      </div>

      {/* Clip-path style */}
      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0 100%);
          }
        `}
      </style>
    </section>
  );
};

export default Newsletter;

