
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Cart = () => {
    const location = useLocation();
    const { cart } = useContext(AuthContext);
    let total = 0;
    cart.forEach(product => {
        total += product.current_price * product.quantity;

    });
    // console.log(cart, total);

    return (
        <div className='mx-auto px-2 md:px-20'>
            <div className='my-5'>
                <p>Home {location.pathname}</p>
            </div>

            <div className='flex flex-col gap-5 my-10'>
                <div className='flex  justify-between p-5 shadow items-center text-center'>
                    <p className='w-1/4'>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                {cart.map((product, index) => (
                    <div
                        key={index}
                        className="flex justify-between p-5 shadow items-center text-center"
                    >
                        <p className='flex gap-1 w-1/4  items-center'><img className='w-10' src={product.image_url} alt="" />{product.name}</p>
                        <p>${product.current_price}</p>
                        <p>{product.quantity}</p>
                        <p>${(product.current_price * product.quantity).toFixed(2)}</p>
                    </div>
                ))}

            </div>

            {/* return to home button */}
            <div className='flex justify-between items-center gap-2 mb-15'>
                <Link to="/home"><button className=' rounded-sm px-7 py-4  cursor-pointer border border-gray-400 hover:text-red-500 hover:bg-red-100 hover:border-red-500'>Return To Shop</button></Link>
                <button className=' rounded-sm px-7 py-4  cursor-pointer border border-gray-400 hover:text-red-500 hover:bg-red-100 hover:border-red-500'>Update cart</button>
            </div>

            {/* apply cuppon */}
            <div className='flex flex-col md:flex-row gap-2 justify-between items-start  my-10'>
                <div className='flex gap-5'>
                    <input className='border border-gray-500 px-7 py-4 rounded-sm' type="text" placeholder='Coupon Code' />
                    <button
                        className='bg-red-500 text-white rounded-sm px-7 py-4  cursor-pointer'
                    >
                        Apply Coupon
                    </button>
                </div>
                <div className='border p-10 flex flex-col w-full md:w-1/3'>
                    <h3>Cart Total</h3>
                    <span className='flex justify-between items-center  border-b py-5'>
                        <p>Subtotal:</p>
                        <p>${total.toFixed(2)}</p>
                    </span>
                    <span className='flex justify-between items-center  border-b py-5'>
                        <p>Shipping:</p>
                        <p>Free</p>
                    </span>
                    <span className='flex justify-between items-center  py-5'>
                        <p>Total:</p>
                        <p>${total.toFixed(2)}</p>
                    </span>
                    {
                        total > 0 && (
                            <Link to="/checkout">
                                <button
                                    className='bg-red-500 text-white rounded-sm px-7 py-4  cursor-pointer'
                                >
                                    Process To Checkout
                                </button>
                            </Link>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Cart;