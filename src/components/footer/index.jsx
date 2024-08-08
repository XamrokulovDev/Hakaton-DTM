// import icons 
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#03346E]">
      <div className="container flex justify-between items-start gap-5 max-sm:flex-col max-sm:gap-10 py-5">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl text-[#FFF] font-medium">Logo</h1>
          <span className="flex items-center gap-5">
            <a href="https://t.me/DjangoAcademy" target="_blank" className="text-[#FFF] text-2xl"><BsTelegram /></a>
            <a href="https://www.instagram.com/django_academy" target="_blank" className="text-[#FFF] text-2xl"><RiInstagramFill /></a>
            <a href="tel:+998712007377" target="_blank" className="text-[#FFF] text-xl"><FaPhone /></a>
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <NavLink to={"/"} className={"text-lg text-[#FFF] font-medium"}>Bosh sahifa</NavLink>
          <NavLink to={"/"} className={"text-lg text-[#FFF] font-medium"}>Testdan o'tish</NavLink>
          <NavLink to={"/sign"} className={"text-lg text-[#FFF] font-medium"}>Ro'yxatdan o'tish</NavLink>
        </div>
        <div className="flex flex-col items-start gap-3">
          <p className="text-md text-[#FFF] font-medium">djangoacademy@gmail.com</p>
          <p className="w-[185px] text-md text-[#FFF]"><span className="font-medium">Manzil:</span> Toshkent shahar, Algoritm, Diydor ko'chasi, 71-uy</p>
          <p></p>
        </div>
      </div>
      <div className="flex items-center justify-between max-sm:items-start max-sm:flex-col max-sm:gap-2 py-5 px-[5vw] border-t border-[#c9c9c97b]">
          <p className="text-lg text-[#FFF]">© {year} All rights reserved</p>
          <a href="https://djangoacademy.uz/" target="_blank" className="text-lg text-[#FFF]">djangoacademy.uz</a>
      </div>
    </footer>
  )
}

export default Footer