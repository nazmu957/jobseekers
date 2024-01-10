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

const JobPost = () => {
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

  const [job, setJob] = useState({});
  const handleAddProduct = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Job added successfully");
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newJob = { ...job };
    newJob[field] = value;
    setJob(newJob);
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
                <a
                  href="#"
                  className="flex items-center text-white hover:underline"
                >
                  <FaHome className="mr-2" /> Dashboard
                </a>
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
                  <FaClipboardList className="mr-2" /> Posts
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
            Post Job
          </h1>
          <div className="bg-red-100 py-[4rem]">
            <div>
              <h2 className="font-bold text-2xl py-3">Job Added</h2>
              <form onSubmit={handleAddProduct}>
                <input
                  className="border px-3 p-[.2rem] my-[.3rem] rounded"
                  onBlur={handleInputBlur}
                  type="number"
                  placeholder="Job id"
                  required
                  name="id"
                  id=""
                />
                <br />
                <input
                  className="border px-3 p-[.2rem] my-[.3rem] rounded"
                  onBlur={handleInputBlur}
                  type="text"
                  placeholder="Company Logo Link"
                  required
                  name="image_url"
                  id=""
                />
                <br />
                <input
                  className="border px-3 p-[.2rem]  my-[.3rem] rounded"
                  onBlur={handleInputBlur}
                  type="text"
                  placeholder="Salary"
                  required
                  name="salary"
                  id=""
                />
                <br />
                <input
                  className="border px-3 p-[.2rem]  my-[.3rem] rounded"
                  onBlur={handleInputBlur}
                  type="text"
                  placeholder="availability"
                  required
                  name="availability"
                  id=""
                />
                <br />
                <input
                  className="border px-3 p-[.2rem]  my-[.3rem] rounded"
                  onBlur={handleInputBlur}
                  type="text"
                  placeholder="Location"
                  required
                  name="location"
                  id=""
                />
                <br />
                <input
                  className="border px-3 p-[.2rem]  my-[.3rem] rounded"
                  onBlur={handleInputBlur}
                  type="text"
                  placeholder="Title"
                  required
                  name="title"
                  id=""
                />
                <br />
                <button className="btn btn-sm mt-3" type="submit">
                  Post Job
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
