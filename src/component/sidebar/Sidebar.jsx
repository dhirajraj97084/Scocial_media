import React from 'react'
import { IoIosSearch } from 'react-icons/io';
import { IoSettings } from "react-icons/io5";

function Sidebar() {
    return (
        <div>
            <div className="main_box hidden md:block">
                <div className="sub w-72 bg-white shadow-xl py-4 fixed">
                    <div className="top flex py-3 justify-between px-5 items-center">
                        <h1 className='text-2xl font-bold'>Marketplace</h1>
                        <h2 className='text-2xl'><button className='p-3 hover:bg-gray-300 bg-gray-200 rounded-full'><IoSettings /></button></h2>
                    </div>
                    <div className="searchbsr px-5">
                        <div className="serchbar bg-gray-200 p-2 rounded-2xl px-4 ">
                            <button className='flex justify-center gap-2 '>
                                <div className="icon flex items-center "><IoIosSearch className='text-2xl' /></div>
                                <input type="text" className='bg-gray-200 text-black  placeholder-black outline-none' placeholder='Search Marketplace' />
                            </button>
                        </div>
                    </div>

                </div>
                <div className="scroll w-72 bg-white shadow-xl h-screen ">

                </div>
            </div>
        </div>
    )
}

export default Sidebar
