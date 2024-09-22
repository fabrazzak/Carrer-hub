

const AppliedJob = ({dJob}) => {
    
    const { company_name, job_title, job_type, location, logo, remote_or_onsite, salary, experiences
        , educational_requirements, contact_information, job_description, job_responsibility } = dJob;

    return (
        <div className="my-10">

            <div className=" grid grid-cols-4 bg-base-100  shadow-xl p-8 ">
                <figure className="px-10 pt-10 col-span-1 ">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="flex flex-col justify-center col-span-3">
                    <div className="flex ">
                        <div className="flex-grow flex flex-col gap-3">
                            <h2 className="card-title">{job_title}</h2>
                            <p>{company_name}</p>
                            <div className="gap-8 flex ">
                                <button className="btn ">{remote_or_onsite}</button>
                                <button className="btn ">{remote_or_onsite}</button>
                            </div>
                            <div className="flex gap-10">
                                <p>{location}</p>
                                <p> Salary: {salary}</p>
                            </div>
                        </div>
                        <div className="card-actions">
                            <button className="btn">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AppliedJob;