import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "../useHook";
import AppliedJob from "./AppliedJob";



const Applied = () => {

    const [available, setAvailable] = useState([]);
    const [allJobs,setAllJobs]=useState([]);

    const jobs = useLoaderData();
    useEffect(() => {

        const storedJobs = getAppliedJob()
        const displayJobs = jobs.filter(job => storedJobs.includes(job.id.toString()))
        setAvailable(displayJobs)
        setAllJobs(displayJobs)

    }, [])





    const onsiteHandle = (filter) => {        

         if (filter === 'Onsite') {
             const onsiteJob = allJobs.filter(filterJob => filterJob.remote_or_onsite == filter);
            setAvailable(onsiteJob);        

        }
    }  


    const remoteJobHandle = (filter) => {   

           if (filter === 'Remote') {
               const remoteJob = allJobs.filter(filterJob => filterJob.remote_or_onsite == filter);
            setAvailable(remoteJob)
          
        }  
     }   
    const allJobHandle = (filter) => {  

           if (filter === 'All') {
            
               setAvailable(allJobs)
          
        }  
     }
    return (
        <div>


            <div className="flex bg-blue-50 justify-center py-16">
                <h1 className="text-4xl font-bold ">Applied Jobs:  {available.length} </h1>
            </div>

            <div className="flex justify-end container w-5/6">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Filter Jobs </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => allJobHandle("All")}><a>All</a></li>
                        <li onClick={() => remoteJobHandle("Remote")}><a>Remote</a></li>
                        <li onClick={()=> onsiteHandle("Onsite")}><a>Onsite</a></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto">
                <div className=" grid grid-cols-1 gap-6 w-4/6 mx-auto ">
                    {
                        available.map(dJob => <AppliedJob dJob={dJob} key={dJob.id}></AppliedJob>)
                    }
                </div>

            </div>




        </div>
    );
};

export default Applied;