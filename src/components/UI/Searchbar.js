import React, { useState } from "react";
import Card from "./Card";

const Searchbar = ({ allJobs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = allJobs.data;
  //  console.log(data);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(
  
    (item) =>
      item?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.salary.includes(searchTerm)
  );

  return (
    <div className="lg:mx-[0rem]">
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/modern-flowing-blue-wave-banner-background_1035-19862.jpg?w=996&t=st=1704707182~exp=1704707782~hmac=aad696c69164d1280733c9791dbf13c7ad9c10319e5df3dbd92dc2d7df34806b")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "32rem",
        }}
      >
        <div className="text-center">
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl pt-10 sm:pt-12 md:pt-16 lg:pt-20 text-[#1E2761] font-serif">
            Empower Your Ambitions, Explore Opportunities!
          </h1>
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-64 pt-6 sm:pt-8 md:pt-10 lg:pt-8 font-serif">
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#1E2761]  text-center">
            Find your dream job
          </h1>
          <div
            className="rounded p-4 my-5 border-2 mx-[18rem] mt-[2.5rem] "
            style={{
              backgroundImage:
                'url("https://img.freepik.com/free-vector/modern-flowing-blue-wave-banner-background_1035-19862.jpg?w=996&t=st=1704707182~exp=1704707782~hmac=aad696c69164d1280733c9791dbf13c7ad9c10319e5df3dbd92dc2d7df34806b")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
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
          <div className="flex flex-wrap justify-between space-y-4 sm:space-y-0 lg:mx-[18rem]">
            <div className="flex items-center w-full sm:w-auto">
              <img
                src="https://avatar.cdnpk.net/858392.jpg"
                alt=""
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="text-xs">LIVE JOBS</p>
                <p className="font-semibold text-xs">8,459+</p>
              </div>
            </div>
            <div className="flex items-center w-full sm:w-auto">
              <img
                src="https://avatar.cdnpk.net/858392.jpg"
                alt=""
                className="w-8 h-8 rounded-full mx-2"
              />
              <div>
                <p className="text-xs">COMPANIES</p>
                <p className="font-semibold text-xs">6854+</p>
              </div>
            </div>
            <div className="flex items-center w-full sm:w-auto">
              <img
                src="https://avatar.cdnpk.net/858392.jpg"
                alt=""
                className="w-8 h-8 rounded-full mx-2"
              />
              <div>
                <p className="text-xs">VACANCIES</p>
                <p className="font-semibold text-xs">4155+</p>
              </div>
            </div>
            <div className="flex items-center w-full sm:w-auto">
              <img
                src="https://avatar.cdnpk.net/858392.jpg"
                alt=""
                className="w-8 h-8 rounded-full mx-2"
              />
              <div>
                <p className="text-xs">NEW JOBS</p>
                <p className="font-semibold text-xs">147</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[75rem] ">
        {/* Sidebar */}
        <div className="hidden lg:block w-1/4 h-full bg-[#1E2761] text-white  ">
          {/* Add your sidebar content here */}
          <div className="p-5 md:p-8 lg:p-6 ">
            <h2 className="text-lg font-semibold mb-4">QUICK APPLY</h2>
            <ul className="space-y-2 md:space-y-3">
              {/* Add your 8 dropdown menu items here */}
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Supply Chain/ Procurement (110)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Engineer/Architects (315)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Accounting/Finance (390)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Gen Mgt/Admin (140)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → IT & Telecommunication (428)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Customer Service/Call Centre (122)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Security/Support Service (34)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Law/Legal (32)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Receptionist/ PS (66)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Commercial (55)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Education/Training (405)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Driving/Motor Technician (15)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Medical/Pharma (253)
                </a>
              </li>
            </ul>
            <h2 className="text-lg font-semibold mb-4 mt-5">MORE LINK</h2>
            <ul className="space-y-2 md:space-y-3">
              {/* Add your 8 dropdown menu items here */}
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Supply Chain/ Procurement (110)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Engineer/Architects (315)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Accounting/Finance (390)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Gen Mgt/Admin (140)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → IT & Telecommunication (428)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  → Customer Service/Call Centre (122)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Card Container */}
        <div className="flex-1 bg-gray-100 overflow-y-auto p-8">
          <div className="flex flex-wrap gap-2">
            {filteredData.map((item, index) => (
              <Card
                key={index}
                name={item?.name}
                location={item?.location}
                salary={item?.salary}
                image_url={item?.image_url}
                id={item?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
