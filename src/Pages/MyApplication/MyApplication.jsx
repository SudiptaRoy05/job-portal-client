import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";

export default function MyApplication() {
    const { user } = UseAuth();
    const [jobs, setJobs] = useState([]);
    console.log(jobs)

    useEffect(() => {
        // fetch(`http://localhost:5000/jobApplications?email=${user?.email}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setJobs(data);
        //     });

        axios.get(`http://localhost:5000/jobApplications?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setJobs(res.data)
                console.log(res.data)
            })


    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobApplications/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your job application has been deleted.',
                                'success'
                            );
                            // Update the state to remove the deleted job
                            setJobs(jobs.filter((job) => job._id !== id));
                        } else {
                            Swal.fire(
                                'Error!',
                                'Failed to delete the job application.',
                                'error'
                            );
                        }
                    })
                    .catch((error) => {
                        Swal.fire('Error!', error.message, 'error');
                    });
            }
        });
    };

    return (
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">My Job Applications</h1>
            {jobs.length > 0 ? (
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full bg-white rounded-lg border-collapse overflow-hidden">
                        <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Company</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold">Logo</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">LinkedIn</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">GitHub</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Resume</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                        } hover:bg-gray-100 transition-colors`}
                                >
                                    <td className="px-6 py-4 text-sm text-gray-700">{job.title}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{job.company}</td>
                                    <td className="px-6 py-4 text-center">
                                        <img
                                            src={job.company_logo}
                                            alt={`${job.company} Logo`}
                                            className="w-12 h-12 object-cover mx-auto rounded-full shadow-md"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <a
                                            href={job.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            View LinkedIn
                                        </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a
                                            href={job.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            View GitHub
                                        </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a
                                            href={job.cv}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Resume
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => handleDelete(job._id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-all"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-600 mt-12">
                    You have not applied to any jobs yet.
                </p>
            )}
        </div>
    );
}
