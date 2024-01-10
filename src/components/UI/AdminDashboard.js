import React, { useState } from "react";
import {
  FaHome,
  FaTasks,
  FaUsers,
  FaComment,
  FaClipboardList,
  FaCalendarAlt,
} from "react-icons/fa";
import ReportCard from "./Report";
import Link from "next/link";
const AdminDashboard = () => {
  const [clickedApplicant, setClickedApplicant] = useState(null);

  const handleActionButtonClick = (applicant) => {
    // Replace with your desired action
    alert(`Action button clicked for ${applicant}`);
    setClickedApplicant(applicant);
  };
  const [jobApplications, setJobApplications] = useState([
    {
      id: 1,
      position: "Software Engineer",
      applicant: "John Smith",
      date: "23/12/23",
      img: "https://midone-html.vercel.app/assets/images/profile-1.jpg",
    },
    {
      id: 2,
      position: "UX Designer",
      applicant: "Brand Lara",
      date: "23/12/23",
      img: "https://midone-html.vercel.app/assets/images/profile-2.jpg",
    },
    {
      id: 3,
      position: "Frontend Designer",
      applicant: "Tom Cruge",
      date: "23/12/23",
      img: "https://midone-html.vercel.app/assets/images/profile-2.jpg",
    },
    {
      id: 4,
      position: "Junior Software Engineer",
      applicant: "Rakib",
      date: "2/1/24",
      img: "https://midone-html.vercel.app/assets/images/profile-1.jpg",
    },
    {
      id: 5,
      position: "Android Developer",
      applicant: "Alamin",
      date: "6/10/23",
      img: "https://midone-html.vercel.app/assets/images/profile-2.jpg",
    },
    {
      id: 6,
      position: "React Developer",
      applicant: "Sakib",
      date: "23/12/23",
      img: "https://midone-html.vercel.app/assets/images/profile-1.jpg",
    },
  ]);

  const [selectedApplications, setSelectedApplications] = useState([]);

  const handleDelete = (id) => {
    const updatedApplications = jobApplications.filter((job) => job.id !== id);
    setJobApplications(updatedApplications);
    window.alert(`Job application with ID ${id} has been deleted.`);
  };

  const handleAddToList = (id) => {
    const selectedJob = jobApplications.find((job) => job.id === id);
    if (selectedJob) {
      setSelectedApplications((prevSelected) => [...prevSelected, selectedJob]);
      window.alert(`Job application with ID ${id} has been added to the list.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="container   grid grid-cols-1 md:grid-cols-4">
        {/* Sidebar */}
        <div className="md:col-span-1">
          {/* Sidebar */}
          <div className="bg-[#1F2761] lg:h-screen p-[2rem]">
            <h1 className="text-2xl font-semibold text-white mb-4">
              Admin Dashboard
            </h1>
            {/* Menu */}
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center text-white hover:underline"
                >
                  <FaHome className="mr-2" /> Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard_post"
                  className="flex items-center text-white hover:underline"
                >
                  <FaClipboardList className="mr-2" /> Posts
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-white hover:underline"
                >
                  <FaTasks className="mr-2" /> Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-white hover:underline"
                >
                  <FaUsers className="mr-2" /> Clients
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-white hover:underline"
                >
                  <FaComment className="mr-2" /> Chat
                </a>
              </li>
              
              <li>
                <a
                  href="#"
                  className="flex items-center text-white hover:underline"
                >
                  <FaCalendarAlt className="mr-2" /> Calendar
                </a>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
          {/* Add any other sidebar content you need */}
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold mb-8 text-[#1F2761] ms-8 mt-3">
            General Report
          </h1>
          <ReportCard />
          <h1 className="text-2xl font-bold mb-8 text-[#1F2761] ms-8 mt-3">
            Recent Applications
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
            {jobApplications.map((job) => (
              <div key={job.id} className=" p-4 rounded-md">
                <div key={job.id} className="bg-white p-4 shadow-md rounded-md">
                  <h2 className="text-lg font-semibold mb-2">{job.position}</h2>
                  <p className="text-gray-600">{`Applicant: ${job.applicant}`}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p> Date: {job.date}</p>
                    <div className="space-x-2">
                      <button
                        className="bg-red-100 p-1 rounded text-xs"
                        onClick={() => handleDelete(job.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-green-100 p-1 rounded text-xs"
                        onClick={() => handleAddToList(job.id)}
                      >
                        Add to List
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4">
            <h2 className="text-2xl font-bold mb-4 text-[#1F2761] ms-5">
              Selected Applications
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-md overflow-hidden">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border p-3">Position</th>
                    <th className="border p-3">Applicant</th>
                    <th className="border p-3">Image</th>
                    <th className="border p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {selectedApplications.map((selectedJob) => (
                    <tr key={selectedJob.id}>
                      <td className="border p-3">{selectedJob.position}</td>
                      <td className="border p-3">{selectedJob.applicant}</td>
                      <td className="border p-3">
                        <div className="flex items-center">
                          <img
                            src={selectedJob.img} // Replace with the actual image source
                            alt={`${selectedJob.applicant}'s Image`}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          {selectedJob.applicant}
                        </div>
                      </td>
                      <td className="border pe-0">
                        <button
                          className={`${
                            clickedApplicant === selectedJob.applicant
                              ? "bg-green-500"
                              : "bg-blue-500"
                          } text-white text-xs px-3 py-2 rounded ms-7`}
                          onClick={() =>
                            handleActionButtonClick(selectedJob.applicant)
                          }
                        >
                          {clickedApplicant === selectedJob.applicant
                            ? "Confirmed"
                            : "Action"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
