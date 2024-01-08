import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <div className="flex justify-between ">
        <div className="text-start p-5 lg:m-5">
          <span>
            <b>SERVICE</b>
          </span>
          <div className="mt-2 ">
            <p className="py-1 ">Design</p>
            <p className="py-1">Marketing</p>
            <p className="py-1">Branding</p>
            <p className="py-1">Advertisement</p>
          </div>
        </div>
        <div className="text-start p-5 lg:m-5">
          <span>
            <b>COMPANY</b>
          </span>
          <div className="mt-2">
            <p className="py-1">About us</p>
            <p className="py-1">Contact</p>
            <p className="py-1">Jobs</p>
            <p className="py-1">Press kit</p>
          </div>
        </div>
        <div className="text-start p-5 lg:m-5">
          <span>
            <b className="">SERVICE</b>
          </span>
          <div className="mt-2">
            <p className="py-1">Terms of use</p>
            <p className="py-1">Privacy policy</p>
            <p className="py-1">Cookie policy</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <small>Copyright © JobSeekers 2024 - All right reserved </small>
      </div>
    </div>
  );
};

export default Footer;
