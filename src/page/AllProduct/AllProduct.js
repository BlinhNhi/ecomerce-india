import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";

import myContext from "../../context/myContext";
import Layout from "../../component/Layout/Layout";
import Loader from "../../component/Loader/Loader";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";


const AllProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const context = useContext(myContext);
    const { getAllProduct, loading } = context;
    const cartItems = useSelector((state) => state.cart);

    const addCart = (item) => {
        const cleanItem = {
            ...item,
            time: item.time?.toDate?.().toISOString?.() || item.time
        };
        dispatch(addToCart(cleanItem));
        toast.success("Add to cart");
    }
    const deleteCart = (item) => {
        const cleanItem = {
            ...item,
            time: item.time?.toDate?.().toISOString?.() || item.time
        };
        dispatch(deleteFromCart(cleanItem));
        toast.success("Delete cart")
    }


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <Layout>
            <div className="py-8">
                {/* Heading  */}
                <div className="">
                    <h1 className=" text-center mb-5 text-2xl font-semibold">All Products</h1>
                </div>

                {/* main  */}
                <section className="text-gray-600 body-font">
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex justify-center">
                            {loading && <Loader></Loader>}
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {getAllProduct.map((item, index) => {
                                const { id, title, price, productImageUrl } = item
                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={() => navigate(`/productinfo/${id}`)}
                                                className="lg:h-80  h-96 w-full"
                                                src={productImageUrl}
                                                alt="blog"
                                            />
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                    E-bharat
                                                </h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    {title.substring(0, 25)}
                                                </h1>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    ₹{price}
                                                </h1>

                                                <div
                                                    className="flex justify-center ">
                                                    {cartItems.some((p) => p.id === item.id)

                                                        ?
                                                        <button
                                                            onClick={() => deleteCart(item)}
                                                            className=" bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                            Delete To Cart
                                                        </button>

                                                        :

                                                        <button
                                                            onClick={() => addCart(item)}
                                                            className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                            Add To Cart
                                                        </button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default AllProduct;