import me from '../../assets/white-bg-me.png'
import html from '../../assets/html.webp'
import css from '../../assets/css.webp'
import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb-logo.png'
import node from '../../assets/node.png'
import { Line } from 'rc-progress'
import { Link } from 'react-router-dom'


const AboutMe = () => {
    return (
        <div className='max-w-screen-xl mx-auto pt-10'>
            <div className='flex justify-center my-14'>
                <h1 className='text-center inline-block border-b-2 text-[#FF4301] text-[35px] font-semibold'>About Me</h1>
            </div>
            <div className='flex justify-center'>
                <div className='border-r-2 pr-1 px-16'>
                    <img className='rounded-full h-[250px] w-[200px] mx-auto' src={me} alt="" />
                </div>
                <div className='flex-1 px-12'>
                    <p className='font-medium text-[30px]'>Md Hanif Biswas</p>
                    <p className='text-[#FF4301] text-[20px]'>Front-End developer</p>

                    <p className='mt-7 text-justify text-[18px]'>As a frontend web developer, I have been working with React.js for about four months. During this time, I have successfully completed eight frontend projects and three semi-backend projects, including an admin dashboard with user authentication using Firebase. Although I do not yet have professional experience, I am deeply passionate about my work and have undertaken these projects to test and improve my skills. My goal is to become a skilled developer as I continue to grow in my field. </p>
                </div>
            </div>

            <div className='flex justify-between mt-24 gap-5 pb-5 border-t-2 '>
                <div className=' flex-1'>
                    <h1 className='text-center   mb-1 text-[35px] font-bold'>Education</h1>
                    <div className="card w-full bg-neutral rounded-none text-neutral-content">
                        <div className="card-body ">

                            <div className='p-4 bg-black'>
                                <p className='text-xl font-normal'>2015</p>
                                <p className='mb-5 text-[20px] font-medium text-[#FF4301] '>Secondary School certificate</p>
                                <p>I completed my SSC in 2015 from Harishankar Pur J.C. School, which is located in my village. I earned a GPA of 4.61 in the Business Studies group.</p>
                            </div>

                            <div className='p-4 bg-black mt-5'>
                                <p className='text-xl font-normal'>2017</p>
                                <p className='mb-5 text-[20px] font-medium text-[#FF4301] '>Higher-Secondary School certificate</p>
                                <p>I completed my Higher Secondary School Certificate (HSSC) in 2017 from Shishukunja School and College. I earned a GPA of 4.41 in the Business Studies group.</p>
                            </div>

                            <div className='p-4 bg-black mt-5'>
                                <p className='text-xl font-normal'>2018 to present</p>
                                <p className='mb-5  text-[20px] font-medium text-[#FF4301] '>Bachelor of Business Administration(BBA)</p>
                                <p>After completing my Higher Secondary School Certificate (HSSC) I enrolled in a Bachelor of Business Administration (BBA) program. I am currently a student at Government K.C. College, and I have been pursuing my BBA since 2018</p>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='flex-1 border-l-2  pl-5'>
                    <h1 className='text-center  mb-1  text-[35px] font-bold'>Experience</h1>
                    <div className="card w-full bg-neutral rounded-none text-neutral-content">
                        <div className="card-body ">
                            <div className='p-4 bg-black'>
                                <p className='text-xl font-normal'>SEP 2023 to present</p>
                                <p className='mb-5 text-[20px] font-medium text-[#FF4301]'>Web-developer</p>
                                <p>I have been working with React since September 2023 and continue to do so. I have gained approximately 4 months of experience in working with React. I am dedicated to further honing my skills in React and am actively working hard to enhance my proficiency</p>
                            </div>

                            <div className='p-4 bg-black mt-5'>
                                <p className='text-xl font-normal'></p>
                                <p className='mb-5 text-[20px] font-medium text-[#FF4301]'>Front-end project</p>
                                <p>I have been working with React since September 2023 and continue to do so, accumulating about 4 months of valuable experience. During this time, I have successfully completed 8 front-end projects. I am dedicated to further honing my skills in React </p>
                            </div>

                            <div className='p-4 bg-black mt-5'>
                                <p className='text-xl font-normal'></p>
                                <p className='mb-5 text-[20px] font-medium text-[#FF4301]'>Semi full-stack project</p>
                                <p>I have been working with React since September 2023 and continue to do so, amassing about 4 months of valuable experience. During this time, I have  completed approximately 3 semi full-stack projects in addition to 8 front-end projects. I am actively working hard to enhance my proficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className='mt-16'>
                    <h1 className='text-center font-medium text-[35px] mb-1'>My skills</h1>
                    <hr className='bg-[#FF4301] text-center mx-auto w-[60px] h-2 rounded-full'></hr>
                    <div className="flex justify-between gap-10 mt-10">
                        <div className="flex-1">
                            <div className="card w-full bg-neutral text-neutral-content">
                                <div className="card-body items-center text-center gap-10">
                                    <div className="border-2 border-white rounded-md w-full">
                                        <p className='text-[#FF4301] font-bold text-[24px]'>Front-end</p>
                                        <div className="mx-5 mb-5 bg-black text-center flex justify-center rounded-md">

                                            <div className='py-11'>
                                                <ul className='flex gap-3'>
                                                    <li className="h-[50px] w-[50px]"><img src={html} alt="" /></li>
                                                    <li className="h-[50px] w-[50px]"><img src={css} alt="" /></li>
                                                    <li className="h-[50px] w-[50px]"><img src={tailwind} alt="" /></li>
                                                    <li className="h-[50px] w-[50px]"><img src={react} alt="" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-2 border-white rounded-md w-full">
                                        <p className='text-[#FF4301] font-bold text-[24px]'>Backend</p>
                                        <div className="mx-5 mb-5 bg-black text-center flex justify-center rounded-md">

                                            <div className='py-11'>
                                                <ul className='flex gap-3'>
                                                    <li className="h-[50px] w-[50px] "><img className='rounded-lg' src={express} alt="" /></li>
                                                    <li className="h-[50px] w-[50px]"><img className='rounded-lg' src={mongodb} alt="" /></li>
                                                    <li className="h-[50px] w-[50px]"><img className='rounded-lg' src={node} alt="" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="card w-full px-0 bg-neutral text-neutral-content">
                                <div className="card-body items-center ">


                                    <div className="w-full px-7 my-3">
                                        <div className="w-[430px] flex justify-between text-xl font-semibold] ">
                                            <p className="uppercase">html & css</p>
                                            <p className="uppercase text-right mr-12">85%</p>
                                        </div>
                                        <div className="">
                                            <div className="w-[510px] h-[50px] bg-black "></div>
                                            <div className=" w-[430px] h-[50px] bg-[#FF4301]  mt-[-50px] flex items-center">
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full px-7 my-3">
                                        <div className="w-[400px] flex justify-between text-xl font-semibold text-[] ">
                                            <p className="">Tailwind CSS</p>
                                            <p className="uppercase text-right mr-12">80%</p>
                                        </div>
                                        <div className="">
                                            <div className="w-[510px] h-[50px] bg-black "></div>
                                            <div className="w-[400px] h-[50px] bg-[#FF4301]  mt-[-50px]"></div>
                                        </div>
                                    </div>

                                    <div className="w-full px-7 my-3">
                                        <div className="w-[255px] flex justify-between text-xl font-semibold  ">
                                            <p className="">Javascript</p>
                                            <p className="uppercase text-right mr-12">50%</p>
                                        </div>
                                        <div className="">
                                            <div className="w-[510px] h-[50px] bg-black "></div>
                                            <div className="w-[255px] h-[50px] bg-[#FF4301]  mt-[-50px]"></div>
                                        </div>
                                    </div>

                                    <div className=" w-full px-7 my-3">
                                        <div className="w-[305px] flex justify-between text-xl font-semibold  ">
                                            <p className="uppercase">React Js</p>
                                            <p className="uppercase text-right mr-12">60%</p>
                                        </div>
                                        <div className="">
                                            <div className="w-[510px] h-[50px] bg-black "></div>
                                            <div className="w-[305px] h-[50px] bg-[#FF4301]  mt-[-50px]"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to='/contact'><button className="my-10 px-5 btn rounded-full hover:text-[#FF4301] text-white hover:bg-[#201F1B] bg-[#FF4301] mt-24 hover:border-[#FF4301]">Contact Me</button></Link>
            </div>
        </div>
    );
};

export default AboutMe;