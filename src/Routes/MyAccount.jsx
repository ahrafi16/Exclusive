import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

// Reusable edit section component
const EditSection = ({ title, children, onCancel, onSave }) => {
    return (
        <div className="flex flex-col space-y-4 shadow p-1 md:p-10 w-2/3 transition-all duration-500 ease-in-out animate-slide-in">
            <h2 className="font-semibold text-red-500">{title}</h2>
            <fieldset className="fieldset">
                {children}
            </fieldset>
            <div className="flex gap-1 md:gap-5 md:justify-end">
                <button className="btn hover:text-rose-500" onClick={onCancel}>Cancel</button>
                <button className="btn bg-red-500 text-white rounded-sm md:px-7 py-4 cursor-pointer" onClick={onSave}>
                    Save Changes
                </button>
            </div>
        </div>
    );
};

// Add animation style (Tailwind doesn't include this exact one by default)
const style = `
@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.animate-slide-in {
  animation: slide-in 0.5s ease-out;
}
`;

const MyAccount = () => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    // console.log(user);

    const [selectedItem, setSelectedItem] = useState(null);

    const toggleEditing = (section) => {
        setSelectedItem(prev => (prev === section ? null : section));
    };

    const handleCancel = () => {
        setSelectedItem(null);
    };

    const handleSave = () => {
        alert("Changes saved!");
        setSelectedItem(null);
    };

    return (
        <div className="mx-auto px-20">
            {/* Inject custom animation */}
            <style>{style}</style>

            <div className="flex justify-between my-5">
                <p>Home {location.pathname}</p>
                <p>Welcome
                    <span className="text-red-500">
                        {
                            user?.displayName || user?.email ? ` ${user.displayName || user.email.split('@')[0].toUpperCase()}` : ' Guest'
                        }
                    </span>
                </p>
            </div>

            <div className="flex gap-1 md:gap-10 items-start my-10">
                <div className="md:p-10 md:space-y-6 w-1/3">
                    <div>
                        <h2 className="md:text-xl font-semibold text-gray-800 mb-4">Manage My Account</h2>
                        <ul className="space-y-2 md:pl-3">
                            {['profile', 'addressBook', 'payment'].map((section) => (
                                <li key={section}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleEditing(section);
                                        }}
                                        className={`block ${selectedItem === section ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
                                    >
                                        {section === 'profile' && 'My Profile'}
                                        {section === 'addressBook' && 'Address Book'}
                                        {section === 'payment' && 'My Payment Options'}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className=" md:text-xl font-semibold text-gray-800 mb-4">My Orders</h2>
                        <ul className="space-y-2 md:pl-3">
                            <li><a href="#" className="block text-gray-500 hover:text-red-500">My Returns</a></li>
                            <Link to="/cancel">
                                <li><a href="#" className="block text-gray-500 hover:text-red-500">My Cancellations</a></li>
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <h2 className=" md:text-xl font-semibold text-gray-800 mb-4">My WishList</h2>
                        <ul className="space-y-2 md:pl-3">
                            <Link to="/wishlist">
                                <li><a href="" className="block text-gray-500 hover:text-red-500">My WishList</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
                {/*user profile start  */}
                {
                    !selectedItem && (
                        <div class="w-full max-w-5xl bg-white rounded-2xl shadow p-8">
                            <div class="flex flex-col md:flex-row gap-8">

                                {/* <!-- Left: Profile Info --> */}
                                <div class="md:w-1/3 text-center">
                                    <img src="https://static.vecteezy.com/system/resources/previews/046/798/040/non_2x/red-user-account-profile-flat-icon-for-apps-and-websites-free-vector.jpg" alt="User Photo" class="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
                                    <h2 class="text-xl font-semibold">{user && user.displayName || user.email.split('@')[0].toUpperCase()}</h2>
                                    <p class="text-gray-600">{user && user.email}</p>
                                    <p class="text-gray-600">+1 234 567 890</p>
                                    <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-700 cursor-pointer">Edit Profile</button>
                                </div>

                                {/* <!-- Right: Details --> */}
                                <div class="md:w-2/3">
                                    <h3 class="text-lg font-bold mb-4 border-b pb-2">Shipping Address</h3>
                                    <p class="text-gray-700 mb-2">1234 Market St, Apt 12B</p>
                                    <p class="text-gray-700 mb-4">San Francisco, CA 94103</p>

                                    <h3 class="text-lg font-bold mb-4 border-b pb-2">Recent Orders</h3>
                                    <ul class="space-y-4">
                                        <li class="border rounded-lg p-4 shadow-sm hover:shadow-md">
                                            <div class="flex justify-between items-center">
                                                <span class="font-medium">Order #12345</span>
                                                <span class="text-sm text-gray-500">Placed on: 2025-05-30</span>
                                            </div>
                                            <p class="text-gray-600 mt-1">Status: <span class="font-semibold text-green-600">Delivered</span></p>
                                        </li>
                                        <li class="border rounded-lg p-4 shadow-sm hover:shadow-md">
                                            <div class="flex justify-between items-center">
                                                <span class="font-medium">Order #12344</span>
                                                <span class="text-sm text-gray-500">Placed on: 2025-05-25</span>
                                            </div>
                                            <p class="text-gray-600 mt-1">Status: <span class="font-semibold text-yellow-500">Shipped</span></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/*user profile end  */}

                {/* Edit Sections */}
                {selectedItem === 'profile' && (
                    <EditSection
                        title="Edit Your Profile"
                        onCancel={handleCancel}
                        onSave={handleSave}
                    >
                        <div className="flex justify-between gap-10">
                            <div className="w-full">
                                <label className="label text-black">First Name</label>
                                <input type="text" className="input bg-gray-100 border-none w-full" placeholder="Muhammad" />
                            </div>
                            <div className="w-full">
                                <label className="label text-black">Last Name</label>
                                <input type="text" className="input bg-gray-100 border-none w-full" placeholder="Fahim" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-10">
                            <div className="w-full">
                                <label className="label text-black">Email</label>
                                <input type="email" className="input bg-gray-100 border-none w-full" placeholder="muhammadfahim4@gmail.com" />
                            </div>
                            <div className="w-full">
                                <label className="label text-black">Address</label>
                                <input type="text" className="input bg-gray-100 border-none w-full" placeholder="Dendabor, Ashulia, Savar, Dhaka" />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="label text-black">Password Changes</label>
                            <input type="password" className="input bg-gray-100 border-none w-full" placeholder="Current Password" />
                            <input type="password" className="input bg-gray-100 border-none w-full" placeholder="New Password" />
                            <input type="password" className="input bg-gray-100 border-none w-full" placeholder="Confirm New Password" />
                        </div>
                    </EditSection>
                )}

                {selectedItem === 'addressBook' && (
                    <EditSection
                        title="Edit Your Address Book"
                        onCancel={handleCancel}
                        onSave={handleSave}
                    >
                        <label className="label text-black">New Address</label>
                        <input type="text" className="input bg-gray-100 border-none w-full" placeholder="Add a new address" />
                    </EditSection>
                )}

                {selectedItem === 'payment' && (
                    <EditSection
                        title="Edit Your Payment Options"
                        onCancel={handleCancel}
                        onSave={handleSave}
                    >
                        <label className="label text-black">Card Number</label>
                        <input type="text" className="input bg-gray-100 border-none w-full" placeholder="Card Number" />
                    </EditSection>
                )}
            </div>
        </div>
    );
};

export default MyAccount;
