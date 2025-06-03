import React, { useEffect, useState, useRef, useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CiMobile4, CiCamera, CiHeadphones } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { VscGame } from "react-icons/vsc";
import ellipseImage from "../assets/Ellipse.png";
import jbl from "../assets/jbl.png";
import playStation from "../assets/filter.png"
import woman from "../assets/woman.png"
import perfume from "../assets/perfume.png"
import gucci from "../assets/gucci.png"
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import BestSellingProducts from './BestSellingProducts';
import RegularProducts from './RegularProducts';
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";
import { FaArrowUpLong } from "react-icons/fa6";
import { AuthContext } from '../provider/AuthProvider';


const Home = () => {
    const [showAllProducts, setShowAllProducts] = useState(false);
    const products = useLoaderData();
    const { setLoading, } = useContext(AuthContext);

    const handleViewClick = () => {
        setShowAllProducts(true);
        setLoading(true);
    }

    const slides = [
        { id: 1, image: "https://assets.superhivemarket.com/store/productimage/333452/image/b82cbe657673e21dd5170b68af0ba2a5.png", title: "Up to 10% off Voucher", subtitle: "iPhone 14 Series" },
        { id: 2, image: "https://img.global.news.samsung.com/global/wp-content/uploads/2023/03/S23-Design-Story_main1.jpg", title: "Limited Time Offer", subtitle: "Samsung Galaxy S23" },
        { id: 3, image: "https://media.istockphoto.com/id/1098231338/photo/macbook-pro-retina-display-with-touch-bar-and-a-touch-id-sensor-integrated-into-the-power.jpg?s=612x612&w=0&k=20&c=xGSdxeIIryuKVQfV5Y97Qo2wXIqK1yFDZpSUCnzpijY=", title: "Exclusive Discounts", subtitle: "MacBook Pro Deals" },
    ];

    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-09-29T00:00:00");
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: "00", hours: "00", minutes: "00", seconds: "00" };
        }

        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor(difference / (1000 * 60 * 60)) % 24).padStart(2, "0"),
            minutes: String(Math.floor(difference / (1000 * 60)) % 60).padStart(2, "0"),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 15,
        },
    });

    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: carouselRef.current.scrollLeft - 300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: carouselRef.current.scrollLeft + 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='mx-auto px-2 md:px-20'>
            {/* banner */}
            <div className='flex md:gap-5 mx-auto justify-center p-5 items-center'>
                <div className='w-2/5 md:w-1/4 p-5'>
                    <ul className='space-y-3'>
                        <li><a className='hover:text-red-500' href="">Woman's Fashion</a></li>
                        <li><a className='hover:text-red-500' href="">Men's Fashion</a></li>
                        <li><a className='hover:text-red-500' href="">Electronics</a></li>
                        <li><a className='hover:text-red-500' href="">Home & Lifestyle</a></li>
                        <li><a className='hover:text-red-500' href="">Medicine</a></li>
                        <li><a className='hover:text-red-500' href="">Sports & Outdoor</a></li>
                        <li><a className='hover:text-red-500' href="">Baby's & Toys</a></li>
                        <li><a className='hover:text-red-500' href="">Groceries & Pets</a></li>
                        <li><a className='hover:text-red-500' href="">Health & Beauty</a></li>
                    </ul>
                </div>
                <div className='w-3/5 md:w-3/4 mx-auto'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="relative flex flex-col md:flex-row items-center bg-black text-white p-2 md:p-6 rounded-lg">
                                    <div className="md:w-1/2">
                                        <h3 className="md:text-lg font-semibold">{slide.subtitle}</h3>
                                        <h1 className="text-sm md:text-3xl font-bold my-2">{slide.title}</h1>
                                        <button className="md:mt-4 p-1 md:px-4 md:py-2 text-white rounded-lg cursor-pointer bg-red-500 hover:bg-red-600 transition-colors duration-300 ">
                                            Shop Now →
                                        </button>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img src={slide.image} alt={slide.title} className="md:w-full h-80 object-cover rounded-lg" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Products */}
            <div>
                <div className='mb-5'>
                    <div className='flex gap-2'>
                        <div className='bg-red-500 border-none p-1 rounded-sm'></div>
                        <p className='text-red-500 font-bold'>Today's</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 md:gap-10 items-center'>
                            <div>
                                <h3 className='text-2xl font-semibold'>Flash Sales</h3>
                            </div>
                            <div className='flex justify-center items-center space-x-1 md:space-x-4 text-black md:text-4xl font-bold'>
                                {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
                                    <div className='flex flex-col' key={unit}>
                                        <span className='text-sm'>{unit}</span>
                                        <span className='text-black'>{Object.values(timeLeft)[index]}{index < 3 && <span className="text-red-500"> : </span>}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='text-4xl flex gap-2'>
                            <FaRegArrowAltCircleLeft onClick={scrollLeft} className='bg-gray-200 rounded-full cursor-pointer' />
                            <FaRegArrowAltCircleRight onClick={scrollRight} className='bg-gray-200 rounded-full cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div ref={carouselRef} className="flex gap-5 overflow-x-auto py-4 px-2 scrollbar-hide w-full">
                        {products.map((product) => (
                            <ProductCard key={product.product_id} products={product} />
                        ))}
                    </div>
                </div>
                {!showAllProducts && (
                    <div className='text-center'>
                        <button onClick={handleViewClick} className='bg-red-500 text-white rounded-sm px-7 py-4 mx-auto my-10 cursor-pointer'>View All Products</button>
                    </div>
                )}
                {showAllProducts && (
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                        {products.map(singleProduct => <ProductCard key={singleProduct.product_id} products={singleProduct}></ProductCard>)}
                    </div>
                )}
            </div>

            {/* Browse by category */}
            <div className='space-y-5 my-5 border-t border-b border-gray-300 py-10'>
                <div>
                    <div className='flex gap-2'>
                        <div className='bg-red-500 border-none p-1 rounded-sm'></div>
                        <p className='text-red-500 font-bold'>Categories</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 md:gap-10 items-center'>
                            <div>
                                <h3 className='text-2xl font-semibold'>Browse By Category</h3>
                            </div>
                        </div>
                        <div className='text-4xl flex gap-2'>
                            <FaRegArrowAltCircleLeft className='bg-gray-200 rounded-full cursor-pointer' />
                            <FaRegArrowAltCircleRight className='bg-gray-200 rounded-full cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-5 cursor-pointer'>
                    <div className='border border-gray-300 p-5 flex flex-col gap-2 justify-center items-center w-full hover:bg-red-500 hover:text-white'>
                        <CiMobile4 className='text-6xl' />
                        <p>Phones</p>
                    </div>
                    <div className='border border-gray-300 p-5 flex flex-col gap-2 justify-center items-center w-full hover:bg-red-500 hover:text-white'>
                        <HiOutlineComputerDesktop className='text-6xl' />
                        <p>Computers</p>
                    </div>
                    <div className='border border-gray-300 p-5 flex flex-col gap-2 justify-center items-center w-full hover:bg-red-500 hover:text-white'>
                        <BsSmartwatch className='text-6xl' />
                        <p>SmartWatch</p>
                    </div>
                    <div className='border border-gray-300 p-5 flex flex-col gap-2 justify-center items-center w-full hover:bg-red-500 hover:text-white'>
                        <CiCamera className='text-6xl' />
                        <p>Camera</p>
                    </div>
                    <div className='border border-gray-300 p-5 flex flex-col gap-2 justify-center items-center w-full hover:bg-red-500 hover:text-white'>
                        <CiHeadphones className='text-6xl' />
                        <p>Headphones</p>
                    </div>
                    <div className='border border-gray-300 p-5 flex flex-col gap-2 justify-center items-center w-full hover:bg-red-500 hover:text-white'>
                        <VscGame className='text-6xl' />
                        <p>Gaming</p>
                    </div>
                </div>
            </div>

            {/* Best Selling products */}
            <div className='my-10'>
                <div className=''>
                    <div className='flex gap-2'>
                        <div className='bg-red-500 border-none p-1 rounded-sm'></div>
                        <p className='text-red-500 font-bold'>This Month</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 md:gap-10 items-center'>
                            <div>
                                <h3 className='text-2xl font-semibold'>Best Selling Products</h3>
                            </div>
                        </div>
                        <div className=''>
                            <button className='bg-red-500 text-white rounded-sm px-7 py-4 mx-auto cursor-pointer'>View All</button>
                        </div>
                    </div>
                </div>
                <div>
                    <BestSellingProducts></BestSellingProducts>
                </div>
            </div>

            {/* Enhance your music experience */}
            <div className='bg-black flex justify-between items-center p-2 md:px-10'>
                <div className='space-y-2 md:space-y-8'>
                    <p className='text-green-400 font-semibold'>Categories</p>
                    <h2 className='text-white md:text-4xl font-semibold'>Enhance Your <br /> Music Experience</h2>
                    <div className='flex gap-1 md:gap-3 text-sm'>
                        <div className='bg-white rounded-full w-10 h-10 md:w-20 md:h-20 flex flex-col justify-center items-center p-1 md:p-7'>
                            <p className='font-semibold'>23</p>
                            <p>Hours</p>
                        </div>
                        <div className='bg-white rounded-full w-10 h-10 md:w-20 md:h-20 flex flex-col justify-center items-center p-1 md:p-7'>
                            <p className='font-semibold'>05</p>
                            <p>Days</p>
                        </div>
                        <div className='bg-white rounded-full w-10 h-10 md:w-20 md:h-20 flex flex-col justify-center items-center p-1 md:p-7'>
                            <p className='font-semibold'>59</p>
                            <p>Minutes</p>
                        </div>
                        <div className='bg-white rounded-full w-10 h-10 md:w-20 md:h-20 flex flex-col justify-center items-center p-1 md:p-7'>
                            <p className='font-semibold'>35</p>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <button className='bg-green-500 text-white rounded-sm p-2 md:px-8 md:py-3 mx-auto cursor-pointer'>Buy Now</button>
                </div>
                <div className='relative flex justify-center items-center'>
                    <img className='' src={ellipseImage} alt="" />
                    <img className='absolute' src={jbl} alt="" />
                </div>
            </div>

            {/* Explore our products */}
            <div className='my-20'>
                <div className='flex gap-2'>
                    <div className='bg-red-500 border-none p-1 rounded-sm'></div>
                    <p className='text-red-500 font-bold'>Our Products</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 md:gap-10 items-center'>
                        <div>
                            <h3 className='text-2xl font-semibold'>Explore our products</h3>
                        </div>
                    </div>
                    <div className='text-4xl flex gap-2'>
                        <FaRegArrowAltCircleLeft className='bg-gray-200 rounded-full cursor-pointer' />
                        <FaRegArrowAltCircleRight className='bg-gray-200 rounded-full cursor-pointer' />
                    </div>
                </div>
            </div>

            {/* Regular Products with limited display */}
            <RegularProducts limit={!showAllProducts ? 8 : null} />

            {/* Conditionally render the button */}
            {!showAllProducts && (
                <div className='text-center'>
                    <button
                        onClick={handleViewClick}
                        className='bg-red-500 text-white rounded-sm px-7 py-4 mx-auto my-10 cursor-pointer'
                    >
                        View All Products
                    </button>
                </div>
            )}

            {/* New arrival */}
            <div className='my-20'>
                <div className='flex gap-2'>
                    <div className='bg-red-500 border-none p-1 rounded-sm'></div>
                    <p className='text-red-500 font-bold'>Featured</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 md:gap-10 items-center'>
                        <div>
                            <h3 className='text-2xl font-semibold'>New Arrival</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='bg-black relative w-full'>
                    <img className='relative mx-auto' src={playStation} alt="" />
                    <div className='text-white absolute left-0 bottom-0 p-5'>
                        <h2 className='text-2xl'>PlayStation 5</h2>
                        <p className='text-xm'>Black and White version of the PS5 coming out on sale.</p>
                        <p className='underline'>Shop Now</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5 w-full relative'>
                    <div className='relative col-span-2 bg-black'>
                        <img className='realtive mx-auto' src={woman} alt="" />
                        <div className='text-white absolute left-0 bottom-0 p-5'>
                            <h2 className='text-2xl'>Women&apos;s Collections</h2>
                            <p className='text-xm'>Featured woman collections that give you another vibe.</p>
                            <p className='underline'>Shop Now</p>
                        </div>
                    </div>
                    <div className='relative bg-black'>
                        <img className='realtive mx-auto' src={perfume} alt="" />
                        <div className='text-white absolute left-0 bottom-0 p-5'>
                            <h2 className='text-2xl'>Speakers</h2>
                            <p className='text-xm'>Amazon wireless speakers.</p>
                            <p className='underline'>Shop Now</p>
                        </div>
                    </div>
                    <div className='relative bg-black'>
                        <img className='realtive mx-auto' src={gucci} alt="" />
                        <div className='text-white absolute left-0 bottom-0 p-5'>
                            <h2 className='text-2xl'>Perfume</h2>
                            <p className='text-xm'>GUCCI INTENSE OUD EDP</p>
                            <p className='underline'>Shop Now</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:justify-between my-10'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <TbTruckDelivery className='text-6xl bg-black text-white rounded-full p-2 border-7 border-gray-400' />
                    <h2 className='font-semibold  md:text-3xl'>FREE AND FAST DELIVERY</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <RiCustomerServiceLine className='text-6xl bg-black text-white rounded-full p-2 border-7 border-gray-400' />
                    <h2 className='font-semibold  md:text-3xl'>24/7 CUSTOMER SERVICE</h2>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <AiOutlineSafety className='text-6xl bg-black text-white rounded-full p-2 border-7 border-gray-400' />
                    <h2 className='font-semibold  md:text-3xl'>MONEY BACK GUARANTEE</h2>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>
            <div className='flex justify-end my-5'>
                <FaArrowUpLong onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }} className='bg-gray-100 text-5xl p-3 rounded-full hover:bg-gray-200 cursor-pointer'></FaArrowUpLong>
            </div>
        </div>
    );
};

export default Home;