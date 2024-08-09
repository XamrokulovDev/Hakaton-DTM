// import headerData 
import { NavLink } from 'react-router-dom';
import { headerData } from '../../../data/data'
// import icons 
import { SlBookOpen } from "react-icons/sl";

const Header = () => {
  return (
    <div className='container flex items-center my-20'>
      <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-xl:grid-cols-2">
        {
          headerData.map((item,index)=>(
            <div key={index} className="flex flex-col justify-between items-center shadow-please rounded-xl overflow-hidden relative p-5">
              <div className="w-[90px] h-[90px] bg-blue-400 rounded-[50%] relative">
                <SlBookOpen className='text-[#FFF] text-4xl absolute top-[35%] left-[50%] translate-x-[-50%]'/>
              </div>
              <div className="flex flex-col items-center gap-4">
                <h1 className='text-center text-3xl capitalize text-[#03346E] font-semibold pt-3'>{item.name}</h1>
                <p className='text-start text-md text-[#03346E] pb-3'>{item.title}</p>
              </div>
              <div className="w-full flex items-center justify-center">
                <NavLink to={`${item.name}`} className='w-[220px] text-[#FFF] text-xl bg-blue-400 rounded-lg px-5 py-2'>{item.click}</NavLink>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Header;