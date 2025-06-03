import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.product_id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.product_id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };


    const [wishlist, setWishlist] = useState([]);
    const handleAddtoWishlist = (product) => {
        setWishlist(prevWishlist => {
            const existingProduct = prevWishlist.find(item => item.id === product.product_id);
            if (existingProduct) {
                // If product already exists in wishlist, do nothing
                return prevWishlist;
            } else {
                // Add new product to wishlist
                return [...prevWishlist, { ...product }];
            }
        });
    }

    const [deleteList, setDeleteList] = useState([]);
    const handleDelete = (product) => {
        setWishlist(prevWishlist => {
            const updated = prevWishlist.filter(item => item.product_id !== product.product_id);
            return updated;
        });
        setDeleteList(prevDeleteList => {
            const existingProduct = prevDeleteList.find(item => item.product_id === product.product_id);
            if (existingProduct) {
                // If product already exists in delete list, do nothing
                return prevDeleteList;
            } else {
                // Add new product to delete list
                return [...prevDeleteList, { ...product }];
            }
        });
    };


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        setLoading,
        handleAddToCart,
        cart,
        setCart,
        handleAddToCart,
        wishlist,
        setWishlist,
        handleAddtoWishlist,
        handleDelete,
        deleteList,
        setDeleteList
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;