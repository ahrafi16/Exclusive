import { useLocation } from "react-router-dom";
import { CiShop, CiDollar, CiBag1, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import tom from "../assets/tom.png";
import emma from "../assets/emma.png";
import will from "../assets/will.png";
import frame883 from "../assets/frame883.png";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";


const About = () => {
    const location = useLocation();
    return (
        <div className="mx-auto px-2 md:px-20">
            <div className="my-5">
                <p>Home {location.pathname}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-10 items-center my-10">
                <div className="flex flex-col gap-5 flex-1 px-5">
                    <h2 className="text-3xl font-semibold">Our Story</h2>
                    <p className="text-sm text-justify md:leading-6">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br />

                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div className="flex-1">
                    <img className="w-full rounded-2xl" src="https://media.istockphoto.com/id/1297258975/photo/two-happy-pretty-girls-friends-shoppers-holding-shopping-bags-female-teenage-shopaholics.jpg?s=612x612&w=0&k=20&c=8H9BziAJ_Fsh2Oy76OGimyEPEDLvyoY46gIy5hHkPHc=" alt="" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-center my-10">
                <div className="flex  flex-col gap-2 items-center justify-center border rounded-sm p-5 hover:bg-red-500 hover:text-white">
                    <CiShop className="text-white bg-black text-6xl p-0.5 font-bold rounded-full border-5 border-gray-300" />
                    <h3 className="text-3xl font-bold">10.5K</h3>
                    <p>Sallers active our site</p>
                </div>
                <div className="flex  flex-col gap-2 items-center justify-center border rounded-sm p-5 hover:bg-red-500 hover:text-white">
                    <CiDollar className="text-white bg-black text-6xl p-0.5 font-bold rounded-full border-5 border-gray-300" />
                    <h3 className="text-3xl font-bold">33K</h3>
                    <p>Monthly Product Sale</p>
                </div>
                <div className="flex  flex-col gap-2 items-center justify-center border rounded-sm p-5 hover:bg-red-500 hover:text-white">
                    <CiBag1 className="text-white bg-black text-6xl p-0.5 font-bold rounded-full border-5 border-gray-300" />
                    <h3 className="text-3xl font-bold">45.5K</h3>
                    <p>Customer active in our site</p>
                </div>
                <div className="flex  flex-col gap-2 items-center justify-center border rounded-sm p-5 hover:bg-red-500 hover:text-white">
                    <FaSackDollar className="text-white bg-black text-6xl p-0.5 font-bold rounded-full border-5 border-gray-300" />
                    <h3 className="text-3xl font-bold">25K</h3>
                    <p>Anual gross sale in our site</p>
                </div>
            </div>
            <div className="flex gap-10 justify-center my-10">
                <div className="flex flex-col gap-2 w-full">
                    <div className="bg-gray-200 px-5 pt-5 rounded-sm flex justify-center">
                        <img src={tom} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold">Tom Cruise</h3>
                        <p>Founder & Chairman</p>
                        <div className="flex gap-2">
                            <CiTwitter />
                            <CiInstagram />
                            <CiLinkedin />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="bg-gray-200 px-5 pt-5 rounded-sm flex justify-center">
                        <img src={emma} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold">Emma Watson</h3>
                        <p>Managing Director</p>
                        <div className="flex gap-2">
                            <CiTwitter />
                            <CiInstagram />
                            <CiLinkedin />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="bg-gray-200 px-5 pt-5 rounded-sm flex justify-center">
                        <img src={will} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold">Will Smith</h3>
                        <p>Product Designer</p>
                        <div className="flex gap-2">
                            <CiTwitter />
                            <CiInstagram />
                            <CiLinkedin />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-5 rounded-2xl">
                <img src={frame883} alt="" />
            </div>
            <div className='flex justify-between my-10'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <TbTruckDelivery className='text-6xl bg-black text-white rounded-full p-2 border-7 border-gray-400' />
                    <h2 className='font-semibold md:text-3xl'>FREE AND FAST DELIVERY</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <RiCustomerServiceLine className='text-6xl bg-black text-white rounded-full p-2 border-7 border-gray-400' />
                    <h2 className='font-semibold md:text-3xl'>24/7 CUSTOMER SERVICE</h2>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <AiOutlineSafety className='text-6xl bg-black text-white rounded-full p-2 border-7 border-gray-400' />
                    <h2 className='font-semibold md:text-3xl'>MONEY BACK GUARANTEE</h2>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    );
};

export default About;