import React, { useState } from "react";
import Card from "./Card";

// const data = [
//   { title: "Frontend Developer", location: "New York", salary: "$80,000" },
//   {
//     title: "Fullstack Developer",
//     location: "San Francisco",
//     salary: "$100,000",
//   },
//   { title: "Software Engineer", location: "Seattle", salary: "$90,000" },
//   { title: "UI/UX Designer", location: "Los Angeles", salary: "$85,000" },
//   { title: "SQA", location: "Austin", salary: "$75,000" },
// ];

const Searchbar = ({ allJobs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = allJobs.data;
  // console.log(data);


  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.salary.includes(searchTerm)
  );

  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded p-4 my-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title, location, or salary..."
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300 text-black"
          />
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="">
          {filteredData.map((item, index) => (
            <Card
              key={index}
              name={item.title}
              location={item.location}
              salary={item.salary}
              image_url={item.image_url}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
