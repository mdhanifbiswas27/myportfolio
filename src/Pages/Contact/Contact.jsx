import logo from '../../assets/Screenshot_1.png'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className=" text-center text-[35px] font-bold mt-9 text-[#FF4301]">Contact Me</h1>
            <p className="text-center text-[20px] font-normal ">Feel free to ask if you have any more questions or if there's anything specific you'd like to discuss!</p>

            <div className='grid grid-cols-5 mt-24'>
                <div className='col-span-2'>
                    {/* <img className='rounded-full' src={logo} alt="" /> */}
                    <div>
                        <h1 className='uppercase text-[30px] font-extrabold'>md hanif biswas</h1>
                        <p className='font-normal text-[20px] text-[#FF4301]'>FROND-END DEVELOPER</p>

                        <div className='flex items-center gap-4 mt-16'>
                           <div>
                            <FaLocationDot className='text-[#FF4301] text-[30px]'></FaLocationDot>
                           </div>
                           <div className=''>
                               <p>Location:</p>
                               <p className='mt-[-4px]'>Jhenaidah,Dhaka,Bangladesh</p>
                           </div>
                        </div>
                        <div className='flex items-center gap-4 mt-10'>
                           <div>
                            <BsFillTelephoneFill className='text-[#FF4301] text-[30px]'></BsFillTelephoneFill>
                           </div>
                           <div>
                               <p>Phone:</p>
                               <p className='mt-[-4px]'>01779-363537</p>
                           </div>
                        </div>
                        <div className='flex items-center gap-4 mt-10'>
                           <div>
                            <MdEmail className='text-[#FF4301] text-[30px]'></MdEmail>
                           </div>
                           <div>
                               <p>Email:</p>
                               <p className='mt-[-4px]'>mdhanifbiswas27@gmail.com</p>
                           </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 border-l-2 pl-10 border-[#FF4301]'>
                    <form action="" className='w-full px-9 '>
                        <div className=''>
                            <p className='ml-2 text-[18px] font-normal text-white'>Write Your Name:</p>
                            <input className='px-2 outline-none border-2 border-[#FF4301] rounded-full bg-[#2B3440] w-full h-12' type="text" placeholder=' Name' />
                        </div>

                        <div className='mt-5'>
                            <p className='ml-2 text-[18px] font-normal text-white'>Write Your Email:</p>
                            <input className='px-2 outline-none border-2 border-[#FF4301] rounded-full bg-[#2B3440] w-full h-12' type="text" placeholder=' Email' />
                        </div>

                        <div className='px-2 mt-5'>
                            <p className='ml-2 text-[18px] font-normal text-white'>Write Your Message:</p>
                            <textarea className='px-2 outline-none border-2 border-[#FF4301] rounded-md bg-[#2B3440] w-full h-24' placeholder='Write Your sms!'></textarea>
                            
                        </div>
                        <input className="btn rounded-full hover:text-[#FF4301] text-white hover:bg-[#201F1B] bg-[#FF4301] mt-8 uppercase px-9 ml-3 hover:border-[#FF4301]" type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;