/*import React from "react";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional Harvest.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
    },
  ];

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] gap-7 flex flex-col min-h-screen py-4 justify-center">
        <div>
          <h1
            className={`text-[#23c686] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            About Us
          </h1>
          <p className="text-xl text-stone-600">
            Welcome to VIGGIEBidOut, your gateway to a transparent and equitable agricultural marketplace. Founded in 2024, we are dedicated to
            providing a dynamic and user-friendly platform for buyers and
            sellers to connect, explore, and transact in a secure and seamless
            environment.
          </p>
        </div>
        <div>
          <h3
            className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Mission
          </h3>
          <p className="text-xl text-stone-600">
            At VIGGIEBidOut, our mission is to transform the agricultural marketplace by empowering farmers and retailers with a transparent and equitable platform for buying and selling. We aim to eliminate intermediaries, ensure fair pricing through competitive bidding, and foster direct connections between farmers and buyers. By leveraging technology, we strive to create a sustainable and trustworthy ecosystem that supports the backbone of our economy—farmers.
          </p>
        </div>
        <div>
          <h3
            className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Values
          </h3>
          <ul className="list-inside">
            {values.map((element) => {
              return (
                <li className="text-xl text-stone-600 mb-2" key={element.id}>
                  <span className="text-black font-bold">{element.title}</span>:{" "}
                  {element.description}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3
            className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Story
          </h3>
          <p className="text-xl text-stone-600">
          Founded by the dedicated team at KLE Technological University, VIGGIEBidOut was created to bridge the gap between farmers and retailers, ensuring fair and transparent transactions. With a deep understanding of the agricultural challenges, our team is committed to delivering a platform that empowers farmers, eliminates intermediaries, and provides an exceptional marketplace experience for users.
          </p>
        </div>
        <div>
          <h3
            className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Join Us
          </h3>
          <p className="text-xl text-stone-600">
          Whether you're a farmer looking to sell your crops, a retailer seeking fresh produce, or simply exploring opportunities, VIGGIEBidOut invites you to join our growing community of agricultural innovators. Discover fair pricing, build valuable connections, and experience the empowerment of a transparent and competitive marketplace.
          </p>
        </div>
        <div>
          <p className="text-[#23c686] text-xl font-bold mb-3">
            Thank you for choosing VIGGIEBidOut. We are excited to be a part of your journey toward transparent and fair agricultural trading!
          </p>
        </div>
      </section>
    </>
  );
};

export default About; */ 

import React from "react";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional Harvest.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
    },
  ];

  return (
    <section className="w-full px-8 py-16 bg-gradient-to-b from-white to-green-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to VIGGIEBidOut, your gateway to a transparent and equitable
          agricultural marketplace. Founded in 2024, we are dedicated to
          providing a dynamic and user-friendly platform for buyers and sellers
          to connect, explore, and transact in a secure and seamless environment.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          At VIGGIEBidOut, our mission is to transform the agricultural
          marketplace by empowering farmers and retailers with a transparent and
          equitable platform for buying and selling. We aim to eliminate
          intermediaries, ensure fair pricing through competitive bidding, and
          foster direct connections between farmers and buyers. By leveraging
          technology, we strive to create a sustainable and trustworthy ecosystem
          that supports the backbone of our economy—farmers.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((element) => (
            <li
              key={element.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {element.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {element.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Story</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Founded by the dedicated team at KLE Technological University,
          VIGGIEBidOut was created to bridge the gap between farmers and
          retailers, ensuring fair and transparent transactions. With a deep
          understanding of the agricultural challenges, our team is committed to
          delivering a platform that empowers farmers, eliminates intermediaries,
          and provides an exceptional marketplace experience for users.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Join Us</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Whether you're a farmer looking to sell your crops, a retailer seeking
          fresh produce, or simply exploring opportunities, VIGGIEBidOut invites
          you to join our growing community of agricultural innovators. Discover
          fair pricing, build valuable connections, and experience the
          empowerment of a transparent and competitive marketplace.
        </p>
      </div>

      <div className="text-center">
        <p className="text-lg font-bold text-green-600">
          Thank you for choosing VIGGIEBidOut. We are excited to be a part of
          your journey toward transparent and fair agricultural trading!
        </p>
      </div>
    </section>
  );
};

export default About;
