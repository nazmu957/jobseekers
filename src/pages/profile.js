import Footer from "@/components/UI/Footer";
import Topbar from "@/components/UI/Topbar";
import React, { useState } from "react";

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
      <div className="bg-[#F3F4F6] h-[80rem]">
        <div className="max-w-md mx-auto py-[3rem]  px-[3rem] bg-white rounded-md shadow-md  ">
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
                  <h2 className="text-xl text-black font-semibold">{userData.userName}</h2>
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
              Upload PDF File
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
      </div>
      <Footer />
    </>
  );
};

export default Profile;
