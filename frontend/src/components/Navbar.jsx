import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [nav,setNav]  = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto '>
            <h1 className='w-full text-3xl font-bold text-[#d90963]'>OpenScience</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Info</li>
                <li className='p-4'>Sign</li>
            </ul>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-[#d90963] rounded-md px-8 py-3'>Get Started</button>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ?<AiOutlineClose size={20}/>:<AiOutlineMenu  size={20}/>}
                
            </div>
            <div className={!nav ?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#E2EDFF] ease-in-out duration-500 ':'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold m-4 text-[#d90963]'>CollaboraSpace</h1>
                <ul className='pt-12 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Projects</li>
                <li className='p-4 border-b border-gray-600'>Info</li>
                <li className='p-4 border-b border-gray-600'>Sign</li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar;