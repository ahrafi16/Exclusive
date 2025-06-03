import React from 'react';
import { VscSend } from "react-icons/vsc";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <nav>
                <h6 className="footer-title">Exclusive</h6>
                <a className="link link-hover">Subscribe</a>
                <a className="link link-hover">Get 10% off your first order</a>
                <label className="input bg-black border-white">
                    <input type="search" required placeholder="Enter your email" />

                    <VscSend />
                </label>
            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                <a className="link link-hover">exclusive@gmail.com</a>
                <a className="link link-hover">+88015-88888-9999</a>
            </nav>
            <nav>
                <h6 className="footer-title">Account</h6>
                <a className="link link-hover">My Account</a>
                <a className="link link-hover">Login / Register</a>
                <a className="link link-hover">Cart</a>
                <a className="link link-hover">Wishlist</a>
                <a className="link link-hover">Shop</a>
            </nav>
            <nav>
                <h6 className="footer-title">Quick Link</h6>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms Of Use</a>
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title">Download App</h6>
                <a className="link link-hover">Save $3 with App New User Only</a>
                <div className='flex gap-2 cursor-pointer'>
                    <div className='w-15 h-15'>
                        <img className='bg-white w-full' src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" />
                    </div>
                    <div className='flex flex-col'>

                        <div className='w-20'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s" alt="" />
                        </div>
                        <div className='w-20'>
                            <img src="https://e7.pngegg.com/pngimages/488/584/png-clipart-app-store-iphone-apple-mobile-app-iphone-electronics-text.png" alt="" />
                        </div>

                    </div>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <a href="https://www.facebook.com/anjumhossain.rafi/" target='_blank'><FaFacebookF className='text-xl' /></a>
                    <CiTwitter className='text-xl' />
                    <FaInstagram className='text-xl' />
                    <a href="https://www.linkedin.com/in/anjum-hossain-519a192b2/" target='_blank'><FaLinkedinIn className='text-xl' /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;