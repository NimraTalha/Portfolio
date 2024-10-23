"use client"; 
import Image from "next/image";  
import { motion } from "framer-motion";
import lightning from "../images/icon2.png";
import cursor from "../images/icon1.png";

import profilepic from "../images/logo.jpg";

const Hero = () => {
    return (
        <div className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-[#281942] via-60% to-[#DBAF6E]">
            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div> {/* Close the div here */}
            
            <div className="text-8xl font-bold text-center relative z-10">
                <h1 className="text-[#98B4CE]">Hi, I am</h1>
                <h1 className="text-[#E48A57]">Nimra Talha</h1>
            </div>
          
            <motion.div className=" hidden md:block absolute left-[280px] top-[170px]" drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                <Image 
                    src={cursor}
                    height={190}
                    width={190}
                    alt="cursor"
                    draggable="false"
                />
            </motion.div>
            <motion.div className=" hidden md:block absolute right-[220px] top-[170px]" drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                <Image 
                    src={lightning}
                    height={120}
                    width={120}
                    alt="lightning"
                    draggable="false"
                />
            </motion.div>
            
            <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80 font-bold relative z-10">
                I am a Website developer focused on creating websites that provide the best experience for users.
            </p>

            <div className="relative z-10 mt-10">
                <Image 
                    src={profilepic}
                    alt="profile picture"
                    height={350} // Set a height and width for responsiveness
                    width={350}
                    className="h-auto w-auto mx-auto rounded-xl"
                />
            </div>
        </div>
    );
};

export default Hero;
