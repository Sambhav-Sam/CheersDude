import React from 'react';
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
    return <div>
        <header className='max-w-screen-2xl container mx-auto '>
            <div className="navbar xl:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'>Home</a></li>
                            <li>
                                <a href='/categories'>Categories</a>
                                <ul className="p-2">
                                    <li><a href='/categories/whiskey'>Whiskey</a></li>
                                    <li><a href='/rum '>Rum</a></li>
                                </ul>
                            </li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Logo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Categories</summary>
                                <ul className="p-2">
                                    <li><a>Whiskey</a></li>
                                    <li><a>Rum</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    {/* search button  */}
                <button className="btn btn-ghost btn-circle hidden md:flex">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
                    {/* cart items */}
                    <div className=" hidden lg:flex items-center justify-center px-3">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div tabIndex={0} className=" card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* btn  */}
                    <a className="btn bg-green rounded-full px-6 text-white hover:bg-white-500 hover:text-black"><FiPhoneCall /> Contact</a>
                </div>
            </div>

        </header>
    </div>
}

export default Navbar;