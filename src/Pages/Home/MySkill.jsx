import html from '../../assets/html.webp'
import css from '../../assets/css.webp'
import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb-logo.png'
import node from '../../assets/node.png'

const MySkill = () => {
    return (
        <div className='my-10 max-w-screen-xl mx-auto'>
            <div>
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
    );
};

export default MySkill;