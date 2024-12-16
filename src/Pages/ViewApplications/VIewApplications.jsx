import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function ViewApplications() {
    const applications = useLoaderData(); // Fetch applications via loader
    // const [updatedApplications, setUpdatedApplications] = useState(applications); // Local state for updated statuses

    const handleStatusUpdate = (id, newStatus) => {
        console.log(id, newStatus);
        const data = {
            status: newStatus
        };
        fetch(`http://localhost:5000/jobApplications/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Status Updated!',
                        text: `The application status has been updated to "${newStatus}".`,
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                }
                console.log(data);
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update the application status. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Retry',
                });
                console.error(error.message);
            });
    };

    return (
        <div className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 min-h-screen">
            <h1 className="text-3xl font-bold text-purple-600 text-center mb-8">
                Applications for this Job: {applications.length}
            </h1>

            <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">
                                Applicant Email
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app, idx) => (
                            <tr
                                key={app._id}
                                className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-gray-100`}
                            >
                                <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                                    {idx + 1}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {app.applicant_email}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {app.status || "Pending"} {/* Default status */}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    <select
                                        className="mr-2 px-4 py-2 bg-purple-50 text-gray-700 rounded shadow"
                                        onChange={(e) =>
                                            handleStatusUpdate(app._id, e.target.value)
                                        }
                                        defaultValue={app.status || "Pending"}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Under Review">Under Review</option>
                                        <option value="Set Interview">Set Interview</option>
                                        <option value="Hire">Hire</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
