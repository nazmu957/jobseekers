import React, { useState } from "react";
import Card from "./Card";

const names = [
  "Frontend Developer",
  "Fullstack Developer",
  "Software Engineer",
  "UI/UX Designer",
  "SQA",
];

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

 const filteredNames = names.filter((name) =>
   name.toLowerCase().includes(searchTerm.toLowerCase())
 );


  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded p-4 my-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300 text-black"
          />
          <button className="absolute top-0 right-0 mt-3 mr-4 text-gray-600 focus:outline-none">
          
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="">
          {filteredNames.map((name, index) => (
            <Card key={index} name={name} />
          ))}∆
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
