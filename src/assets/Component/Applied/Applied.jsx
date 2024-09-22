import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "../useHook";
import AppliedJob from "./AppliedJob";



const Applied = () => {
    const [storedJob,setStoredJob]=useState([])
    const  [avaiable,setAvailable]=useState
    const jobs = useLoaderData()
    useEffect(()=>{
        setStoredJob(getAppliedJob())
    },[])

    const displayJobs= jobs.filter(job => storedJob.includes(job.id.toString()))





    return (
        <div>


           <div className="flex bg-blue-50 justify-center py-16">
                <h1 className="text-4xl font-bold ">Applied Jobs:  {displayJobs.length} </h1>
           </div>

           <div className="flex justify-end container w-5/6">
                <select className="select select-info w-full max-w-xs text-lg font-bold ">
                    <option disabled selected>Filter</option>
                    <option>Remote </option>
                    <option>Onsite</option>
                    <option> Remote and Onsite </option>
                    
                </select>
           </div>

            <div className="container mx-auto">
                <div className=" grid grid-cols-1 gap-6 w-4/6 mx-auto ">
                    {
                        displayJobs.map(dJob => <AppliedJob dJob={dJob} key={dJob.id}></AppliedJob>)
                    }
                </div>

           </div>

            


        </div>
    );
};

export default Applied;