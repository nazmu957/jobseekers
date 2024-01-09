import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-wrap justify-between py-8">
        <div className="w-full lg:w-1/4 text-start p-4 lg:m-5">
          <span className="font-bold text-lg mb-4 block">SERVICE</span>
          <div className="mt-2">
            <p className="py-1 text-gray-300">Design</p>
            <p className="py-1 text-gray-300">Marketing</p>
            <p className="py-1 text-gray-300">Branding</p>
            <p className="py-1 text-gray-300">Advertisement</p>
          </div>
        </div>
        <div className="w-full lg:w-1/4 text-start p-4 lg:m-5">
          <span className="font-bold text-lg mb-4 block">COMPANY</span>
          <div className="mt-2">
            <p className="py-1 text-gray-300">About us</p>
            <p className="py-1 text-gray-300">Contact</p>
            <p className="py-1 text-gray-300">Jobs</p>
            <p className="py-1 text-gray-300">Press kit</p>
          </div>
        </div>
        <div className="w-full lg:w-1/4 text-start p-4 lg:m-5">
          <span className="font-bold text-lg mb-4 block">SERVICE</span>
          <div className="mt-2">
            <p className="py-1 text-gray-300">Terms of use</p>
            <p className="py-1 text-gray-300">Privacy policy</p>
            <p className="py-1 text-gray-300">Cookie policy</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="flex justify-center">
          <small className="text-gray-500">
            Copyright © JobSeekers 2024 - All rights reserved
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
