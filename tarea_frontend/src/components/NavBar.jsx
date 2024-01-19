import iconMenu from '../assets/images/icon-menu.svg'
import iconClose from '../assets/images/icon-menu-close.svg'
import { useState } from 'react'

export const NavBar = () => {
    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click)
    const menuIcon = click ? iconClose : iconMenu;
    const content = <>
        <div className={`absolute inset-y-0 right-0 transform    ${click ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out bg-white w-64 h-screen z-30 shadow-lg block sm:hidden`}>
        <ul className="text-left text-xl p-4 pt-12 mt-16">
            <li className='my-4 py-1 hover:text-pink-400 cursor-pointer'>
                <a>Home</a>
            </li>
            <li className='my-4 py-1 hover:text-pink-400 cursor-pointer'>
                <a>New</a>
            </li>
            <li className='my-4 py-1 hover:text-pink-400 cursor-pointer'> 
                <a>Popular</a>
            </li>
            <li className='my-4 py-1 hover:text-pink-400 cursor-pointer'>
                <a>Trending</a>
            </li>
            <li className='my-4 py-1 hover:text-pink-400 cursor-pointer'>
                <a>Categories</a>
            </li>
        </ul>
        
    </div>
    </>
    
  return (
    <>
        <nav className="bg-white" >
            <div className="flex items-center">
                <div>
                    <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
                        <li className=''>
                        <a>Home</a>
                        </li>
                        <li className='hover:text-pink-400 cursor-pointer'>
                            <a>New</a>
                        </li>
                        <li className='hover:text-pink-400 cursor-pointer'> 
                            <a>Popular</a>
                        </li>
                        <li className='hover:text-pink-400 cursor-pointer'>
                            <a>Trending</a>
                        </li>
                        <li className='hover:text-pink-400 cursor-pointer'>
                            <a>Categories</a>
                        </li>
                    </ul>
                    
                </div>
                <div>
                    {click && content}
                </div>
                <button className='block sm:hidden z-40' onClick={handleClick}>
                    <img className=' cursor-pointer' src={menuIcon} alt="iconomenu" />
                    
                </button>
               
                {click && (
                    <div className="fixed inset-0 bg-black opacity-50 z-20 block sm:hidden" onClick={handleClick}></div>
                )}
            </div>
        </nav>
    </>
    
  )
}
