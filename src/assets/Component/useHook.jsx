import { json } from "react-router-dom";

const getAppliedJob=()=>{

    const localServer= localStorage.getItem("job-application");

    if(localServer){
        return JSON.parse(localServer)
    }
    return [];
    


}


 const setAppliedJob = (id)=>{

     const storedAppliedJob = getAppliedJob();

     const exists = storedAppliedJob.find(jobId => jobId == id);

     if(!exists){
        storedAppliedJob.push(id);
         localStorage.setItem("job-application", JSON.stringify(storedAppliedJob) )
         return true
     }
     else{
       return false
     }




 }

export { getAppliedJob , setAppliedJob}