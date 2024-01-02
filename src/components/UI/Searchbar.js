
import React from "react";
import Card from "./Card";


const names = [
  "John Doe",
  "Jane Smith",
  "Bob Johnson",
  "Alice Williams",
  "Charlie Brown",
];

const Searchbar = () => {
  return (
    <div>
      <div class="max-w-md mx-auto bg-white rounded p-4 my-5">
        <div class="relative ">
          <input
            type="text"
            placeholder="Search..."
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300 text-black"
          />
          <button class="absolute top-0 right-0 mt-3 mr-4 text-gray-600 focus:outline-none">
            <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-7c0-3.313-2.687-6-6-6s-6 2.687-6 6 2.687 6 6 6 6-2.687 6-6zm-16 0a9 9 0 1118 0 9 9 0 01-18 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center  bg-gray-100 ">
        <div className="">
          {names.map((name, index) => (
            <Card key={index} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
