import Link from "next/link";
import React from "react";
import { MdOutlineReport } from "react-icons/md";
import { GrHide } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";

const Card = ({ name,location,salary,image_url,id }) => {
  
  return (
    <div className="lg:w-[70rem] mx-auto my-5 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4 ">
        <img className="h-[3rem]" src={image_url} alt="Profile" />

        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <div className="text-black m-3 ms-5 text-center rounded-full  bg-red-100 w-[8rem] h-[2rem]">
        <small className="">ACTIVELY HIRING</small>
      </div>
      <div className="border-2 m-3 text-black flex justify-between">
        <div className="p-3">
          <h6 className="font-bold ">{name}</h6>
          <span className="text-sm">Salary:${salary}</span>
        </div>
        <div className="mt-4 flex">
          <IoLocationSharp className="text-xl mx-1 mt-[.1rem]" />
          <h6>{location} : Remote only</h6>
        </div>
        <div className="flex mt-4">
          <div>
            <button className="border border-black lg:px-4 px-2 py-1 ">
              Save
            </button>
          </div>
          <div className="">
            <Link href={`/jobs/${id}`}>
              <button className="border bg-[#1E2761] text-white border-black lg:px-4 px-2 py-1 ms-2 me-2 text-center">
                MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="text-black p-2 flex">
          <div className="flex">
            <button>
              <MdOutlineReport className=" text-xl" />
            </button>
            <button className="mt-[.1rem] px-2">Report</button>
          </div>
          <div className="flex">
            <button>
              <GrHide className=" text-2xl" />
            </button>
            <button className="mt-[.1rem] px-2">Hide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
