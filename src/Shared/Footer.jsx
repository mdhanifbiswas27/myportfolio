import { FaGithub,FaFacebook,FaLinkedin  } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className=" py-6 flex justify-between items-center">
                <div>
                    <p className="text-[14px] font-light text-[#FF4301]">&copy;All Rights Are Reserved by DeveloperHanif</p>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li className="h-[45px] w-[45px] flex justify-center items-center bg-white text-[#FF4301] hover:bg-[#FF4301] hover:text-white text-[24px] rounded-full"><FaGithub></FaGithub></li>
                        <li className="h-[45px] w-[45px] flex justify-center items-center bg-white text-[#FF4301] hover:bg-[#FF4301] hover:text-white text-[24px] rounded-full"><FaLinkedin ></FaLinkedin ></li>
                        <li className="h-[45px] w-[45px] flex justify-center items-center bg-white text-[#FF4301] hover:bg-[#FF4301] hover:text-white text-[24px] rounded-full"><FaFacebook /></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;