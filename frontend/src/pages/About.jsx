import React from "react";
import Title from "../components/Tittle";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people discover, explore, and purchase a wide
            range of products from the comfort of their homes.
          </p>
          <p>
            Forever was created with a vision to bring innovation into online
            shopping and transform the way people browse, discover, and buy
            products easily from the comfort of their homes.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence by providing a seamless online shopping
            experience.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-2xl-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards and customer expectations.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping becomes simple, convenient, and enjoyable for everyone.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-gray-600">Exceptional Customer Service:</b>
          <p>
            Our team of dedicated professionals is here to assist you every step
            of the way, ensuring your shopping experience is smooth and
            satisfying.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
