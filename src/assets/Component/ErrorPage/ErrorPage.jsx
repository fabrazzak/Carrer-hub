import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    const backHome=()=>{
        navigate(-1);
        
    }
    return (
        <div className="flex justify-center flex-col gap-6 items-center min-h-screen">

            <h2 className="text-4xl font-bold ">Oops !!!</h2>
            <div><button className="btn text-xl font-bold " onClick={backHome}>Back Home page</button></div>
            
        </div>
    );
};

export default ErrorPage;