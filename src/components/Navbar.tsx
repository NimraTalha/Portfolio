"use client"; // Ensures this is treated as a client component
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";


const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Contact", path: "#contact" }, // Make sure this is added only once
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: "-100%",
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };

    return (
        <div className="bg-black text-white pt-6"> {/* Set background to black */}
            <div className="hidden md:flex px-4 py-2 mx-auto max-w-[400px]">
                <ul className="flex flex-row p-4 space-x-8">
                    {navLinks.map((links, index) => (
                        <li key={index}>
                            <Link href={links.path}>
                                <p className="hover:text-gray-400">{links.title}</p> {/* Hover effect */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                onClick={toggleNav}
                className="md:hidden absolute top-5 right-5 border rounded text-white p-2 z-50 border-white"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <motion.div
                initial={false}
                animate={nav ? "open" : "closed"}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black/90"
            >
                <ul className="text-4xl font-semibold my-24 text-center space-y-8 text-white">
                    {navLinks.map((links, index) => (
                        <li key={index}>
                            <Link href={links.path} onClick={closeNav} className="hover:text-gray-400">
                                {links.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;

