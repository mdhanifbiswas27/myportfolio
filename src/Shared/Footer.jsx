import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className=" py-6 flex justify-between items-center">
                <div>
                    <p className="text-[14px] font-light text-[#FF4301]">&copy;All Rights Are Reserved by DeveloperHanif</p>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <a href="https://github.com/mdhanifbiswas27" target="_blank" rel="noopener noreferrer"><li className="h-[45px] w-[45px] flex justify-center items-center bg-white text-[#FF4301] hover:bg-[#FF4301] hover:text-white text-[24px] rounded-full"><FaGithub></FaGithub></li></a>

                        <a href="https://www.linkedin.com/in/md-hanif-biswas-b6301927b/" target="_blank" rel="noopener noreferrer"><li className="h-[45px] w-[45px] flex justify-center items-center bg-white text-[#FF4301] hover:bg-[#FF4301] hover:text-white text-[24px] rounded-full"><FaLinkedin ></FaLinkedin ></li></a>

                       <a href="https://www.facebook.com/mdhanifbiswas2/" target="_blank" rel="noopener noreferrer"><li className="h-[45px] w-[45px] flex justify-center items-center bg-white text-[#FF4301] hover:bg-[#FF4301] hover:text-white text-[24px] rounded-full"><FaFacebook /></li></a>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;