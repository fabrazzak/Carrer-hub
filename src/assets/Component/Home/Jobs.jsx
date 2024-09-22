import React, { useEffect, useState } from 'react';
import Job from './job';

const Jobs = () => {
    const [jobs,setJobs]=useState([]);
    const [showJobs,setShowJobs]=useState("4")


    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))

    },[])

   

    const setShowAllData = () => {
        setShowJobs(jobs.length)
        console.log(setShowJobs(jobs.length))
    }



    return (
        <div className='container mx-auto py-8'>

           <div className='flex flex-col justify-center items-center gap-6'>
                <h2 className='text-4xl font-bold '>Featured Jobs</h2>
                <p className='text-xl '>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div >

          <div className='grid  grid-cols-2   gap-10 mt-10'> 
                {
                    jobs.slice(0,showJobs).map(job => <Job job={job} key={job.id} ></Job>)
                }

          </div>

          <div className='flex justify-center items-center text-center mt-6' >
                {jobs.length == showJobs ? "" : <button className='btn' onClick={setShowAllData}>Show All </button>}
          </div>



        </div>
    );
};

export default Jobs;