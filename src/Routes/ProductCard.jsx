import React, { useContext, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
    const { model, image_url, name, current_price, previous_price, total_reviews, discount } = products;
    const [isHovered, setIshovered] = useState(false);
    const { handleAddToCart, cart } = useContext(AuthContext);
    const { handleAddtoWishlist } = useContext(AuthContext);
    const isInCart = cart.some(item => item.product_id === products.product_id);
    return (
        <div className="relative rounded-sm min-w-[250px] group bg-gray-50 cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
            onMouseEnter={() => { setIshovered(true) }}
            onMouseLeave={() => { setIshovered(false) }}
        >
            <div className='relative'>
                <img className='h-48 object-fit mx-auto relative rounded-2xl'
                    src={image_url}
                    alt={name} />
                <div className='flex justify-between items-center absolute top-0 w-full p-2'>
                    <div className='bg-red-500 rounded-lg'>
                        <p className='text-sm text-white px-2 py-1'>-{discount}%</p>
                    </div>
                    <div className='flex flex-col gap-2 text-white cursor-pointer'>
                        <FaRegHeart onClick={() => handleAddtoWishlist(products)} className='bg-red-500 rounded-full p-2 text-3xl hover:bg-red-400' />
                        <Link to={`/product/${products.product_id}`} state={products}>
                            <MdOutlineRemoveRedEye className='bg-red-500 rounded-full p-2 text-3xl hover:bg-red-400' />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <h2 className="card-title">{model}{name}</h2>
                <p className='flex gap-2 text-lg'><span className='text-red-500'>${current_price}</span><span className='text-[#7f7f7f] line-through'>${previous_price}</span></p>
                <div className='flex items-center gap-1 text-lg'>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                className="mask mask-star-2 bg-orange-400"
                                aria-label={`${star} star`}
                                defaultChecked={star <= total_reviews}
                            />
                        ))}
                    </div>

                    ({total_reviews})</div>
            </div>
            {
                isHovered && (
                    <div className={`absolute bottom-0 left-0 right-0 mx-auto w-3/4 text-center rounded-sm my-2 transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-50'}`}>
                        <p
                            onClick={() => {
                                if (!isInCart) handleAddToCart(products);
                            }}
                            className={`p-2 text-white text-center rounded cursor-pointer transition-all duration-300 ${isInCart ? 'bg-red-600 cursor-not-allowed' : 'bg-black'
                                }`}
                        >
                            {isInCart ? 'Already Added ✓' : 'Add To Cart'}
                        </p>
                    </div>
                )
            }

        </div>
    );
};

export default ProductCard;