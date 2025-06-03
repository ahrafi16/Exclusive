
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="mx-auto px-2 md:px-20">
            <div className='grid grid-cols-3 gap-1 md:gap-10 my-10'>
                <div className=' flex flex-col gap-3 p-1 md:p-5 shadow'>
                    <div className='space-y-2'>
                        <div className='flex gap-2 items-center text-xl font-semibold'>
                            <div className='bg-red-500 rounded-full p-2'>
                                <IoCallOutline className='text-white' />
                            </div>
                            <p>Call To Us</p>
                        </div>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                    <div className='space-y-2'>
                        <div className='flex gap-2 items-center text-xl font-semibold'>
                            <div className='bg-red-500 rounded-full p-2'>
                                <IoMailOutline className='text-white' />
                            </div>
                            <p>Write To Us</p>
                        </div>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className='shadow col-span-2 flex flex-col justify-between gap-5 p-5'>

                    <div className='flex flex-col md:flex-row gap-2'>
                        <input type="text" placeholder="Your Name" className="input input-md bg-gray-100" />
                        <input type="text" placeholder="Your Email" className="input input-md bg-gray-100" />
                        <input type="text" placeholder="Your Phone" className="input input-md bg-gray-100" />
                    </div>
                    <div className='h-full'>
                        <textarea
                            placeholder="Your Message"
                            className="w-full h-full py-2 px-3 border border-gray-200 focus:outline-none focus:border-blue-500 resize-none bg-gray-100"
                        />
                    </div>
                    <div className='flex justify-end'>
                        <button
                            className='bg-red-500 text-white rounded-sm px-7 py-4  cursor-pointer'>
                            Send Message
                        </button>
                    </div>

                </div>
            </div>
            <div className='p-5 shadow my-10'>
                <address className="text-center font-bold text-2xl text-red-500 my-2">
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </address>
                <div className="w-full flex justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.519920805443!2d90.38811597511558!3d23.764493278660744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75f12593707%3A0x7893c5f89cc38b83!2s111%20Bijoy%20Sarani%20-%20Tejgaon%20Link%20Rd%2C%20Dhaka%201215!5e0!3m2!1sen!2sbd!4v1748715882633!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;