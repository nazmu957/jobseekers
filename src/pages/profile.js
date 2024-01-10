import Footer from "@/components/UI/Footer";
import Topbar from "@/components/UI/Topbar";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import ProgressBar from "@/components/UI/ProgressBar";
import StatusCard from "@/components/UI/StatusCard";

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
    name: "Leonardo DiCaprio",
    role: "DevOps Engineer",
    email: "leonardodicaprio@left4code.com",
    instagram: "Instagram Leonardo DiCaprio",
    twitter: "Twitter Leonardo DiCaprio",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to update the user information on the server
    // For simplicity, we'll just show an alert and clear the form
    alert("User information updated!");
    console.log("Updated User Information:", userInfo);

    // Clear the form by setting the values to an empty string
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      name: "",
      role: "",
      email: "",
      instagram: "",
      twitter: "",
    }));
  };
  return (
    <>
      <Topbar />

      <div className="bg-[#F1F5F9] h-[1700px] lg:h-[1400px]">
        <h1 className="text-center text-xl font-bold py-5 text-[#1F2761] ">
          Profile Information
        </h1>
        <div className="flex flex-col lg:flex-row justify-center lg:mx-5 bg-white p-10 lg:mx-[20rem] rounded-lg">
          <div className=" ">
            <div className="">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-7.jpg"
                alt=""
                className="w-24 h-24 lg:w-32 lg:h-32 p-2 lg:ms-10 "
              />
              <h1 className="font-semibold text-lg lg:text-md lg:ms-10">
                {userInfo.name}
              </h1>
              <p className="lg:ms-10">{userInfo.role}</p>
              <div className="w-[17rem] mt-3 ">
                <small className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  minima sequi dolores nihil totam praesentium soluta nesciunt,
                  provident sit recusandae? Earum amet sit, itaque
                  exercitationem aliquam illum delectus reprehenderit suscipit!
                </small>
              </div>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-8">
            <h4 className="font-semibold text-lg lg:text-md">
              Contact Details
            </h4>
            <div className="py-2">
              <p className="flex items-center">
                <CiMail className="text-lg lg:text-xl xl:text-2xl mr-1" />
                {userInfo.email}
              </p>
              <p className="flex items-center py-2">
                <FaInstagram className="text-lg lg:text-xl xl:text-2xl mr-1" />
                {userInfo.instagram}
              </p>
              <p className="flex items-center">
                <CiTwitter className="text-lg lg:text-xl xl:text-2xl mr-1" />
                {userInfo.twitter}
              </p>
            </div>
            <div className="w-[17rem]">
              <small className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                minima sequi dolores nihil totam praesentium soluta nesciunt,
                provident sit recusandae? Earum amet sit, itaque exercitationem
                aliquam illum delectus reprehenderit suscipit!
              </small>
            </div>
          </div>

          <div className="mt-4 lg:mt-0 lg:ml-8">
            <h4 className="font-semibold text-lg lg:text-md">
              Update Profile
            </h4>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="block mt-2 text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />

              <label
                htmlFor="role"
                className="block mt-2 text-sm font-medium text-gray-600"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={userInfo.role}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />

              <label
                htmlFor="email"
                className="block mt-2 text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />

              <label
                htmlFor="instagram"
                className="block mt-2 text-sm font-medium text-gray-600"
              >
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={userInfo.instagram}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />

              <label
                htmlFor="twitter"
                className="block mt-2 text-sm font-medium text-gray-600"
              >
                Twitter
              </label>
              <input
                type="text"
                id="twitter"
                name="twitter"
                value={userInfo.twitter}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />

              <button
                type="submit"
                className="mt-4 bg-[#1F2761] text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Update Information
              </button>
              {/* <button
                type="submit"
                className="mt-4 bg-[#1F2761] text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ms-3"
              >
                Create Profile
              </button> */}
            </form>
          </div>
        </div>

        <div class="container mx-auto p-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-xl font-semibold mb-2">Resent Update</h2>
              <hr />
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <img
                    src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                    alt=""
                    className="w-[3rem] h-[3rem] rounded-full"
                  />
                  <div className="mx-3">
                    <h5>Leonardo DiCaprio</h5>
                    <small>Owner</small>
                  </div>
                </div>
                <div>
                  <p>CEO of Apple</p>
                </div>
                <div>
                  <p>12-12-23</p>
                </div>
                <div>
                  <p>12.24am</p>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <img
                    src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                    alt=""
                    className="w-[3rem] h-[3rem] rounded-full"
                  />
                  <div className="mx-3">
                    <h5>Leonardo DiCaprio</h5>
                    <small>Owner</small>
                  </div>
                </div>
                <div>
                  <p>CEO of Apple</p>
                </div>
                <div>
                  <p>12-12-23</p>
                </div>
                <div>
                  <p>12.24am</p>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <img
                    src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                    alt=""
                    className="w-[3rem] h-[3rem] rounded-full"
                  />
                  <div className="mx-3">
                    <h5>Leonardo DiCaprio</h5>
                    <small>Owner</small>
                  </div>
                </div>
                <div>
                  <p>CEO of Apple</p>
                </div>
                <div>
                  <p>12-12-23</p>
                </div>
                <div>
                  <p>12.24am</p>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <img
                    src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                    alt=""
                    className="w-[3rem] h-[3rem] rounded-full"
                  />
                  <div className="mx-3">
                    <h5>Leonardo DiCaprio</h5>
                    <small>Owner</small>
                  </div>
                </div>
                <div>
                  <p>CEO of Apple</p>
                </div>
                <div>
                  <p>12-12-23</p>
                </div>
                <div>
                  <p>12.24am</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-xl font-semibold mb-2">Rasponse Rate</h2>
              <hr />
              <ProgressBar />
            </div>
          </div>
        </div>
        <StatusCard />
      </div>

      <Footer />
    </>
  );
};

export default Profile;
