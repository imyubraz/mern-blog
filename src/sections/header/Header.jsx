import React, { useState } from 'react'

// react-icons
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";


// assets
import { svgs } from '../../constants/assets'

/* 
const menus = [
    "Home",
    "Article",
    "Pages",
    "Pricing",
    "FAQS"
] 
*/

// For reusable Mwnus {

const menus = [
    {name: "Home", path:"/"},
    {name: "Article", path:"/article"},
    {name: "Pages", path:"/pages"},
    {name: "Pricing", path:"/pricing"},
    {name: "FAQs", path:"/faqs"},
]

const Menu = ({name, path}) =>{
    return(
        <>
        <li className='menu hover:font-bold w-full md:w-auto hover:text-yellow-500 md:hover:text-primary transition-all ease-out duration-200'><a href={path}>{name}</a></li>
        </>
    )
}

// }

const Header = () => {

const mobileHeaderHeight = "100px";

// states
const [showMobileMenu, setShowMobileMenu ] = useState(false);

  return (
    <>
    <div className="wrapper bg-white shadow-md md:shadow-none">
        <div className={`container p-2 h-[${mobileHeaderHeight}] md:min-h-[10vh] relative md:static flex`}>
            <div className="row w-full flex gap-8 items-center">
                <div className="col w-1/4">
                    <div className="logo">
                        <img src={svgs.Logo} alt="" />
                    </div>
                </div>
                <div className="col grow flex justify-end items-center">
                    {!showMobileMenu?
                    <div className="md:hidden menu-icon text-3xl cursor-pointer" onClick={()=>setShowMobileMenu(true)}>
                        <AiOutlineMenu/>
                    </div>
                    :
                    <div className="md:hidden close-icon text-3xl cursor-pointer" onClick={()=>setShowMobileMenu(false)}>
                        <AiOutlineClose />
                    </div>
                    }
                    <div className={`nav-wrapper absolute ${showMobileMenu ? `top-[${mobileHeaderHeight}]`: `top-[-100vh]`} w-full md:w-auto py-8 md:p-2 bg-dark-hard text-white text-lg md:bg-inherit md:text-inherit right-0 md:static transition-all ease-in duration-500 md:transition-none -z-10 md:z-0`}>
                        <nav className='main-nav flex flex-col md:flex-row gap-8 items-center'>
                            <div>
                                <ul className='menus flex flex-col md:flex-row gap-8 font-semibold'>
                                    {menus.map((menu)=> <Menu name={menu.name} path={menu.path}/>)}
                                </ul>
                            </div>
                            <div>
                                <button className='border-2 border-primary px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer'>Sign In</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header