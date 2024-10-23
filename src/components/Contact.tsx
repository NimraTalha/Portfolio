import React from "react";

import Image from "next/image";
import Phone from "../images/phone.png";
import Mail from "../images/mail.png";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-black py-32 to-[#3f2068]" id="contact">
      <div className="text-white max-w-[1000px] mx-auto flex flex-col lg:flex-row p-8 rounded-lg space-y-8 lg:space-y-0 justify-between items-center">
        {/* Phone and Email Section */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <ul className="space-y-4">
            <li className="flex items-center">
              <Image src={Phone} alt="phone" className="h-[110px] w-auto mr-6" />
              <p className="text-xl">+92-334-9766-531</p>
            </li>
            <li className="flex items-center mt-4">
              <Image src={Mail} alt="mail" className="h-[110px] w-auto mr-6" />
              <p className="text-xl">namra.talha123@gmail.com</p>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 bg-white/10 p-6 rounded-xl">
          <h2 className="text-5xl font-bold text-orange-400 mb-4">Let &apos;s, connect</h2>
          <p className="text-white/70 mb-6">Send &apos; me a message and let&apos;s schedule a call</p>

          <form className="space-y-4" action={"https://getform.io/f/bejjylja"} method="POST">
            <div className="grid grid-cols-2 gap-4">
              <input type="name" name="Name"
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                placeholder="First Name" 
              />
              <input type="name" name="Name"
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                placeholder="Last Name" 
              />
              <input type="Email" name="Email"
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                placeholder="Email" 
              />
              <input type="Phone" name="Phone"
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                placeholder="Phone" 
              />
            </div>

            <textarea 
              className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Your Message" 
              rows={4}
            />

            <button className="bg-orange-700 text-white px-6 py-2 w-full hover:bg-orange-500 font-semibold text-xl rounded-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
