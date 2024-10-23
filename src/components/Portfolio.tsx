"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import project1 from "../images/domino.png";
import project2 from "../images/resume.png";
import project3 from "../images/figma.png";
import project4 from "../images/portfolio.png";

const projects = [
    {
        title: "Domino Pizza clone",
        desc: "I copy original Domino Pizza clone",
        devStack: "Nextjs, Tailwind Css, Shadcnui",
        link: "https://dominopizza-nrl9.vercel.app/",
        git: "https://github.com/NimraTalha/Dominopizza",
        src: project1,
    },
    {
        title: "Resume Builder",
        desc: "I design this resume builder using Html Css.",
        devStack: "Html, Css",
        link: "https://resume-pdf-chi.vercel.app/",
        git: "https://github.com/NimraTalha/NimraTalha-pdf-making-resume",
        src: project2,
    },
    {
        title: "E-commerce Furniture market",
        desc: "E-commerce website using Figma design",
        devStack: "Tailwind Css, Frame motion, Next.js",
        link: "https://e-commerce-furniture-website-l67o.vercel.app/",
        git: "https://github.com/NimraTalha/E-commerce-furniture-website",
        src: project3,
    },
    {
        title: "Portfolio Website",
        desc: "My Portfolio website. I design this clone with Html, Css.",
        devStack: "Html, Css",
        link: "https://my-webpage-five-sable.vercel.app/",
        git: "https://github.com/NimraTalha/MyWebpage",
        src: project4,
    },
];

const Portfolio = () => {
    return (
        <div className="bg-gradient-to-b from-black to-[#381a5f] py-12" id="portfolio">
            <h1 className="text-white text-4xl md:text-6xl max-w-[320px] mx-auto font-semibold my-12">
                Selected <span className="text-orange-400">Projects</span>
            </h1>
            <div className="px-6 md:px-0 max-w-[1000px] mx-auto space-y-24">
                {projects.map((project, index) => (
                    <motion.div key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center`}>
                        
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-5xl md:text-7xl my-4 text-white">{`0${index + 1}`}</h2>
                            <h2 className="text-2xl md:text-4xl text-white">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
                            <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                <a href={project.link} className='mr-6 text-sm md:text-base'>Link</a>
                                <a href={project.git} className='mr-6 text-sm md:text-base'>Git</a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full max-w-[350px] md:max-w-[450px]">
                            <Image 
                                src={project.src} 
                                alt={project.title} 
                                className="h-auto w-full object-cover border rounded-md" 
                                layout="responsive"
                                width={350}
                                height={250}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
