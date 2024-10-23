import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";

const skillIcons = [
    { Icon: <FaHtml5 size={140} />, label: "HTML" },
    { Icon: <FaCss3Alt size={140} />, label: "CSS" },
    { Icon: <FaReact size={140} />, label: "React" },
    { Icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { Icon: <FaHtml5 size={140} />, label: "HTML" },  // Duplicate entry
    { Icon: <FaCss3Alt size={140} />, label: "CSS" },  // Duplicate entry
    { Icon: <FaReact size={140} />, label: "React" },  // Duplicate entry
    { Icon: <FaJsSquare size={140} />, label: "JavaScript" },  // Duplicate entry
];

const Skills = () => {
    return (
        <div className="bg-gradient-to-b from-[#3f2068] to-black py-32">
            <div className="text-white max-w-[1200px] mx-auto p-8 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">What I Do.</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skillIcons.map((skill, index) => (
                        <div key={index} 
                             className="h-[140px] sm:h-[160px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl transition-transform duration-300 hover:scale-105">
                            {skill.Icon}
                            <p className="text-white mt-2 text-sm sm:text-base">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

