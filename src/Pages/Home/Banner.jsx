import { Link } from 'react-router-dom';
import logo from '../../assets/Screenshot_1.png'
import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
    return (
        <div className=' mx-auto'>

            <div className='flex justify-between items-center'>
                <div className='flex-1'> <img src={logo} alt="" /></div>
                <div className='pr-14 text-left flex-1 mt-28'>
                    <p className=' uppercase text-[18px] font-semibold'>Hello,This is </p>
                    <h1 className=' uppercase font-semibold text-[60px]'>Md Hanif Biswas</h1>
                    <p className='uppercase font-semibold text-[20px]'>i am a frond-end developer</p>
                    <p className='text-[15px] font-light mt-4'>I am a front-end React.js developer from Jhenaidah, Dhaka, Bangladesh. I try to understand the use and features of every website and aim to make a simple and user-friendly website. I am good at React.js and comfortable with Tailwind CSS. My mission is learning new web technologies and giving modern, user-friendly, bug-free websites to clients.</p>

                    <Link>
                        <button className="btn rounded-full hover:text-[#FF4301] text-white hover:bg-[#201F1B] bg-[#FF4301] mt-24 hover:border-[#FF4301]">
                            Download Resume
                            <FaArrowDown></FaArrowDown>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Banner;