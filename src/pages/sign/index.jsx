import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { getSign } from '../../Redux/signSlice';

const Sign = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    error: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.sign);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, email } = userData;
    if (username === '' || email === '' || password === '') {
      setUserData((prevData) => ({
        ...prevData,
        error: 'Formani to\'liq to\'ldiring!',
      }));
    } else if (username === password) {
      setUserData((prevData) => ({
        ...prevData,
        error: 'Bunaqa foydalanuvchi mavjud!',
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        error: '',
      }));
      const formData = {
        username,
        password,
        email,
      };

      try {
        const resultAction = await dispatch(getSign(formData));
        if (getSign.fulfilled.match(resultAction)) {
          console.log('Registration successful:', resultAction.payload);
          setUserData({
            username: '',
            password: '',
            email: '',
            error: '',
          });
          navigate('/login');
        } else {
          console.error('Failed to register:', resultAction.payload);
          const errorMessage = typeof resultAction.payload === 'string' 
            ? resultAction.payload 
            : "Ro'yxatdan o'tishda xatolik yuz berdi!";
          setUserData((prevData) => ({
            ...prevData,
            error: errorMessage,
          }));
        }
      } catch (err) {
        console.error('Failed to register:', err);
        setUserData((prevData) => ({
          ...prevData,
          error: "Ushbu foydalanuvchi mavjud!",
        }));
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center max-sm:px-5">
      <form onSubmit={handleSubmit} className="w-[500px] max-sm:w-full flex flex-col gap-4 rounded-lg shadow-input px-10 max-sm:px-5 py-5">
        <h1 className="text-center text-3xl text-[#03346E] mb-2">Ro'yxatdan o'tish</h1>
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
        <p className='text-center text-[#03346E] text-lg'>Agar akkauntingiz bo'lsa <NavLink to={"/login"} className="underline">Kirish</NavLink></p>
        <div className="flex justify-center">
          <button type="submit" className="bg-[#03346E] text-[#FFF] text-lg px-8 py-2 rounded-md" disabled={loading}>
            {loading ? 'Loading...' : "Ro'yxatdan o'tish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sign;