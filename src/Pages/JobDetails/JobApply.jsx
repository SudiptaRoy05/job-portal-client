import { useParams } from "react-router-dom";

export default function JobApply() {
    const id = useParams();
    // console.log(id)
    const submitJobApplication = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const linkedin = form.get('linkedin');
        const github = form.get('github');
        const cv = form.get('resume');

        const application = { linkedin, github, cv };
        console.log(application);


    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-6">
            <div className="bg-white w-full max-w-lg rounded-lg shadow-lg overflow-hidden">
                <div className="px-8 py-6 border-b">
                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        Apply for the Job
                    </h2>
                    <p className="text-center text-gray-600 mt-2">
                        Showcase your skills and experience by providing the required details.
                    </p>
                </div>
                <form onSubmit={submitJobApplication} className="p-8 space-y-6">
                    {/* LinkedIn URL */}
                    <div className="form-control">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            LinkedIn Profile URL
                        </label>
                        <input
                            type="url"
                            name="linkedin"
                            placeholder="https://www.linkedin.com/in/your-profile"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* GitHub URL */}
                    <div className="form-control">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            GitHub Profile URL
                        </label>
                        <input
                            type="url"
                            name="github"
                            placeholder="https://github.com/your-profile"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Resume URL */}
                    <div className="form-control">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Resume URL
                        </label>
                        <input
                            type="url"
                            name="resume"
                            placeholder="https://your-resume-link.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-all"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
