import { Link, useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaUser } from "react-icons/fa";

export default function JobDetails() {
    const job = useLoaderData();
    // console.log(job);

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-6xl mx-auto p-6 bg-white shadow-2xl rounded-lg">
                {/* Job Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg mb-8">
                    <div className="flex items-center gap-4">
                        <img
                            src={job.company_logo}
                            alt={job.company}
                            className="w-20 h-20 rounded-full border-4 border-white"
                        />
                        <div>
                            <h1 className="text-4xl font-bold">{job.title}</h1>
                            <p className="text-lg font-medium">{job.company}</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:flex lg:gap-8">
                    {/* Job Details Section */}
                    <div className="lg:w-2/3">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">Job Details</h3>
                            <p className="flex items-center text-gray-700 mb-2">
                                <FaMapMarkerAlt className="mr-2 text-red-500" />
                                <span>{job.location}</span>
                            </p>
                            <p className="text-gray-700">
                                <strong>Job Type:</strong> {job.jobType}
                            </p>
                            <p className="text-gray-700">
                                <strong>Category:</strong> {job.category}
                            </p>
                            <p className="text-gray-700">
                                <strong>Application Deadline:</strong> {job.applicationDeadline}
                            </p>
                            <p className="text-gray-700">
                                <strong>Salary Range:</strong> {job.salaryRange.min} -{" "}
                                {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
                            </p>
                        </div>

                        {/* Job Description */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">Job Description</h3>
                            <p className="text-gray-700">{job.description}</p>
                        </div>

                        {/* Requirements */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">Requirements</h3>
                            <ul className="list-disc ml-6 text-gray-700">
                                {job.requirements.map((requirement, index) => (
                                    <li key={index}>{requirement}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Responsibilities */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">Responsibilities</h3>
                            <ul className="list-disc ml-6 text-gray-700">
                                {job.responsibilities.map((responsibility, index) => (
                                    <li key={index}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div className="lg:w-1/3 mt-8 lg:mt-0">
                        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                            <p className="flex items-center mb-2">
                                <FaUser className="mr-2" />
                                {job.hr_name}
                            </p>
                            <p className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                {job.hr_email}
                            </p>
                        </div>

                        {/* Apply Button */}
                        <div className="text-center">
                            <Link to={`/jobApply/${job._id}`}>
                                <button
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-lg shadow-lg transition duration-300"

                                >
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
