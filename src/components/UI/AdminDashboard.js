import React, { useState } from "react";

const AdminDashboard = () => {
  const [jobApplications, setJobApplications] = useState([
    {
      id: 1,
      position: "Software Engineer",
      applicant: "John Smith",
      date: "23/12/23",
    },
    {
      id: 2,
      position: "UX Designer",
      applicant: "Brand Lara",
      date: "23/12/23",
    },
    {
      id: 3,
      position: "Frontend Designer",
      applicant: "Tom Cruge",
      date: "23/12/23",
    },
    {
      id: 4,
      position: "Junior Software Engineer",
      applicant: "Rakib",
      date: "2/1/24",
    },
    {
      id: 5,
      position: "Android Developer",
      applicant: "Alamin",
      date: "6/10/23",
    },
    {
      id: 6,
      position: "React Developer",
      applicant: "Sakib",
      date: "23/12/23",
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
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-black">Job Applications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobApplications.map((job) => (
            <div key={job.id} className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">{job.position}</h2>
              <p className="text-gray-600">{`Applicant: ${job.applicant}`}</p>
              <div className="flex justify-between items-center mt-2">
                <p>Application Date: {job.date}</p>
                <div className="space-x-2">
                  <button
                    className="bg-red-100 p-1 rounded"
                    onClick={() => handleDelete(job.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-100 p-1 rounded"
                    onClick={() => handleAddToList(job.id)}
                  >
                    Add to List
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Applications List */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Selected Applications</h2>
          <ul>
            {selectedApplications.map((selectedJob) => (
              <li key={selectedJob.id}>
                {`${selectedJob.position} - ${selectedJob.applicant}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
