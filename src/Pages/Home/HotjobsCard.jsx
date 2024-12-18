import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HotjobsCard({ job }) {
    const { _id, title, location, salaryRange, description, company, requirements, company_logo } = job
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-2">
                <div className="flex gap-2">
                    <figure>
                        <img
                            className="w-14"
                            src={company_logo}
                            alt={title} />
                    </figure>
                    <div>
                        <h4 className="text-2xl">{company}</h4>
                        <p className="flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-red-500" />
                            {location}
                        </p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className=" text-lg font-bold">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="flex gap-2 flex-wrap">
                        {
                            requirements.map((req, idx) => <p className="border text-center p-1 bg-slate-200 rounded-md text-slate-500" key={idx}>{req}</p>)
                        }
                    </div>
                    <div className="card-actions ">
                        <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                        <Link to={`/jobs/${_id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
