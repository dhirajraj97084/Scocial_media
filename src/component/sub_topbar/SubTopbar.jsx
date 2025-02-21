import React from 'react'
import { GrGallery } from 'react-icons/gr'
import { IoIosSearch } from 'react-icons/io'

function SubTopbar() {
    return (
        <div className='bg-white'>
            <div className="main md:hidden flex justify-between py-3 gap-3 shadow-xl items-center px-3">
                <div className="img">
                    <img className='h-8 rounded-full w-8' src="https://portfolio-react-kappa-seven-18.vercel.app/pt.jpg" alt="img" />
                </div>
                <div className="serchbar bg-gray-200 p-2 rounded-xl">
                    <button className='flex justify-center gap-2 '>
                        <div className="icon flex items-center "><IoIosSearch className='text-2xl' /></div>
                        <input type="text" className='bg-gray-200 text-black placeholder-black outline-none' placeholder='Search Somthing here...' />
                    </button>
                </div>
                <div className="icons">
                <GrGallery className='text-3xl text-indigo-800' />
                </div>
            </div>
        </div>
    )
}

export default SubTopbar
