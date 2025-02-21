import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdOutlineGroupAdd } from "react-icons/md";
import { SiEslgaming } from "react-icons/si";
import { PiDotsNineBold } from "react-icons/pi";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5"

function Topbar() {
  return (
    <div className='top-0 sticky z-50' >
      <div className="main  px-4 md:px-8 lg:px-10 h-14 shadow-xl bg-white flex justify-between items-center">
        <div className="left flex md:gap-4 items-center ">
           <img className='md:h-14 h-8 m-2' src="/img/dt.jpeg" alt="img" />
           <div className="serchbar bg-gray-200 p-2 rounded-xl">
            <button className='flex justify-center gap-2 '>
                <div className="icon flex items-center "><IoIosSearch className='text-2xl' /></div>
                <input type="text" className='bg-gray-200 text-black hidden lg:block placeholder-black outline-none'  placeholder='Search DT Your Choice' />
            </button>
           </div>
        </div>
        <div className="mid md:flex lg:gap-16 md:gap-6 hidden">
            <div className="home lg:hover:bg-gray-200 px-2 rounded-md">
            <FaHome className='text-4xl    hover:text-[#0000ff] text-black/70' />
            </div>
            <div className="marketplace lg:hover:bg-gray-200 px-2 rounded-md">
            <SiHomeassistantcommunitystore className=' hover:text-[#0000ff]  text-4xl text-black/70' />
            </div>
            <div className="group lg:hover:bg-gray-200 px-2 rounded-md">
            <MdOutlineGroupAdd className='text-4xl  hover:text-[#0000ff]' />
            </div>
            <div className="gamin lg:hover:bg-gray-200 px-2 rounded-md">
            <SiEslgaming className='text-4xl  hover:text-[#0000ff] text-black/70' />
            </div>

        </div>
        <div className="right flex items-center md:gap-4 gap-3">
            <div className="menu bg-gray-200 rounded-2xl ">
            <PiDotsNineBold className='text-4xl p-1 text-black/70' />
            </div>
            <div className="MESS bg-gray-200 rounded-2xl">
            <FaFacebookMessenger className='text-4xl p-1 ' />
            </div>
            <div className="notiffication bg-gray-200 rounded-2xl">
            <IoNotifications className='text-4xl p-1' />
            </div>
            <div className="img">
                <img className='h-10 rounded-full w-10' src="https://portfolio-react-kappa-seven-18.vercel.app/pt.jpg" alt="img" />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Topbar
