import React, { useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    userName: "John Doe",
    profilePicture: "path/to/default/profile-picture.jpg",
    address: "123 Main St, Cityville",
    phoneNumber: "555-1234",
    pdfFile: null,
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

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-center">
        <img
          src={userData.profilePicture}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">{userData.userName}</h2>
          <p className="text-gray-500">{userData.address}</p>
          <p className="text-gray-500">{userData.phoneNumber}</p>
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
              String.fromCharCode.apply(null, new Uint8Array(userData.pdfFile))
            )}`}
            width="100%"
            height="500px"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Profile;
