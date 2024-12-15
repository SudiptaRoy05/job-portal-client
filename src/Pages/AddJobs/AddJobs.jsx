import { useNavigate } from 'react-router-dom';
import UseAuth from "../../Hooks/UseAuth";
import Swal from 'sweetalert2';
const { user } = UseAuth();

export default function AddJobs() {


    const navigate = useNavigate();
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const initialData = Object.fromEntries(form);
        const { minSalary, maxSalary, salaryCurrency, ...newJob } = initialData;

        newJob.salaryRange = { minSalary, maxSalary, salaryCurrency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob),
        })
            .then((res) => res.json())
            .then((data) => {
                // Success alert
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'The job was added successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        timer: 3000,
                    });
                    e.target.reset();
                    navigate('/');
                    // console.log(data);
                }

            })
            .catch((error) => {
                // Error alert
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an issue adding the job. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Retry',
                });
                console.error(error);
            });
    };
    return (
        <div className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Add Job</h1>
            <form onSubmit={handleAddJob} className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-purple-600">Job Title</label>
                        <input
                            name="jobTitle"
                            type="text"
                            placeholder="Job Title"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">Location</label>
                        <input
                            name="location"
                            type="text"
                            placeholder="Location"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">Job Type</label>
                        <select
                            name="jobType"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                            required
                        >
                            <option value="">Select Job Type</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">Category</label>
                        <select
                            name="category"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                            <option value="Design">Design</option>
                            <option value="Human Resources">Human Resources</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">Job Posting Date</label>
                        <input
                            name="date"
                            type="date"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                            required
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div>
                            <label className="block text-sm font-medium text-purple-600">Min Salary</label>
                            <input
                                name="minSalary"
                                type="number"
                                placeholder="Min Salary"
                                className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-purple-600">Max Salary</label>
                            <input
                                name="maxSalary"
                                type="number"
                                placeholder="Max Salary"
                                className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-purple-600">Currency</label>
                            <select
                                name="salaryCurrency"
                                className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                                required
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="INR">INR</option>
                                <option value="AUD">AUD</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">Job Description</label>
                        <textarea
                            name="jobDescription"
                            placeholder="Job Description"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full h-28 transition ease-in-out"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">Company Name</label>
                        <input
                            name="companyName"
                            type="text"
                            placeholder="Company Name"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">Requirements</label>
                        <textarea
                            name="requirements"
                            placeholder="Enter each requirement on a new line"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full h-28 transition ease-in-out"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">Responsibilities</label>
                        <textarea
                            name="responsibilities"
                            placeholder="Enter each responsibility on a new line"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full h-28 transition ease-in-out"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">HR Email</label>
                        <input
                            name="hrEmail"
                            type="email"
                            defaultValue={user?.email}
                            placeholder="HR Email"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">HR Name</label>
                        <input
                            name="hrName"
                            type="text"
                            placeholder="HR Name"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600">Company Logo URL</label>
                        <input
                            name="companyLogo"
                            type="url"
                            placeholder="Company Logo URL"
                            className="border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg p-3 w-full transition ease-in-out"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all"
                >
                    Add Job
                </button>
            </form>
        </div>
    );
}
