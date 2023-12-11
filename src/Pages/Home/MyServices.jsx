import { BsFiletypePsd } from "react-icons/bs";
import { IoLogoFigma } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { Line } from "rc-progress";
import { Link } from "react-router-dom";

const MyServices = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-32 mb-10">
            <p className="text-center text-[35px] font-bold text-[#FF4301]">My Services</p>
            <p className="text-center text-[24px] font-normal">I try to understand what customers need and work to make them happy.</p>
            <div className="mt-16 flex justify-around">
                <div>
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">

                            <p className="flex text-[35px] text-[#FF4301]"><BsFiletypePsd></BsFiletypePsd><IoLogoFigma></IoLogoFigma></p>
                            <p className="uppercase font-medium text-[20px]">Psd/figma to html</p>
                            <p className="text-[15px] font-light text-justify">I can convert any PSD or figma design to html static website.Provide your dream design i will make it really.My all design are user-friendly and responsive to all devises!</p>
                            <Link to='contact'><button className="bg text-[#FF4301] font-bold text-lg">Hire Me</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">

                            <p className="flex text-[40px] text-[#FF4301]"><FaLaptopCode></FaLaptopCode></p>
                            <p className="uppercase font-medium text-[20px]">Frond-end development</p>
                            <p className="text-[15px] font-light text-justify">"Tell me your dream, and I will code it with React. I am an expert in React.js, and I can create almost any kind of website.Let's turn your vision into a digital reality!</p>
                            <Link to='contact'><button className="bg text-[#FF4301] font-bold text-lg">Hire Me</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;