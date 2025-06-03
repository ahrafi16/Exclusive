import { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Checkout = () => {
    const location = useLocation();
    const { cart, setCart } = useContext(AuthContext);
    const formRef = useRef();

    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const handleBkashPayment = (e) => {
        e.preventDefault(); // Prevent form reset
        document.getElementById("payment_modal").close(); // Close modal
        setPaymentMethod("digital");
        validateForm(); // Revalidate to enable "Place Order"
    };


    const [paymentMethod, setPaymentMethod] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const form = formRef.current;
        if (!form) return;

        const requiredFields = [
            form.firstName?.value.trim(),
            form.streetAddress?.value.trim(),
            form.city?.value.trim(),
            form.phone?.value.trim(),
            form.email?.value.trim(),
        ];

        const allFilled = requiredFields.every((val) => val !== "");
        setIsFormValid(allFilled && paymentMethod !== "");
    };

    const handlePlaceOrder = () => {
        const form = formRef.current;
        const data = {
            firstName: form.fName.value,
            companyName: form.companyName.value,
            streetAddress: form.streetAddress.value,
            apartment: form.apartment.value,
            city: form.city.value,
            phone: form.phone.value,
            email: form.email.value,
            paymentMethod,
        };
        // console.log("Order Data:", data);
        // Show modal once here
        document.getElementById("my_modal_2").showModal();
        form.reset();
        setCart([]);
        setPaymentMethod("");
        setIsFormValid(false);
    };

    let total = 0;
    cart.forEach((product) => {
        total += product.current_price * product.quantity;
    });

    return (
        <div className="mx-auto px-20">
            <div>
                <p>Home {location.pathname}</p>
            </div>
            <div>
                <h2 className="text-xl font-semibold">Billing Details</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full">
                    <form
                        ref={formRef}
                        className="fieldset"
                        onInput={validateForm}
                    >
                        <label className="label">First Name*</label>
                        <input
                            name="fName"
                            type="text"
                            className="input bg-gray-100 border-none"
                            placeholder=""
                        />
                        <label className="label">Company Name</label>
                        <input
                            name="companyName"
                            type="text"
                            className="input bg-gray-100 border-none"
                            placeholder=""
                        />
                        <label className="label">Street Address*</label>
                        <input
                            name="streetAddress"
                            type="text"
                            className="input bg-gray-100 border-none"
                            placeholder=""
                        />
                        <label className="label">Apartment, floor, etc. (optional)</label>
                        <input
                            name="apartment"
                            type="text"
                            className="input bg-gray-100 border-none"
                            placeholder=""
                        />
                        <label className="label">Town/City*</label>
                        <input
                            name="city"
                            type="text"
                            className="input bg-gray-100 border-none"
                            placeholder=""
                        />
                        <label className="label">Phone Number*</label>
                        <input
                            name="phone"
                            type="text"
                            className="input bg-gray-100 border-none"
                            placeholder=""
                        />
                        <label className="label">Email Address*</label>
                        <input
                            name="email"
                            type="email"
                            className="input bg-gray-100 border-none"
                            placeholder=""
                        />
                    </form>
                    <div className="flex gap-1 items-center my-2">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <span>Save this information for faster check-out next time</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 w-full">
                    {cart.map((product, index) => (
                        <div
                            key={index}
                            className="flex justify-between gap-2 p-5 shadow items-center text-center"
                        >
                            <p className="flex gap-2 items-center">
                                <img className="w-10" src={product.image_url} alt="" />
                                {product.name}
                            </p>
                            <p>${product.current_price}</p>
                        </div>
                    ))}
                    <div className="flex justify-between py-2 border-b">
                        <p>Subtotal:</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Total:</p>
                        <p>${total.toFixed(2)}</p>
                    </div>

                    <div className="flex gap-2 items-center my-2">
                        <input
                            type="radio"
                            name="myRadio"
                            value="digital"
                            onChange={(e) => {
                                setPaymentMethod(e.target.value);
                                validateForm();
                                setShowPaymentModal(true);
                                setTimeout(() => {
                                    document.getElementById("payment_modal").showModal();
                                }, 0);
                            }}

                            className="peer appearance-none w-5 h-5 border-2 border-black rounded-full bg-white checked:bg-black checked:border-black relative before:content-[''] before:absolute before:top-1 before:left-1 before:w-2 before:h-2 before:rounded-full before:bg-white checked:before:block before:hidden cursor-pointer"
                        />
                        {/* payment modal start*/}
                        <dialog id="payment_modal" className="modal">
                            <div className="modal-box p-0 bg-transparent shadow-none">
                                {/* bKash */}
                                <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-sm mx-auto">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <img
                                            src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg"
                                            alt="bKash Logo"
                                            className="w-14 h-14"
                                        />
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800">bKash Payment</h2>
                                            <p className="text-sm text-gray-500">Pay securely using your bKash account</p>
                                        </div>
                                    </div>

                                    <form className="space-y-4" onSubmit={handleBkashPayment}>
                                        <div>
                                            <label className="block text-gray-600 mb-1">bKash Number</label>
                                            <input
                                                type="tel"
                                                placeholder="01XXXXXXXXX"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-600 mb-1">Amount (USD)</label>
                                            <input
                                                type="number"
                                                placeholder="Enter amount"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition duration-200"
                                        >
                                            Pay Now
                                        </button>
                                    </form>

                                    <p className="mt-4 text-xs text-gray-400 text-center">
                                        Powered by <span className="font-bold text-pink-500">bKash</span>
                                    </p>
                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>


                        {/* payment modal end */}
                        <span className="flex gap-1 items-center">
                            <img
                                className="w-9"
                                src="https://freelogopng.com/images/all_img/1656227518bkash-logo-png.png"
                                alt="Bikash"
                            />
                            <img
                                className="w-9"
                                src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png"
                                alt="VISA"
                            />
                            <img
                                className="w-9"
                                src="https://pngimg.com/d/mastercard_PNG16.png"
                                alt="MasterCard"
                            />
                            <img
                                className="w-9"
                                src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png"
                                alt="Nagad"
                            />
                        </span>
                    </div>
                    <div className="flex gap-2 items-center my-2">
                        <input
                            type="radio"
                            name="myRadio"
                            value="physical"
                            onChange={(e) => {
                                setPaymentMethod(e.target.value);
                                validateForm();
                            }}
                            className="peer appearance-none w-5 h-5 border-2 border-black rounded-full bg-white checked:bg-black checked:border-black relative before:content-[''] before:absolute before:top-1 before:left-1 before:w-2 before:h-2 before:rounded-full before:bg-white checked:before:block before:hidden cursor-pointer"
                        />
                        <span>Cash On Delivery</span>
                    </div>
                    <div className="flex gap-5">
                        <input
                            className="border border-gray-500 px-7 py-4 rounded-sm"
                            type="text"
                            placeholder="Coupon Code"
                        />
                        <button className="bg-red-500 text-white rounded-sm px-7 py-4 cursor-pointer">
                            Apply Coupon
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={!isFormValid}
                            onClick={handlePlaceOrder}
                            className={`rounded-sm px-7 py-4 ${isFormValid
                                ? "bg-red-500 text-white cursor-pointer"
                                : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                }`}
                        >
                            Place Order
                        </button>

                    </div>

                    {/* Modal */}
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-2xl text-green-500">
                                Your Order Placed Successfully!
                            </h3>
                            <p className="py-4">Wait until you get products on hand.</p>
                            <p className="text-sm">Thank You. Happy Shopping!</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
