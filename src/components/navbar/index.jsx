import { useState } from 'react';
import { motion } from 'framer-motion';
import { Spin as Hamburger } from 'hamburger-react';
import { IoCaretDown, IoCaretUpOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isTestOpen, setTestOpen] = useState(false);

    const handleTestClick = () => {
        setTestOpen(!isTestOpen);
    };

    return (
        <>
            <nav className="w-full fixed top-0 left-0 z-50 bg-[#FFF] py-4 max-md:hidden">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-20">
                        <div className="logo">
                            <NavLink to={"/"} className='text-[#03346E] text-3xl'>LOGO</NavLink>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer relative" onClick={handleTestClick}>
                            <p className='text-lg font-medium text-[#03346E] mt-1'>Test topshirish</p>
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: isTestOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className='mt-1'
                            >
                                {isTestOpen ? (
                                    <IoCaretUpOutline size={20} className='text-[#03346E] mb-1' />
                                ) : (
                                    <IoCaretDown size={20} className='text-[#03346E] mt-1' />
                                )}
                            </motion.div>
                            {isTestOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute top-[50px] left-[-5px] z-50 w-[9rem] bg-white shadow-md rounded-b-md flex flex-col gap-1"
                                >
                                    <NavLink to="/junior" className='text-lg font-medium text-[#03346E] text-center hover:bg-[#6d6d6d3e] py-1 rounded'>Junior</NavLink>
                                    <NavLink to="/middle" className='text-lg font-medium text-[#03346E] text-center hover:bg-[#6d6d6d3e] py-1 rounded'>Middle</NavLink>
                                    <NavLink to="/senior" className='text-lg font-medium text-[#03346E] text-center hover:bg-[#6d6d6d3e] py-1 rounded'>Senior</NavLink>
                                </motion.div>
                            )}
                        </div>
                        <div className="w-full px-36 absolute top-full left-0 border"></div>
                    </div>
                    <div className="flex items-center gap-4 relative">
                        <NavLink to={"/sign"}>
                            <button type='submit' className='text-md font-medium bg-transparent text-[#03346E] border-2 border-[#03346E] px-3 py-1 rounded-lg active:translate-y-[2px] transition-all'>Ro'yxatdan o'tish</button>
                        </NavLink>
                        <NavLink to={"/login"}>
                            <button type='submit' className='text-md font-medium text-[#03346E] border-2 border-[#03346E] px-5 py-1 rounded-lg active:translate-y-[2px] transition-all'>Kirish</button>
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