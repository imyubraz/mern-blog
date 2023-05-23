import React from 'react'

// assets
import { svgs } from '../../constants/assets'

const Header = () => {
  return (
    <>
    <div className="wrapper">
        <div className="container p-2">
            <div className="row flex gap-8 items-center">
                <div className="col w-1/4">
                    <div className="logo">
                        <img src={svgs.Logo} alt="" />
                    </div>
                </div>
                <div className="col grow flex justify-end">
                    <div className="nav-wrapper">
                        <nav className='main-nav flex gap-8 items-center'>
                            <ul className='menus flex gap-8 font-semibold'>
                                <li className='menu'><a href="">Home</a></li>
                                <li className='menu'><a href="">Article</a></li>
                                <li className='menu'><a href="">Pages</a></li>
                                <li className='menu'><a href="">Pricing</a></li>
                                <li className='menu'><a href="">FAQs</a></li>
                            </ul>
                            <div>
                                <button className='border-2 border-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer'>Sign In</button>
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