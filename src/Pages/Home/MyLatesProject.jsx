import project1 from '../../assets/second-1.png'
import project2 from '../../assets/second-2.png'
import project3 from '../../assets/second-3.png'
import { BsBrowserChrome } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const MyLatesProject = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-14'>
            <h1 className='mt-6 text-center text-[35px] font-semibold '>Discover My Latest Works!</h1>
            <p className='mb-9 text-center text-[#FF4301]'>which project i have completed recently</p>
            <div className='grid grid-cols-3 mx-auto'>
                <div className=' mx-auto'>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={project1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Pure Bond</h2>
                            <p>A matrimony website.You can search your partner.please visit!</p>
                            <div className="card-actions ">
                                <ul className=''>
                                    <a href="https://my-twelve-assignment.web.app/"> <li className=''><button className="btn btn-xs bg-transparent hover:bg-transparent outline-none mt-2  border-[#FF4301] text-[white]"><BsBrowserChrome></BsBrowserChrome> Live link </button></li></a>
                                    <a href="https://github.com/mdhanifbiswas27/Matrimony"> <li className=''><button className="btn btn-xs bg-transparent hover:bg-transparent outline-none mt-2  border-[#FF4301] text-[white]"><FaGithub></FaGithub>Client-side code </button></li></a>
                                    <a href="https://github.com/mdhanifbiswas27/Matrimony-server"> <li className=''><button className="btn btn-xs bg-transparent hover:bg-transparent outline-none mt-2  border-[#FF4301] text-[white]"><FaGithub></FaGithub>Server-side code </button></li></a>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mx-auto'>
                    <div className="card w-96 bg-gray-400 shadow-xl image-full">
                        <figure><img src={project2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Help-the-hunger</h2>
                            <p>It'a social website.Here you can donate and collect food for free!</p>
                            <div className="card-actions ">
                                <ul className=''>
                                    <a href="https://my-assigment-eleven.web.app/"> <li className=''><button className="btn btn-xs bg-transparent hover:bg-transparent outline-none mt-2  border-[#FF4301] text-[white]"><BsBrowserChrome></BsBrowserChrome> Live link </button></li></a>
                                    <a href="https://github.com/mdhanifbiswas27/Help-the--hunger"> <li className=''><button className="btn btn-xs bg-transparent hover:bg-transparent outline-none mt-2  border-[#FF4301] text-[white]"><FaGithub></FaGithub>Client-side code </button></li></a>
                                    <a href="https://github.com/mdhanifbiswas27/help-the-hunger-sever"> <li className=''><button className="btn btn-xs bg-transparent hover:bg-transparent outline-none mt-2  border-[#FF4301] text-[white]"><FaGithub></FaGithub>Server-side link </button></li></a>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mx-auto'>
                    <div className="card w-96  shadow-xl image-full">
                        <figure><img src={project3} alt="Shoes" /></figure>
                        <div className="card-body bg-[#2B3440] bg-opacity-60">
                            <h2 className="card-title">Modern shop</h2>
                            <p>It's a electric shop.Here You can buy your necessary electronic product.</p>
                            <div className="card-actions ">
                                <ul className=''>
                                    <a href="https://lively-cupcake-6e72f2.netlify.app/"> <li className=''><button className="btn btn-xs bg-transparent hover:bg-transparent outline-none mt-2  border-[#FF4301] text-[white]"><BsBrowserChrome></BsBrowserChrome> Live link </button></li></a>
                                    <a href="https://github.com/mdhanifbiswas27/Modern_shop"> <li className=''><button className="btn btn-xs bg-transparent hover:bg-transparent outline-none mt-2  border-[#FF4301] text-[white]"><FaGithub></FaGithub> Live link </button></li></a>
                                    <a href="https://github.com/mdhanifbiswas27/Modern_shop-server"> <li className=''><button className="btn btn-xs bg-transparent hover:bg-transparent outline-none mt-2  border-[#FF4301] text-[white]"><FaGithub></FaGithub> Live link </button></li></a>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyLatesProject;