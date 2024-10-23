import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";

const skillIcons = [
    { Icon: <FaHtml5 size={140} />, label: "HTML" },
    { Icon: <FaCss3Alt size={140} />, label: "CSS" },
    { Icon: <FaReact size={140} />, label: "React" },
    { Icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { Icon: <FaHtml5 size={140} />, label: "HTML" },  // Duplicate entry, consider removing if not needed
    { Icon: <FaCss3Alt size={140} />, label: "CSS" },  // Duplicate entry, consider removing if not needed
    { Icon: <FaReact size={140} />, label: "React" },  // Duplicate entry, consider removing if not needed
    { Icon: <FaJsSquare size={140} />, label: "JavaScript" },  // Duplicate entry, consider removing if not needed
];

const Skills = () => {
    return (
        <div className="bg-gradient-to-b from-[#3f2068] to-black py-32">
            <div className="text-white max-w-[1200px] mx-auto p-8 text-center">
                <h2 className="text-6xl font-bold mb-4">What I Do.</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skillIcons.map((skill, index) => (
                        <div key={index} 
                             className="md:h-[160px] w-[160px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl">
                            {skill.Icon}
                            <p className="text-white mt-2">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
