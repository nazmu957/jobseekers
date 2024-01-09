import Footer from "@/components/UI/Footer";
import Topbar from "@/components/UI/Topbar";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

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
      {/* <div className="bg-[#F3F4F6] h-[80rem] ">
        <div className=" py-[3rem]  px-[3rem] bg-white rounded-md shadow-md  ">
          <h2 className="text-center text-2xl text-black">Your Profile</h2>
          <div className="flex items-center justify-center ">
            <img
              src={userData.profilePicture}
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              {editing ? (
                <div>
                  <input
                    type="text"
                    value={updatedUserData.userName}
                    onChange={(e) =>
                      setUpdatedUserData({
                        ...updatedUserData,
                        userName: e.target.value,
                      })
                    }
                    className="mt-1 p-2 text-black border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    value={updatedUserData.address}
                    onChange={(e) =>
                      setUpdatedUserData({
                        ...updatedUserData,
                        address: e.target.value,
                      })
                    }
                    className="mt-1 p-2 text-black border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={handleUpdateUserData}
                    className="mt-2 p-2 bg-blue-500 text-white rounded-md"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl text-black font-semibold">
                    {userData.userName}
                  </h2>
                  <p className="text-gray-500">{userData.address}</p>
                  <p className="text-gray-500">{userData.phoneNumber}</p>
                  <button
                    onClick={() => setEditing(true)}
                    className="mt-2 p-2 bg-black text-sm text-white rounded-md"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-600">
              Upload Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, "profilePicture")}
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-600">
              Upload Your Resume
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleFileUpload(e, "pdfFile")}
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {userData.pdfFile && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold">PDF File</h3>
              <iframe
                title="PDF Viewer"
                src={`data:application/pdf;base64,${btoa(
                  String.fromCharCode.apply(
                    null,
                    new Uint8Array(userData.pdfFile)
                  )
                )}`}
                width="100%"
                height="500px"
              ></iframe>
            </div>
          )}
        </div>
      </div> */}
      <div className="bg-[#F1F5F9] h-[700px]">
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

        <div className="flex mt-5 my-[10rem]">
          <div className="bg-white w-[25rem]">
            <h1 className="py-5 ms-5">Application Update</h1>
            <hr />
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
          </div>
          <div className="bg-white w-[25rem] ms-5">
            <h1 className="py-5 ms-5">Application Update</h1>
            <hr />
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
          </div>
          <div className="bg-white w-[25rem] ms-5 pb-6">
            <h1 className="py-5 ms-5">Application Update</h1>
            <hr />
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
          </div>
          <div className="bg-white w-[25rem] ms-5 pb-6">
            <h1 className="py-5 ms-5">Application Update</h1>
            <hr />
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
            <div className="flex mt-5 ps-5">
              <img
                src="https://midone-html.vercel.app/assets/images/profile-8.jpg"
                alt=""
                className="w-[3rem] h-[3rem] rounded-full"
              />
              <div className="mx-2">
                <h5>Leonardo DiCaprio</h5>
                <p>CEO of Apple</p>
              </div>
              <div className="ms-10">
                <small>12.12am</small>
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
