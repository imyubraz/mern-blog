import React, { useState } from 'react'

// react-icons
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {IoIosArrowDown} from "react-icons/io"

// for routing
import { Link, NavLink, useNavigate } from 'react-router-dom';

// assets
import { svgs } from '../../constants/assets'

// css
import "./Header.css"

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
    {name: "Home", type: "link", path:"/"},
    {name: "Article", type: "link", path:"/article"},
    {name: "Pages", type: "dropdown", dropdownitems: [
        {name: "About us", type: "link", path:"/about" },
        {name: "Contact us", type: "link", path:"/contact" },
    ]},
    {name: "Pricing", type: "link", path:"/pricing"},
    {name: "FAQs", type: "link", path:"/faqs"},
]

const Menu = ({menuitem}) =>{

    const [showDropdown, setShowDropdown] = useState(false);

    return(
        <>
        {
            menuitem.type === "link"
            && 
            <li className='menu hover:font-bold w-full lg:w-auto hover:text-yellow-500 lg:hover:text-primary transition-all ease-out duration-200'><NavLink to={menuitem.path}>{menuitem.name}</NavLink></li>
        }
        {
            menuitem.type === "dropdown"
            &&
            <>
                <li className='menu hover:font-bold w-full lg:w-auto transition-all ease-out duration-200 relative group cursor-pointer' onClick={()=>setShowDropdown((prevState)=>!prevState)}>
                    <div className='flex gap-1 items-center group-hover:text-yellow-500 lg:group-hover:text-primary'>
                        {menuitem.name}
                        <IoIosArrowDown/>
                    </div>
                    {
                        showDropdown &&
                        (
                            <div className="dropdown-items static lg:absolute left-1 lg:min-w-[8rem] bg-transparent lg:bg-cyan-50 p-2 mt-4 flex flex-col gap-4 shadow-sm">
                                {
                                menuitem.dropdownitems.map((item)=>
                                    <li className='menu hover:font-bold w-full lg:w-auto hover:text-yellow-500 lg:hover:text-primary transition-all ease-out duration-200'><NavLink to={item.path}>{item.name}</NavLink></li>
                                )
                                }
                            </div>
                        )
                    }
                </li>
            </>
        }
        </>
    )
}

// }

const Header = () => {

// states
const [showMobileMenu, setShowMobileMenu ] = useState(false);

const navigateTo = useNavigate();

  return (
    <>
    <div className={`wrapper bg-white shadow-lg lg:shadow-none w-full`}>
        <div className={`container p-2 h-[80px] lg:min-h-[10vh] relative lg:static flex`}>
            <div className="row w-full flex gap-8 items-center">
                <div className="col w-1/4">
                    <div className="logo">
                        <img src={svgs.Logo} alt="" />
                    </div>
                </div>
                <div className="col grow flex justify-end items-center">
                    {!showMobileMenu?
                    <div className="lg:hidden menu-icon text-3xl cursor-pointer" onClick={()=>setShowMobileMenu(true)}>
                        <AiOutlineMenu/>
                    </div>
                    :
                    <div className="lg:hidden close-icon text-3xl cursor-pointer" onClick={()=>setShowMobileMenu(false)}>
                        <AiOutlineClose />
                    </div>
                    }
                    <div className={`nav-wrapper absolute top-[80px] ${showMobileMenu ? `right-0`: `-right-full`} w-full lg:w-auto py-8 lg:p-2 bg-dark-hard text-white text-lg lg:bg-inherit lg:text-inherit lg:static transition-all ease-in duration-200 lg:transition-none`}>
                        <nav className='main-nav flex flex-col lg:flex-row gap-8 items-center justify-center'>
                            <div>
                                <ul className='menus flex flex-col lg:flex-row gap-8 font-semibold'>
                                    {menus.map((item)=> <Menu menuitem={item} />)}
                                </ul>
                            </div>
                            <div>
                                <button className='border-2 border-primary px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer' onClick={()=>navigateTo("/signin")}>Sign In</button>
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