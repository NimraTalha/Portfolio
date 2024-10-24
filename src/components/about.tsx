"use client";  
import React from "react";
import Image from "next/image";
import finance from "../images/finance.png";
import book from "../images/book.png";
import pc from "../images/pc.png";
import card from "../images/card.png";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#281942] to-black py-12" id="about">
      <h1 className="text-white text-5xl md:text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 text-center">
        About
        <span className="text-orange-400"> Me</span>
      </h1>
      <div className="max-w-[1200px] mx-auto">
        <div className="px-6 md:p-0 grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center">
          <div className="w-full col-span-1 md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-col md:flex-row p-6">
              <Image src={book} alt="book" className="w-auto h-[130px] md:h-[130px] md:w-auto" />
              <div className="flex flex-col ml-0 md:ml-4 mt-4 md:mt-0">
                <h2 className="text-xl md:text-2xl font-bold text-white/90">Book Title</h2>
                <p className="text-md md:text-lg text-white/70 mt-2">I am studying Cloud Generative AI Engineering. I am an expert in Next.js, JavaScript, TypeScript, HTML, Tailwind CSS, and CSS.</p>
              </div>
            </div>
          </div>

          <div className="w-full col-span-1 md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-col md:flex-row p-6">
              <Image src={finance} alt="finance" className="w-auto h-[130px] md:h-[130px] md:w-auto" />
              <div className="flex flex-col ml-0 md:ml-4 mt-4 md:mt-0">
                <h2 className="text-xl md:text-2xl font-bold text-white/90">Problem Solving</h2>
                <p className="text-md md:text-lg text-white/70 mt-2">I approach challenges with a logical and systematic mindset.</p>
              </div>
            </div>
          </div>

          <div className="w-full col-span-1 md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-col md:flex-row p-6">
              <Image src={card} alt="card" className="w-auto h-[130px] md:h-[130px] md:w-auto" />
              <div className="flex flex-col ml-0 md:ml-4 mt-4 md:mt-0">
                <h2 className="text-xl md:text-2xl font-bold text-white/90">Experience</h2>
                <p className="text-md md:text-lg text-white/70 mt-2">I have a diverse portfolio of projects.</p>
              </div>
            </div>
          </div>

          <div className="w-full col-span-1 md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-col md:flex-row p-6">
              <Image src={pc} alt="pc" className="w-auto h-[130px] md:h-[130px] md:w-auto" />
              <div className="flex flex-col ml-0 md:ml-4 mt-4 md:mt-0">
                <h2 className="text-xl md:text-2xl font-bold text-white/90">Technical Skills</h2>
                <p className="text-md md:text-lg text-white/70 mt-2">I specialize in Next.js, React.js, and Tailwind CSS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
