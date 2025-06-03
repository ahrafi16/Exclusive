import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";


const Wishlist = () => {
    const location = useLocation();
    const { wishlist, handleDelete, handleAddToCart } = useContext(AuthContext);
    const total = wishlist.length;


    return (
        <div className='mx-auto px-20'>
            <div className='my-5'>
                <p>Home {location.pathname}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Wishlist ({total})</p>
                {
                    total > 0 ? (
                        <button className='rounded-sm px-7 py-4  cursor-pointer border border-gray-400 hover:text-red-500 hover:bg-red-100 hover:border-red-500'>
                            <Link to="/cart">Move All to Bag</Link>
                        </button>
                    ) : (
                        <p className='text-red-500'>Your wishlist is empty</p>
                    )
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>
                {wishlist.map((product, index) => (
                    <div key={index} className="bg-white p-5 shadow rounded-lg">
                        <div className="relative">
                            <img className='w-full h-48 object-cover mb-4 relative' src={product.image_url} alt={product.name} />
                            <div className='flex justify-between items-center absolute top-0 w-full p-2'>
                                <div className='bg-red-500 rounded-lg'>
                                    <p className='text-sm text-white px-2 py-1'>-{product.discount}%</p>
                                </div>
                                <div className='flex flex-col gap-2 text-white cursor-pointer'>
                                    <MdOutlineDeleteForever onClick={() => { handleDelete(product) }} className='bg-white text-black rounded-full p-1 text-4xl hover:bg-red-500 hover:text-white' />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                            <p className='text-red-500'>${product.current_price}</p>
                            <p className='text-gray-500 line-through'>${product.previous_price}</p>
                        </div>

                        <button onClick={() => handleAddToCart(product)} className='mt-4 w-full bg-black text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer'>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;