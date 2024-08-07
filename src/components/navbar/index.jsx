import { useState } from 'react';
import { motion } from 'framer-motion';
// import Hamburger-react 
import { Spin as Hamburger } from 'hamburger-react';
// import icons 
import { IoCaretDown } from "react-icons/io5";
import { IoCaretUpOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isTestOpen, setTestOpen] = useState(false);

    const handleTestClick = () => {
        setTestOpen(!isTestOpen);
    };

    return (
        <>
            <nav className="bg-[#FFF] py-4 max-md:hidden">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <div className="flex items-center gap-36 relative">
                        <div className="flex items-center gap-1 cursor-pointer" onClick={handleTestClick}>
                            <p className='text-lg font-medium text-[#333]'>Test Topshirish</p>
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: isTestOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className='mt-1'
                            >
                                {isTestOpen ? <IoCaretUpOutline /> : <IoCaretDown />}
                            </motion.div>
                        </div>
                        {isTestOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-12 w-[9rem] bg-white shadow-md rounded-md flex flex-col gap-1"
                            >
                                <NavLink to="" className='text-lg font-medium text-[#333] text-center hover:bg-[#6d6d6d3e] py-1 rounded'>Junior</NavLink>
                                <NavLink to="" className='text-lg font-medium text-[#333] text-center hover:bg-[#6d6d6d3e] py-1 rounded'>Middle</NavLink>
                                <NavLink to="" className='text-lg font-medium text-[#333] text-center hover:bg-[#6d6d6d3e] py-1 rounded'>Senior</NavLink>
                            </motion.div>
                        )}
                        <NavLink to={"/login"} className="">
                            <LuUser2 className='text-4xl mt-1 border-2 border-[#333] rounded-full p-1 cursor-pointer' />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <nav className="bg-[#FFF] py-4 max-md:block hidden">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <div className="toggle">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;