import React from "react";
import Image from "next/image";

const TestimonialOne = () => {
  return (
    <div className="max-w-screen-sm p-4 rounded-lg shadow-2xl bg-gray-200 cursor-default transition ease-in-out delay-500 duration-500 group-hover:text-red-500">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center space-y-4">
          <h4 className="text-3xl font-extrabold text-">UDAY ADHIKARI</h4>
          <p className="md:text-lg text-sm font-semibold mx-10">
            “I just wanted to share a quick note and let you know that you guys
            do a really good job. I&apos;m glad I decided to work with you. It's
            really great how easy your websites are to update and manage."
          </p>
        </div>
        <div className="transform scale-150">
          <Image src="/images/a.png" alt="" width="350px" height="650px" />
        </div>
      </div>
    </div>
  );
};
const TestimonialTwo = () => {
  return (
    <div className="max-w-screen-sm p-4 rounded-lg shadow-2xl bg-gray-200 cursor-default transition ease-in-out delay-500 duration-500 group-hover:text-red-500">
      <div className="flex flex-row-reverse justify-center">
        <div className="flex flex-col justify-center space-y-4">
          <h4 className="text-3xl font-extrabold text-">Aashish Rana Magar</h4>
          <p className="md:text-lg text-sm font-semibold mx-10">
            “I just wanted to share a quick note and let you know that you guys
            do a really good job. I'm glad I decided to work with you. It's
            really great how easy your websites are to update and manage."
          </p>
        </div>
        <div className="transform scale-150">
          <Image
            src="/images/Aashish.png"
            alt=""
            width="400px"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
};

function Testimonial() {
  return (
    <div className="mt-5 max-w-screen flex flex-col space-y-10">
      <div className="flex justify-end group transform transition ease-in-out duration-700 delay-500 translate-x-0 hover:scale-105 lg:hover:-translate-x-28">
        <TestimonialOne />
      </div>
      <div className="flex justify-start group transform transition ease-in-out duration-700 delay-500 translate-x-0 hover:scale-105 lg:hover:translate-x-28">
        <TestimonialTwo />
      </div>
    </div>
  );
}

export default Testimonial;