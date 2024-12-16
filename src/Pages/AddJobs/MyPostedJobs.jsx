import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";

export default function MyPostedJobs() {
  const [jobs, setJobs] = useState([]);
  const { user } = UseAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);

  return (
    <div className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-600 text-center mb-8">
        My Posted Jobs
      </h1>
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Job Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Job Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
              >
                <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                  {idx + 1}
                </td>
                <td className="px-6 py-4">
                  <img
                    src={job.company_logo}
                    alt={job.title}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                  {job.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{job.jobType}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {job.location}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">

                  <Link to={`/viewapplication/${job._id}`}>
                    <button
                      className="px-4 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      View Applications
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
