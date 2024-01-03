import React from 'react';

const AdminDashboard = () => {
  const jobApplications = [
    { id: 1, position: "Software Engineer", applicant: "John Smith",date: "23/12/23" },
    { id: 2, position: "UX Designer", applicant: "Brand Lara" ,date: "23/12/23",},
    { id: 2, position: "Frontend Designer", applicant: "Tom Cruge",date: "23/12/23" },
    // Add more job applications as needed
  ];
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-black">Job Applications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobApplications.map((job) => (
            <div key={job.id} className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">{job.position}</h2>
              <p className="text-gray-600">{`Applicant: ${job.applicant}`}</p>
              <div className='flex justify-between'>
                <p>Application Date:{job.date}</p>
                <button className='bg-red-100 p-1 rounded'>Action</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;