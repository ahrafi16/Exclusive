import { useContext, useEffect, useRef, useState } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import { FiUser, FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { TbLogout2, TbLogin2 } from "react-icons/tb";
import { AuthContext } from '../provider/AuthProvider';
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const dropdownRef = useRef(null);
    const { user, logOut, cart, wishlist, handleOptionClick } = useContext(AuthContext);

    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };




    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowUserMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className=''>
            <div className='bg-black text-white flex p-4'>
                <div className='flex flex-col md:flex-row gap-2 justify-center w-full'>
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <p className='underline cursor-pointer'>ShopNow</p>
                </div>
                <div>
                    <p className='flex items-center cursor-pointer' onClick={handleDropdown}>English <RiArrowDropDownLine className='text-2xl' /></p>
                    {showDropdown && (
                        <div className='absolute right-0 top-12 z-10 p-5 bg-black/30 backdrop-blur-xl text-white rounded-md'>
                            <ul className='space-y-3'>
                                <li onClick={() => handleOptionClick("English")} className='cursor-pointer'>English</li>
                                <li onClick={() => handleOptionClick("Bangla")} className='cursor-pointer'>Bangla</li>
                                <li onClick={() => handleOptionClick("French")} className='cursor-pointer'>French</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="navbar bg-base-100 shadow-sm mx-auto px-2 md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to="/"><li>Home</li></NavLink>
                            <NavLink to="/contact"><li>Contact</li></NavLink>
                            <NavLink to="/about"><li>About</li></NavLink>
                            <NavLink to="/register"><li>Register</li></NavLink>
                        </ul>
                    </div>
                    <Link to="/"><button className='btn btn-ghost text-xl font-bold'>Exclusive</button></Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {['Home', 'Contact', 'About', 'Register'].map((item, i) => {
                            const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`;
                            return (
                                <li key={i}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            `px-4 py-2 ${isActive ? "underline underline-offset-8" : ""}`
                                        }
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            );
                        })}

                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-2 cursor-pointer relative">
                    <label className="input">
                        <input type="search" required placeholder="What are you looking for?" />
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                    </label>
                    <div className='relative'>
                        <Link to="/wishlist"><MdFavoriteBorder className='text-2xl' /></Link>
                        {wishlist.length > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm'>
                                {wishlist.length}
                            </span>
                        )}
                    </div>
                    <div className='relative'>
                        <Link to="/cart"><IoCartOutline className='text-2xl' /></Link>
                        {cart.length > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm'>
                                {cart.length}
                            </span>
                        )}
                    </div>

                    <a className='flex flex-col items-center justify-center' onClick={() => setShowUserMenu((prev) => !prev)}>
                        <FiUser className={user ? `text-2xl text-green-500 border rounded-full` : `text-2xl text-black`} />
                        {
                            user && user?.email ? (
                                <span className='ml-2 text-xs text-green-500 font-semibold'>{user.displayName || user.email.split('@')[0].toUpperCase()}</span>
                            ) : (
                                <span className='ml-2 text-xs  font-light'>Login</span>
                            )
                        }
                    </a>

                    {showUserMenu && (
                        <div
                            ref={dropdownRef}
                            className='absolute right-0 top-16 z-10 p-5 bg-black/30 backdrop-blur-xl text-white rounded-md'
                        >
                            <ul className='space-y-3' id='floatingList'>
                                <Link to="/myaccount"><li onClick={() => handleOptionClick("Manage My Account")} className='flex items-center gap-3 cursor-pointer text-xl hover:text-gray-400'>
                                    <FiUser /> Manage My Account
                                </li></Link>
                                <Link to="/cart"> <li onClick={() => handleOptionClick("My Orders")} className='flex items-center gap-3 cursor-pointer text-xl hover:text-gray-400'>
                                    <FiShoppingBag /> My Orders
                                </li></Link>
                                <Link to="/cancel"><li onClick={() => handleOptionClick("My Cancellations")} className='flex items-center gap-3 cursor-pointer text-xl hover:text-gray-400'>
                                    <MdOutlineCancel /> My Cancellations
                                </li></Link>
                                <Link to="/error" > <li onClick={() => handleOptionClick("My Reviews")} className='flex items-center gap-3 cursor-pointer text-xl hover:text-gray-400'>
                                    <CiStar /> My Reviews
                                </li></Link>
                                {
                                    user && user?.email ?
                                        (<Link>  <li onClick={logOut} className='flex items-center gap-3 cursor-pointer text-xl hover:text-gray-400'>
                                            <TbLogout2 /> Logout
                                        </li></Link>) :
                                        (
                                            <Link to="/signup">  <li onClick={() => handleOptionClick("Login")} className='flex items-center gap-3 cursor-pointer text-xl hover:text-gray-400'>
                                                <TbLogin2 /> Login
                                            </li></Link>
                                        )
                                }

                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Navbar;
