import Footer from "@/components/UI/Footer";
import Topbar from "@/components/UI/Topbar";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import ProgressBar from "@/components/UI/ProgressBar";
import StatusCard from "@/components/UI/StatusCard";

const Profile = () => {
  const [userData, setUserData] = useState({
    userName: "Your Name",
    profilePicture: "path/to/default/profile-picture.jpg",
    address: "Mirpur Dhaka",
    phoneNumber: "01700121211",
    pdfFile: null,
  });

  const [editing, setEditing] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    userName: userData.userName,
    address: userData.address,
  });

  const handleFileUpload = (e, fileType) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({
          ...userData,
          [fileType]: reader.result,
        });
      };

      if (fileType === "profilePicture") {
        reader.readAsDataURL(file);
      } else if (fileType === "pdfFile" && file.type === "application/pdf") {
        reader.readAsArrayBuffer(file);
      } else {
        alert("Invalid file type. Please upload a PDF file.");
      }
    }
  };

  const handleUpdateUserData = () => {
    setUserData({
      ...userData,
      userName: updatedUserData.userName,
      address: updatedUserData.address,
    });
    setEditing(false);
  };

  return (
    <>
      <Topbar />
     
      <div className="bg-[#F1F5F9] h-[1700px] lg:h-[1400px]">
        <h1 className="text-center text-xl font-bold py-5 ">
          Profile Information
        </h1>
        <div className="flex flex-col lg:flex-row justify-center lg:mx-5 bg-white p-10 lg:mx-[20rem] rounded-lg">
          <div className="flex items-center">
            <div className="mr-15">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-7.jpg"
                alt=""
                className="w-24 h-24 lg:w-32 lg:h-32 p-2 rounded-full"
              />
            </div>
            <div className="mt-4 lg:mt-0">
              <h1 className="font-semibold text-lg lg:text-md">
                Leonardo DiCaprio
              </h1>
              <p>DevOps Engineer</p>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-8">
            <h4 className="font-semibold text-lg lg:text-md ">
              Contact Details
            </h4>
            <p className="flex items-center">
              <CiMail className="text-lg lg:text-xl xl:text-2xl mr-1" />
              leonardodicaprio@left4code.com
            </p>
            <p className="flex items-center">
              <FaInstagram className="text-lg lg:text-xl xl:text-2xl mr-1" />
              Instagram Leonardo DiCaprio
            </p>
            <p className="flex items-center">
              <CiTwitter className="text-lg lg:text-xl xl:text-2xl mr-1" />
              Twitter Leonardo DiCaprio
            </p>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-8">
            <h4 className="font-semibold text-lg lg:text-md ">
              Others Information
            </h4>
            <p className="hidden lg:block">leonardodicaprio@left4code.com</p>
            <p className="hidden lg:block">Instagram Leonardo DiCaprio</p>
            <p className="hidden lg:block">Twitter Leonardo DiCaprio</p>
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
