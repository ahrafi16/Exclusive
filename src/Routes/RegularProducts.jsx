import React, { useContext, useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const RegularProducts = ({ limit }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hoverStates, setHoverStates] = useState({});
    const { handleAddToCart, handleAddtoWishlist } = useContext(AuthContext);

    // Fetch data
    useEffect(() => {
        fetch('/regularProducts.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleMouseEnter = (index) => {
        setHoverStates((prev) => ({ ...prev, [index]: true }));
    };

    const handleMouseLeave = (index) => {
        setHoverStates((prev) => ({ ...prev, [index]: false }));
    };

    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Apply limit to products if provided
    const displayedProducts = limit ? products.slice(0, limit) : products;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20 cursor-pointer">
            {displayedProducts.map((product, index) => {
                const { image_url, name, isNew, current_price, total_reviews } = product;

                return (
                    <div
                        key={index}
                        className="relative rounded-sm min-w-[250px] group bg-gray-50 hover:shadow-lg transition-shadow duration-300 ease-in-out"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className="relative">
                            <img
                                className="h-48 object-cover mx-auto rounded-2xl"
                                src={image_url}
                                alt={name}
                            />
                            <div className="flex justify-between items-center absolute top-0 w-full p-2">
                                {isNew ? (
                                    <div className="bg-green-500 rounded-lg">
                                        <p className="text-sm text-white px-2 py-1">New</p>
                                    </div>
                                ) : (
                                    <div className="bg-green-500 rounded-lg opacity-0">
                                        <p className="text-sm text-white px-2 py-1">New</p>
                                    </div>
                                )}
                                <div className="flex flex-col gap-2 text-white cursor-pointer">
                                    <FaRegHeart onClick={() => handleAddtoWishlist(product)} className="bg-red-500 rounded-full p-2 text-3xl hover:bg-red-400" />
                                    <Link to={`/product/${product.product_id}`} state={product}>
                                        <MdOutlineRemoveRedEye className='bg-red-500 rounded-full p-2 text-3xl hover:bg-red-400' />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p className="flex gap-2 text-lg">
                                <span className="text-red-500">${current_price}</span>
                            </p>
                            <div className="flex items-center gap-1 text-lg">
                                <div className="rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <input
                                            key={star}
                                            type="radio"
                                            name={`rating-${index}`}
                                            className="mask mask-star-2 bg-orange-400"
                                            aria-label={`${star} star`}
                                            defaultChecked={star <= total_reviews}
                                        />
                                    ))}
                                </div>
                                ({total_reviews})
                            </div>
                        </div>

                        {/* Add To Cart button */}
                        {hoverStates[index] && (
                            <div
                                className="absolute bottom-2 left-0 right-0 mx-auto w-3/4 bg-black text-center rounded-sm transition-opacity duration-300 ease-in-out opacity-100"
                            >
                                <p onClick={() => handleAddToCart(product)} className=" text-white text-center p-2 cursor-pointer">Add To Cart</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default RegularProducts;