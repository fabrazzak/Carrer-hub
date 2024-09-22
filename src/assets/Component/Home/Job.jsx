import { Link } from "react-router-dom";


const Job = ({ job, viewDetails }) => {
    const {company_name,id, job_title,job_type,location,logo,remote_or_onsite,salary,experiences
        ,educational_requirements,contact_information}=job;
  
    return (
        <div>

            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={logo}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center flex gap-6 text-center">
                    <h2 className="card-title"> {job_title} </h2>
                    <p>{company_name}</p>
                     <div className="flex gap-10">
                        <button className="btn ">{remote_or_onsite}</button>
                        <button className="btn ">{remote_or_onsite}</button>
                     </div>
                    <div className="flex gap-10">
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`jobs/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Job;