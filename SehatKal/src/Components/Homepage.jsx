import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative min-h-screen font-sans text-white">
      <div className="absolute inset-0 overflow-hidden z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10">
        <header className="relative z-10 flex justify-between items-center px-8 py-6 bg-pastel-purple rounded-b-xl">
          <h1 className="text-4xl font-semibold">Health & Fitness Tracker</h1>
        </header>

        <main className="relative z-10">
          <section className="text-center px-8 pt-16">
            <h2 className="text-5xl font-semibold text-pastel-teal mb-6">
              Stay Healthy, Stay Fit
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Track your steps, water intake, set fitness goals, and live a healthier life with our easy-to-use platform.
            </p>
          </section>

          <section
            id="carousel"
            className="px-8 mt-12"
            style={{ maxWidth: "100vw", margin: "0 " }}
          >
            <Slider {...settings}>
              <div className="relative h-[50vh]">
                <Link to="/about-us">
                  <img
                    src="./login111.png"
                    alt="Log Daily Steps"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <p className="text-2xl font-semibold">Log Daily Steps</p>
                  </div>
                </Link>
              </div>
              <div className="relative h-[50vh]">
                <Link to="/contact-page">
                  <img
                    src="./login.jpg"
                    alt="Track Water Intake"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <p className="text-2xl font-semibold">Track Water Intake</p>
                  </div>
                </Link>
              </div>
              <div className="relative h-[50vh]">
                <Link to="/signup">
                  <img
                    src="./lo.jpg"
                    alt="Set Fitness Goals"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <p className="text-2xl font-semibold">Set Fitness Goals</p>
                  </div>
                </Link>
              </div>
              <div className="relative h-[50vh]">
                <Link to="/analytics">
                  <img
                    src="./login.jpg"
                    alt="View Analytics"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100">
                    <p className="text-2xl font-semibold">View Analytics</p>
                  </div>
                </Link>
              </div>
            </Slider>
          </section>

          <section
            id="goals"
            className="mt-16 px-8 py-12 bg-pastel-blue rounded-lg shadow-xl text-center"
          >
            <h3 className="text-3xl font-semibold mb-4">Set & Achieve Your Fitness Goals</h3>
            <p className="text-lg mb-8">
              Whether you're aiming to walk more steps, drink more water, or improve your fitness, we help you track and achieve your goals.
            </p>
          </section>

          <section className="mt-16 px-8">
            <div className="relative h-72 bg-pastel-peach rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-center font-semibold text-xl">Fitness Tips & Motivation</p>
            </div>
          </section>

          <section
            id="statistics"
            className="mt-16 px-8 py-12 bg-gradient-to-r from-pastel-blue to-pastel-lavender rounded-lg text-center"
          >
            <h3 className="text-3xl font-semibold mb-4">Your Fitness Journey in Numbers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="h-40 bg-pastel-teal rounded-lg flex items-center justify-center shadow-lg">
                <p className="text-xl">10,000 Steps Walked</p>
              </div>
              <div className="h-40 bg-pastel-teal rounded-lg flex items-center justify-center shadow-lg">
                <p className="text-xl">3L+ Water Intake</p>
              </div>
              <div className="h-40 bg-pastel-teal rounded-lg flex items-center justify-center shadow-lg">
                <p className="text-xl">100+ Fitness Goals Achieved</p>
              </div>
              <div className="h-40 bg-pastel-teal rounded-lg flex items-center justify-center shadow-lg">
                <p className="text-xl">200+ Tips Shared</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 py-6 bg-pastel-purple text-center text-gray-500 rounded-t-xl">
          &copy; {new Date().getFullYear()} Health & Fitness Tracker. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
