import { useEffect, useState } from "react"
import HotjobsCard from "./HotjobsCard";

export default function Hotjobs() {
  const [jobs, setJobs] = useState([]);
  // console.log(jobs)
  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      })
  }, [])
  return (
    <div>
      <p className="text-center font-bold text-2xl pb-3">Jobs : {jobs.length}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-6">
        {
          jobs.map(job => <HotjobsCard key={job._id} job={job}></HotjobsCard>)
        }
      </div>
    </div>
  )
}
