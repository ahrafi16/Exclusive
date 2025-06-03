import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

const BestSellingProducts = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-10 my-20'>
            <div className="relative w-full rounded-sm min-w-[250px] group bg-gray-50"
                onMouseEnter={() => { setIshovered(true) }}
                onMouseLeave={() => { setIshovered(false) }}
            >
                <div className='relative'>
                    <img className='h-48 object-fit mx-auto relative rounded-2xl'
                        src="https://www.gaynors.co.uk/images/boys-never-stop-down-jacket-p22421-127001_image.jpg"
                        alt="The north coat" />
                    <div className='flex absolute top-0 w-full p-2 justify-end'>
                        <div className='flex flex-col gap-2 text-white cursor-pointer'>
                            <FaRegHeart className='bg-red-500 rounded-full p-2 text-3xl' />
                            <MdOutlineRemoveRedEye className='bg-red-500 rounded-full p-2 text-3xl' />
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="card-title">The north coat</h2>
                    <p className='flex gap-2 text-lg'><span className='text-red-500'>$260</span><span className='text-[#7f7f7f] line-through'>$360</span></p>
                    <div className='flex items-center gap-1 text-lg'><div className="rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                className="mask mask-star-2 bg-orange-400"
                                aria-label={`${star} star`}
                                defaultChecked={4}
                            />
                        ))}
                    </div>65</div>
                </div>

            </div>
            <div className="relative w-full rounded-sm min-w-[250px] group bg-gray-50"
                onMouseEnter={() => { setIshovered(true) }}
                onMouseLeave={() => { setIshovered(false) }}
            >
                <div className='relative'>
                    <img className='h-48 object-fit mx-auto relative rounded-2xl'
                        src="https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1691685101/724612_9AAB6_4076_009_097_0000_Light-Gucci-Savoy-large-duffle-bag.jpg"
                        alt="The north coat" />
                    <div className='flex absolute top-0 w-full p-2 justify-end'>
                        <div className='flex flex-col gap-2 text-white cursor-pointer'>
                            <FaRegHeart className='bg-red-500 rounded-full p-2 text-3xl' />
                            <MdOutlineRemoveRedEye className='bg-red-500 rounded-full p-2 text-3xl' />
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="card-title">Gucci duffle bag</h2>
                    <p className='flex gap-2 text-lg'><span className='text-red-500'>$960</span><span className='text-[#7f7f7f] line-through'>$1160</span></p>
                    <div className='flex items-center gap-1 text-lg'><div className="rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                className="mask mask-star-2 bg-orange-400"
                                aria-label={`${star} star`}
                                defaultChecked={4}
                            />
                        ))}
                    </div>289</div>
                </div>

            </div>
            <div className="relative w-full rounded-sm min-w-[250px] group bg-gray-50"
                onMouseEnter={() => { setIshovered(true) }}
                onMouseLeave={() => { setIshovered(false) }}
            >
                <div className='relative'>
                    <img className='h-48 object-fit mx-auto relative rounded-2xl'
                        src="https://vibegaming.com.bd/wp-content/uploads/2022/01/gammaxx-l240-argb-1-500x500-1.jpg"
                        alt="The north coat" />
                    <div className='flex absolute top-0 w-full p-2 justify-end'>
                        <div className='flex flex-col gap-2 text-white cursor-pointer'>
                            <FaRegHeart className='bg-red-500 rounded-full p-2 text-3xl' />
                            <MdOutlineRemoveRedEye className='bg-red-500 rounded-full p-2 text-3xl' />
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="card-title">RGB liquid CPU Cooler</h2>
                    <p className='flex gap-2 text-lg'><span className='text-red-500'>$160</span><span className='text-[#7f7f7f] line-through'>$180</span></p>
                    <div className='flex items-center gap-1 text-lg'>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label={`${star} star`}
                                    defaultChecked={4}
                                />
                            ))}
                        </div>
                        165</div>
                </div>

            </div>
            <div className="relative w-full rounded-sm min-w-[250px] group bg-gray-50"
                onMouseEnter={() => { setIshovered(true) }}
                onMouseLeave={() => { setIshovered(false) }}
            >
                <div className='relative'>
                    <img className='h-48 object-fit mx-auto relative rounded-2xl'
                        src="https://www.carriagehousefurnishings.com/wp-content/uploads/2015/05/j23.jpg"
                        alt="The north coat" />
                    <div className='flex absolute top-0 w-full p-2 justify-end'>
                        <div className='flex flex-col gap-2 text-white cursor-pointer'>
                            <FaRegHeart className='bg-red-500 rounded-full p-2 text-3xl' />
                            <MdOutlineRemoveRedEye className='bg-red-500 rounded-full p-2 text-3xl' />
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="card-title">Small BookSelf</h2>
                    <p className='flex gap-2 text-lg'><span className='text-red-500'>$330</span></p>
                    <div className='flex items-center gap-1 text-lg'><div className="rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                className="mask mask-star-2 bg-orange-400"
                                aria-label={`${star} star`}
                                defaultChecked={4}
                            />
                        ))}
                    </div>295</div>
                </div>

            </div>
        </div>
    );
};

export default BestSellingProducts;