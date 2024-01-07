import Topbar from "@/components/UI/Topbar";
import React, { useState } from "react";

const ApplyJobPage = ({ jobs }) => {
  const [applicantInfo, setApplicantInfo] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicantInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can perform additional validation and submit the data to your backend
    console.log("Applicant Information:", applicantInfo);

    // Clear the form after submission
    setApplicantInfo({
      name: "",
      email: "",
      resume: "",
      coverLetter: "",
    });
  };

  return (
    <div>
      <Topbar />
      {/* Existing code ... */}
      <div className="lg:w-[50rem] mx-auto my-5 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:w-[50rem] mx-auto my-5 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-6 py-4 ">
            <img className="h-[3rem]" src={jobs.image_url} alt="Profile" />

            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="text-xl font-semibold text-gray-900">
                {jobs?.title}
              </p>
              <p className="text-sm text-gray-600">Job Title</p>
            </div>
          </div>
          <div className="text-black m-3 ms-5 text-center rounded-full  bg-red-100 w-[8rem] h-[2rem]">
            <small className="">ACTIVELY HIRING</small>
          </div>
          <div className="border-2 m-3 text-black flex justify-between">
            <div className="p-3">
              <h6 className="font-bold ">{jobs?.title}</h6>
              <span className="text-sm">{jobs?.salary}</span>
              <p>{jobs?.description}</p>
            </div>
            <div className="mt-4">
              <h6>{jobs?.location} : Remote only</h6>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="m-3">
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={applicantInfo.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="m-3">
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={applicantInfo.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="m-3">
            <label className="block text-sm font-medium text-gray-700">
              Resume URL:
            </label>
            <input
              type="text"
              name="resume"
              value={applicantInfo.resume}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="m-3">
            <label className="block text-sm font-medium text-gray-700">
              Cover Letter:
            </label>
            <textarea
              name="coverLetter"
              value={applicantInfo.coverLetter}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="m-3 text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobPage;
