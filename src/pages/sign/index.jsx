import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Sign = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    error: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (username === '' || email === '' || password === '') {
      setUserData((prevData) => ({
        ...prevData,
        error: 'Formani to\'liq to\'ldiring!',
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        error: '',
      }));
      const formData = {
        username,
        email,
        password,
      };
      console.log('Form Data:', formData);

      // Navigate to the '/' route and clear form data
      setUserData({
        username: '',
        email: '',
        password: '',
        error: '',
      });
      navigate('/'); // Redirect to '/'
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center max-sm:px-5">
      <form onSubmit={handleSubmit} className="w-[500px] max-sm:w-full flex flex-col gap-6 rounded-lg shadow-input px-10 max-sm:px-5 py-5">
        <h1 className="text-center text-3xl text-[#03346E] mb-2">Login</h1>
        <div className="border-b-2 border-[#03346E] p-1">
          <input 
            type="text" 
            name="username"
            placeholder="Enter your username" 
            className="w-full outline-none text-lg text-[#03346E]"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div className="border-b-2 border-[#03346E] p-1">
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            className="w-full outline-none text-lg text-[#03346E]"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center relative border-b-2 border-[#03346E] p-1">
          <input 
            type={showPassword ? "text" : "password"} 
            name="password"
            placeholder="Enter your password" 
            className="w-[95%] outline-none text-lg text-[#03346E]"
            value={userData.password}
            onChange={handleChange}
          />
          {showPassword ? (
            <FaRegEyeSlash className='text-xl cursor-pointer absolute top-2.5 right-0' onClick={togglePasswordVisibility}/>
          ) : (
            <FaRegEye className='text-xl cursor-pointer absolute top-2.5 right-0' onClick={togglePasswordVisibility}/>
          )}
        </div>
        {userData.error && <p className="text-red-500 text-center text-lg">{userData.error}</p>}
        <div className="flex justify-center">
          <button type="submit" className="bg-[#03346E] text-[#FFF] text-lg px-16 py-2 rounded-md">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Sign;