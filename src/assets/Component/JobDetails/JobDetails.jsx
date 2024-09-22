import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAppliedJob } from "../useHook";





const JobDetails = () => {

    const jobs = useLoaderData([]);
    
    const {id}=useParams();


    console.log(jobs,id)

    


     const job= jobs.find(job => job.id == id)

    const { company_name,  job_title, job_type, location, logo, remote_or_onsite, salary, experiences
        , educational_requirements, contact_information, job_description, job_responsibility } = job;
     
    const applyJob=()=>{
        const errorMessage = setAppliedJob(id); 

        if(errorMessage){
            toast("Job is Apply Done");
        }
        else{

            toast(<>
                <div role="alert" className="alert alert-error">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Already Applied </span>
                </div>
            
            </>);


        }

        
        
                   
     
        

    }
  



    return (
        <div className="">

            <h2 className="text-4xl font-bold text-center bg-blue-50 py-20">Job Details  </h2>
            <div className="grid grid-cols-3 gap-10 container mx-auto py-20 ">
                <div className="col-span-2">
                    <p className="text-lg "><span className="font-bold">Job Description: </span> 
                        {job_description }
                    </p>
                    <p className="text-lg  mt-8"><span className="font-bold">Job Responsibility: </span> 
                        {job_responsibility }
                    </p>
                    <p className="text-lg  mt-8"><span className="font-bold">Educational Requirements: </span>                      
                       
                    </p>
                    <p className="  mt-8"> {educational_requirements}</p>
                    
                    <p className="text-lg  mt-8"><span className="font-bold">experiences</span>                      
                       
                    </p>
                    <p className="  mt-8"> {experiences}</p>
                </div>
                <div className="col-span-1 flex flex-col gap-6">

                    <div className="card bg-blue-50 ">
                        
                        <div className="card-body ">
                            <h2 className="card-title text-2xl font-bold mb-3">Job Details</h2>
                            <hr />

                            <p className="pt-3"><span className="font-bold text-xl ">Salary:</span> {salary} Per Mother </p>

                            <p><span className="font-bold text-xl">Job Title:</span> {job_title}  </p>

                            <h2 className="card-title mt-6 mb-3 text-2xl font-bold ">Contact Information</h2>
                                <hr />
                            <p className="pt-3"><span className="font-bold text-xl">Phone:</span> {contact_information.phone}  </p>
                            <p><span className="font-bold text-xl">Email</span> {contact_information.email}  </p>
                            <p><span className="font-bold text-xl">Address:</span> {contact_information.address}  </p>

                         

                            
                        </div>
                    </div>
                    <button onClick={applyJob} className="btn btn-primary text-xl font-bold ">Apply Now </button>

                    <ToastContainer />

                </div>
            </div>
            
        </div>
    );
};

export default JobDetails;