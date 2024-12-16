import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function ViewApplications() {
    const applications = useLoaderData(); // Fetch applications via loader
    const [updatedApplications, setUpdatedApplications] = useState(applications); // Local state for updated statuses

    // Function to handle status updates
    const handleStatusUpdate = async (id, newStatus) => {
        try {
            // Update the status in the backend
            const response = await fetch(`http://localhost:5000/applications/${id}/status`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }), // Send new status to backend
            });

            if (response.ok) {
                // Update the local state with the new status
                setUpdatedApplications((prev) =>
                    prev.map((app) =>
                        app._id === id ? { ...app, status: newStatus } : app
                    )
                );
                alert("Status updated successfully!");
            } else {
                console.error("Failed to update status");
                alert("Failed to update status");
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return (
        <div className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 min-h-screen">
            <h1 className="text-3xl font-bold text-purple-600 text-center mb-8">
                Applications for this Job: {updatedApplications.length}
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
                        {updatedApplications.map((app, idx) => (
                            <tr
                                key={app._id}
                                className={`${
                                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
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
                                        <option value="Approved">Approved</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                    <button
                                        onClick={() =>
                                            handleStatusUpdate(app._id, "Reviewed")
                                        }
                                        className="px-4 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                        Mark as Reviewed
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
