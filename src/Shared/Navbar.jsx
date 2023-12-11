import { Link } from "react-router-dom";


const Navbar = () => {
    const links = <div className="text-[20px] flex gap-4"> 
        <Link to='/'><li className="px-6 py-4 rounded-full  hover:bg-[#FF4301]">Home</li></Link>
        <Link to='/resume'><li className="px-6 py-4 rounded-full hover:bg-[#FF4301]">My Resume</li></Link>
        <Link to='/about'><li className="px-6 py-4 rounded-full hover:bg-[#FF4301]">About Me</li></Link>
        <Link to='/contact'><li className="px-6 py-4 rounded-full hover:bg-[#FF4301]">Contact Me</li></Link>

    </div>
    return (
        <div>
            <div className=" flex justify-between items-center navbar max-w-screen-xl">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-[30px]">Md<p className="-mx-2 text-[#FF4301] text-[30px] font-extrabold">.</p>Hanif</a>
                </div>
                
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;