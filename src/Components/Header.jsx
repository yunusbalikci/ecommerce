import ShopBag from "../assets/pictures/ShopBag.png";
import logo from "../assets/pictures/mylogo.png";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faSearch,faBasketShopping,faHeart, faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCart } from "./CartContext";
import CartDrawer from "./CartDrawer";

export default function Header() {
    const { cartItems, removeFromCart, isCartOpen, closeCart } = useCart();

    return (
        <div>
            <header className="h-28 shadow-sm -mb-3 font-open bg-white">
                <div className="container flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <img className="w-40 h-28" src={logo} alt="" />
                    </Link>

                    <div className="flex w-full item-center justify-center rounded-lg relative">
                        <span className="absolute left-4 ml-36 top-2 text-lg text-orange-600">
                        <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input type="text" placeholder="Search" className="w-96 border-2 pl-10 border-orange-400 outline-none focus:border-orange-400 rounded-lg px-4 py-2 bg-gray-100" />
                        <button className="bg-orange-400 border border-orange-400 text-white px-8 ml-5 rounded-lg hover:bg-orange-300 hover-text-orange-400 transition duration-200">Search</button>
                    </div>

                    <div className="flex items-center space-x-8">
                        <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                            <FontAwesomeIcon className="text-orange-300 hover:text-orange-500 mt-2 duration-200" icon={faHeart} />
                            </div>
                            <div className="text-xs mt-1 leading-3 whitespace-nowrap">WISH LIST</div>
                        </a>
                        <Link href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                            <CartDrawer isOpen={isCartOpen} onClose={closeCart} cartItems={cartItems} removeFromCart={removeFromCart} />
                            <FontAwesomeIcon className="text-orange-300 hover:text-orange-500 mt-1 duration-200" icon={faBasketShopping} />
                            </div>
                            <div className="text-xs mt-1 leading-3">CART</div>
                        </Link>
                        <Link to="/login" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                            <FontAwesomeIcon className="text-orange-300 hover:text-orange-500 mt-2 pt-2 duration-200" icon={faCircleUser} />
                            </div>
                            <Link to="/login" className="text-xs mt-1 leading-3">ACCOUNT</Link>
                        </Link>
                    </div>

                </div>

            </header>
            <div className="w-full h-12 bg-orange-400 font-open cursor-pointer">
                <div className="container text-xl flex space-x-16">
                <h1 className="pt-3 text-white font-bold uppercase">Electronics</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Clothes</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Shoes</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Accessories</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Jewellery</h1>
                <h1 className="pt-3 text-red-500 font-bold uppercase">Sale</h1>
                <h1 className="pt-3 text-white font-bold uppercase">Populer</h1>


                </div>
            </div>
        </div>
    )
}