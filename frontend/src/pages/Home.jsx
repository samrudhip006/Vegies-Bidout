/* import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
//import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
//import Leaderboard from "./home-sub-components/Leaderboard";
//import Spinner from "@/custom-components/Spinner";

const Home = () => {
  const howItWorks = [
    { title: "Post Items", description: "Auctioneer posts items for bidding." },
    { title: "Place Bids", description: "Bidders place bids on listed items." },
    {
      title: "Win Notification",
      description: "Highest bidder receives a winning email.",
    },
    {
      title: "Payment & Fees",
      description: "Bidder pays to payment details provided in mail.",
    },
  ];

  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
        <div>
          <p className="text-[#b3d955] font-bold text-xl mb-8">
            Transparency Leads to Your Victory
          </p>
          <h1
            className={`text-[#111] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            Transparent Auctions
          </h1>
          <h1
            className={`text-[#23c686] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            Be The Winner
          </h1>
          <div className="flex gap-4 my-8">
            {!isAuthenticated && (
              <>
                <Link
                  to="/sign-up"
                  className="bg-[#23c686] font-semibold hover:bg-[#1b9e67] rounded-md px-8 flex items-center py-2 text-white  transition-all duration-300"
                >
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="text-[#b3d955] bg-transparent border-2 border-[#b3d955] hover:bg-[#fff3fd] hover:text-[#fdba88] font-bold text-xl  rounded-md px-8 flex items-center py-2 transition-all duration-300"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">How it works</h3>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap w-full">
            {howItWorks.map((element) => {
              return (
                <div
                  key={element.title}
                  className="bg-white flex flex-col gap-2 p-2 rounded-md h-[96px] justify-center md:w-[48%] lg:w-[47%] 2xl:w-[24%] hover:shadow-md transition-all duration-300"
                >
                  <h5 className="font-bold">{element.title}</h5>
                  <p>{element.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; */ 

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Leaderboard from "./home-sub-components/Leaderboard";
import Spinner from "@/custom-components/Spinner.jsx";

const Home = () => {
  const howItWorks = [
    { title: "Post Items", description: "Auctioneer posts items for bidding." },
    { title: "Place Bids", description: "Bidders place bids on listed items." },
    {
      title: "Win Notification",
      description: "Highest bidder receives a winning email.",
    },
    {
      title: "Payment & Fees",
      description: "Bidder pays to payment details provided in mail.",
    },
  ];

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <section className="w-full px-6 py-16 lg:pl-[320px] flex flex-col min-h-screen bg-gradient-to-r from-green-100 via-white to-green-100">
      <div className="text-center mb-12">
        <p className="text-green-600 font-semibold text-lg mb-4 uppercase tracking-wide">
          Transparency Leads to Your Victory
        </p>
        <h1 className="text-gray-900 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
          Transparent Auctions
        </h1>
        <h2 className="text-green-700 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl mt-4">
          Be The Winner
        </h2>
      </div>

      <div className="flex justify-center gap-6 mb-12">
        {!isAuthenticated && (
          <>
            <Link
              to="/sign-up"
              className="bg-green-600 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:bg-green-500 hover:shadow-xl transition duration-300 text-lg"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="text-green-700 border-2 border-green-700 px-8 py-4 rounded-full font-medium hover:bg-green-50 hover:shadow-md transition duration-300 text-lg"
            >
              Login
            </Link>
          </>
        )}
      </div>

      <div className="max-w-5xl mx-auto">
        <h3 className="text-gray-900 text-2xl font-bold mb-8 sm:text-3xl text-center">
          How It Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step) => (
            <div
              key={step.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2 text-center"
            >
              <h5 className="font-extrabold text-green-700 mb-3 text-xl">
                {step.title}
              </h5>
              <p className="text-gray-600 text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div> 
      <FeaturedAuctions />
      <UpcomingAuctions />
      <Leaderboard />
    </section>
  );
};

export default Home;
