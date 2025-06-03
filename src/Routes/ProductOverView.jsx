import { useContext, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { RiLoopLeftFill } from "react-icons/ri";
import { AuthContext } from "../provider/AuthProvider";



const ProductOverView = () => {
    const location = useLocation();
    const [qunatity, setQuantity] = useState(1);
    const { handleAddtoWishlist, handleAddToCart } = useContext(AuthContext);
    const product = location.state;
    // console.log(product, id);
    if (!product) {
        return <div className="text-center my-20">Product not found</div>;
    }
    // console.log(product);

    const handleIncrease = (q) => {
        setQuantity(q => q + 1);
    }
    const handleDecrease = (q) => {
        setQuantity(q => {
            if (q > 1) {
                return q - 1;
            }
            return q;
        }
        );
    }
    return (
        <div className='mx-auto px-20'>
            <div className="my-5">
                <p>Home {location.pathname}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center my-10">
                <div className="flex gap-10 flex-2 items-center">
                    <div className="flex flex-col justify-between w-1/5">
                        <img className="bg-gray-200 lg:rounded-2xl m-2" src={product.image_url} alt={product.name} />
                        <img className="bg-gray-200 lg:rounded-2xl m-2" src={product.image_url} alt={product.name} />
                        <img className="bg-gray-200 lg:rounded-2xl m-2" src={product.image_url} alt={product.name} />
                        <img className="bg-gray-200 lg:rounded-2xl m-2" src={product.image_url} alt={product.name} />
                    </div>
                    <div className="w-full">
                        <img className="bg-gray-200 w-full rounded-2xl" src={product.image_url} alt={product.name} />
                    </div>
                </div>
                <div className="flex flex-col space-y-5 flex-1">
                    <div className="flex flex-col space-y-5 border-b pb-2">
                        <h2 className="font-bold text-xl">{product.name}</h2>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                            <span>({product.total_reviews} Reviews) | </span>
                            <span className={product.in_stock ? "text-green-400" : "text-red-400"}> {product.in_stock ? "In Stock" : "Out of Stock"} </span>
                        </div>
                        <p className="text-xl font-semibold">${product.current_price}</p>
                        <p>{product.description}</p>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <div className="flex gap-2">
                            <p>Colours:</p>
                            {
                                product.availableColor ? (product.availableColor.map((color, index) => (
                                    < input
                                        key={index}
                                        type="radio"
                                        name="radio-12"
                                        className={`radio bg-${color}-300 border-${color}-300 checked:bg-${color}-200 checked:text-${color}-600 checked:border-${color}-600`} />
                                )
                                )) :
                                    (
                                        <input
                                            type="radio" name="radio-12" defaultChecked
                                            className="radio bg-red-300 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600"
                                        />
                                        
                                    )

                            }

                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-xl">Size:</p>
                            <div className="flex gap-2 text-center">
                                <span className="p-1 w-7 border rounded-sm hover:bg-red-500 hover:text-white cursor-pointer">XS</span>
                                <span className="p-1 w-7 border rounded-sm hover:bg-red-500 hover:text-white cursor-pointer">S</span>
                                <span className="p-1 w-7 border rounded-sm hover:bg-red-500 hover:text-white cursor-pointer">M</span>
                                <span className="p-1 w-7 border rounded-sm hover:bg-red-500 hover:text-white cursor-pointer">L</span>
                                <span className="p-1 w-7 border rounded-sm hover:bg-red-500 hover:text-white cursor-pointer">XL</span>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="font-bold flex items-center">
                                <button onClick={handleDecrease} className="btn text-2xl hover:bg-red-500 px-3 py-1 border border-gray-500 rounded-sm hover:text-white">-</button>
                                <button className="btn text-2xl w-30 py-1 border-y border-gray-500">{qunatity}</button>
                                <button onClick={handleIncrease} className="btn text-2xl hover:bg-red-500 px-3 py-1 border border-gray-500 rounded-sm hover:text-white">+</button>
                            </div>
                            <Link to="/cart">
                                <button onClick={() => handleAddToCart({ ...product, quantity: qunatity })}
                                    className='bg-red-500 btn  text-white rounded-sm  cursor-pointer'>
                                    Buy Now
                                </button>
                            </Link>
                            <button onClick={() => handleAddtoWishlist(product)} className="btn btn-square hover:bg-red-500 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            </button>
                        </div>
                        <div className="border">
                            <div className="flex items-center gap-5 border-b p-5">
                                <div>
                                    <TbTruckDelivery className="text-5xl"></TbTruckDelivery>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Free Delivery</h3>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-5">
                                <div>
                                    <RiLoopLeftFill className="text-5xl"></RiLoopLeftFill>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Return Delivery</h3>
                                    <p>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductOverView;