
import heroImg from "../../images/user.png"
const Banner = () => {




    return (
        <div>

            <div className="bg-blue-50 "  >
                <div className=" grid grid-cols-2  items-center container mx-auto  " >

                    <div className="flex flex-col justify-center items-center text-center  ">
                        <h1 className="text-7xl font-bold">One Step Closer To Your Dream Job</h1>
                        <p className="py-6 text-xl">
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <div><button className="btn text-xl font-bold   btn-primary">Get Started</button></div>
                    </div>
                    <div>
                        <img
                            src={heroImg}
                            className="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;