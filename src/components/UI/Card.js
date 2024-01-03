import React from "react";

const Card = ({ name }) => {
  return (
    <div className="lg:w-[50rem] mx-auto my-5 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4 ">
        <img
          className="h-[3rem]"
          src="https://via.placeholder.com/64"
          alt="Profile"
        />

        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">Job Title</p>
        </div>
      </div>
      <div className="text-black m-3 ms-5 text-center rounded-full  bg-red-100 w-[8rem] h-[2rem]">
        <small className="">ACTIVELY HIRING</small>
      </div>
      <div className="border-2 m-3 text-black flex justify-between">
        <div className="p-3">
          <h6 className="font-bold ">Frontend Developer</h6>
          <span className="text-sm">$100k-$300k</span>
        </div>
        <div className="mt-4">
          <h6>United State. Remote only</h6>
        </div>
        <div className="flex mt-4">
          <div>
            <button className="border border-black lg:px-4 px-2 py-1 ">
              Save
            </button>
          </div>
          <div className="">
            <button className="border bg-black text-white border-black lg:px-4 px-2 py-1 ms-2 text-center">
               More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="text-black p-2">
          <button className="p-2">Report</button>
          <button className="p-2">Hide</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
