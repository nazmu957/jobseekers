import Footer from "@/components/UI/Footer";
import Topbar from "@/components/UI/Topbar";
import React, { useState } from "react";

const ApplyJobPage = ({ jobs }) => {
  console.log(jobs);

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

    
    console.log("Applicant Information:", applicantInfo);

    alert("Application submitted successfully!");

   
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
      <div className="lg:w-[50rem] mx-auto my-5 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4 ">
          <img className="h-[3rem]" src={jobs?.image_url} alt="Profile" />

          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="text-xl font-semibold text-gray-900">{jobs?.name}</p>
            <p className="text-sm text-gray-600">Job Title</p>
          </div>
        </div>
        <div className="text-black m-3 ms-5 text-center rounded-full  bg-red-100 w-[8rem] h-[2rem]">
          <small className="">ACTIVELY HIRING</small>
        </div>
        <div className="border-2 m-3 text-black flex justify-between">
          <div className="p-3">
            <h6 className="font-bold ">{jobs?.name}</h6>
            <span className="text-sm">Salary: ${jobs?.salary}</span>
          </div>
          <div className="mt-4 p-2">
            <h6>Location:{jobs?.location} : Remote only</h6>
          </div>
        </div>
        <div className="p-4">
          <p>{jobs.description}</p>
        </div>
        <div className="flex justify-end">
          <div className="text-black p-2">
            <button className="p-2">Report</button>
            <button className="p-2">Hide</button>
          </div>
        </div>
      </div>
      <div className="lg:w-[50rem] mx-auto my-5 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="py-3 border-2">
          <h1 className="text-center font-bold py-2 text-2xl">Apply Form</h1>
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
                className="px-4 py-2 bg-[#1F2761] text-white rounded-md"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyJobPage;

export const getStaticPaths = async () => {
  try {
    const res = await fetch("https://job-server-rosy.vercel.app/jobs");

    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const jobs = await res.json();

    const paths = jobs?.data?.map((job) => ({
      params: { jobsId: job.id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async (context) => {
  try {
    const { params } = context;
    const res = await fetch(
      `https://job-server-rosy.vercel.app/jobs/${params.jobsId}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch job details");
    }

    const data = await res.json();

    return {
      props: {
        jobs: data,
      },
    };
  } catch (error) {
    console.error("Error fetching job details:", error.message);
    return {
      notFound: true,
    };
  }
};
