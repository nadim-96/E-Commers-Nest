import React from "react";
import girlImg from "../AboutInfo/pic1.png";

const Contact = () => {
  return (
    <div className="w-full px-5 md:px-10 lg:px-20 py-16 font-sans mb-4 container mx-auto justify-between">

      {/* TOP INTRO SECTION */}
      <div className="mb-16">
        <p className="text-[#3BB77E] font-semibold text-sm">How can help you ?</p>
        <h1 className="text-4xl font-bold mt-2 leading-snug">
          Let us know how <br /> we can help you
        </h1>
        <p className="mt-4 text-gray-600 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <p className="mt-2 text-gray-600 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div>
          <h3 className="font-semibold text-lg mb-2">01. Visit Feedback</h3>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet...</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">02. Employer Services</h3>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet...</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">03. Billing Inquiries</h3>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet...</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">04. General Inquiries</h3>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet...</p>
        </div>
      </div>

      {/* OFFICE / STUDIO / SHOP */}
      <div className="grid md:grid-cols-3 gap-10 mb-20">

        <div>
          <h3 className="font-semibold text-xl mb-3 text-[#3BB77E]">Office</h3>
          <p className="text-sm">
            205 North Michigan Avenue, Suite 810 <br /> Chicago, USA
          </p>
          <p className="text-sm mt-2">Phone: (123) 456-7890</p>
          <p className="text-sm mt-1">Email: contact@site.com</p>
          <button className="mt-4 bg-[#3BB77E] text-white px-4 py-2 rounded-md text-sm">
            View map
          </button>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-3 text-[#3BB77E]">Studio</h3>
          <p className="text-sm">
            205 North Michigan Avenue, Suite 810 <br /> Chicago, USA
          </p>
          <p className="text-sm mt-2">Phone: (123) 456-7890</p>
          <p className="text-sm mt-1">Email: contact@site.com</p>
          <button className="mt-4 bg-[#3BB77E] text-white px-4 py-2 rounded-md text-sm">
            View map
          </button>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-3 text-[#3BB77E]">Shop</h3>
          <p className="text-sm">
            205 North Michigan Avenue, Suite 810 <br /> Chicago, USA
          </p>
          <p className="text-sm mt-2">Phone: (123) 456-7890</p>
          <p className="text-sm mt-1">Email: contact@site.com</p>
          <button className="mt-4 bg-[#3BB77E] text-white px-4 py-2 rounded-md text-sm">
            View map
          </button>
        </div>

      </div>

      {/* CONTACT FORM */}
      <div className="justify-between">
        <h2 className="text-3xl font-bold mb-3">Drop Us a Line</h2>
        <p className="text-gray-500 text-sm mb-8">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="grid md:grid-cols-2 gap-10 justify-between container mx-auto">

          {/* LEFT FORM */}
          <form className="grid grid-cols-1 gap-5">
            <div className="grid md:grid-cols-2 gap-5">
               <div>
                 <input type="text" placeholder="First Name" className="border rounded-md p-3 w-full" />
                 <input type="text" placeholder="Your Phone" className="border rounded-md p-3 w-full" /> 
               </div>
               <div>
                 <input type="email" placeholder="Your Email" className="border rounded-md p-3 w-full" />
                 <input type="text" placeholder="Subject" className="border rounded-md p-3 w-full" /> 
               </div>
            </div>
            <textarea rows="4" placeholder="Message" className="border rounded-md p-3 w-full"></textarea>

            <button className="bg-[#253D4E] text-white px-2 py-3 rounded-lg w-32 h-15 ">
              Send message
            </button>
          </form>

          {/* RIGHT IMAGE EXACT LIKE SCREENSHOT */}
          <div className="w-[385px]   h-[419px] ">
            <img
              src={girlImg}
              className="rounded-2xl object-cover shadow-md"
              alt="contact banner"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
