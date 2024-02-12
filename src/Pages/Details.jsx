import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import { MdFavoriteBorder } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import Carousel from '../Components/Carousel';
import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from '../Components/CartContext';


function Details() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setIsCartOpen(true);
    }
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);
  
 

  if (!product) {
    return 
    <div role="status">
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
    
  }
  const handleRemoveFromCart = () => {
    // Sepetten ürünü çıkar
    if (product) {
      const updatedCartItems = cartItems.filter(item => item.id !== product.id);
      setCartItems(updatedCartItems);
    }
  };
  

  const CartDrawer = ({ isOpen, onClose, cartItems }) => {
    return (
      <div className={`fixed top-0 right-0 h-full w-96 bg-white border-l border-gray-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
        <button className='absolute top-0 right-0 p-2 text-black font-bold' onClick={onClose}>X</button>
        <h3>Sepet</h3>
        <ul className='space-y-4 '>
          {cartItems.map((item) => (
            
            <li className='bg-gray-100 roundend-sm m-4 p-3 flex items-center pl-4' key={item.id} item={item}>
              <img src={item.image} className='w-20 p-2' alt="" />
              <p className='ml-4'>{item.title.substring(0, 20)}</p>
              <FaRegTrashAlt className='ml-auto text-xl text-orange-600 cursor-pointer mt-16 mr-4' onClick={() => handleRemoveFromCart(product.id)} />
  
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

  return (
    <div className='pb-4'>
        <Header></Header>
        <div className='container font-open'>
            <div className='flex'>
              <img src={product.image} className='border-2 p-2 mt-14' alt={product.title} style={{ maxWidth: '300px' }} />
              <div>
                <h1 className='m-14 text-xl'>{product.title}</h1>
                <div className='ml-14 flex items-center -mt-10 font-bold'>
                  <h1 className='text-sm p-1 mt-1 mr-1'>{product.rating.rate}</h1>
                  {Array.from({ length: Math.floor(product.rating.rate) }, (_, index) => (
                    <svg
                      key={index}
                      className='w-5 h-5 fill-current text-yellow-500'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2L14.39 8.45L21 9l-5 4.75L17.27 21L12 17.85L6.73 21L7.27 14.75L2 9l6.61-0.55L12 2zM12 4.53L9.92 10H4.14L8.64 13.26L7.56 19.47L12 15.82L16.44 19.47L15.36 13.26L19.86 10H14.08L12 4.53z' />
                    </svg>
                  ))}
                  <p className='ml-4 text-xs text-gray-800  opacity-80'>{product.rating.count} customer reviews</p>
                  <img src="https://cdn-icons-png.flaticon.com/512/1042/1042390.png" className='w-5 cursor-pointer h-5 ml-2' alt="" />
                  <div className='flex cursor-pointer hover:text-orange-400 duration-200'>
                    <MdFavoriteBorder className='ml-8 text-gray-800 hover:text-orange-400 duration-200 opacity-80 border-orange-400 rounded-full border-' size={20} />
                    <p className='ml-2 pt-0.5 text-gray-800  opacity-80 hover:text-orange-400 duration-200  text-xs'>Add to favorites</p>
                  </div>
              </div>
              <h1 className='ml-14 mt-8 text-3xl font-bold text-orange-300'>{product.price}$</h1>
              <hr className=' ml-4 mt-8' />
              <div className='flex'>
                <button className='ml-14 mt-8 shadow-md w-10/12 h-11 font-bold bg-orange-400 border border-orange-400 text-white px-8 rounded-lg hover:bg-orange-300 hover-text-orange-400 transition duration-200' onClick={handleAddToCart}>Add to cart</button>
                <MdFavoriteBorder onClick={handleLikeClick} className='ml-4 shadow-sm mt-7 text-orange-400 border-orange-400 rounded-full text-2xl hover:text-orange-600 duration-200 cursor-pointer' size={50}  />
              </div>
             <div>

             </div>
              </div>

              <div className='ml-14 mt-20'>
                <div className='flex w-56 shadow-xs bg-green-100 pt-1 h-8 text-xs rounded-md'>
                  <FaShippingFast className='ml-2 mr-3 mt-1 text-green-500' size={20} />
                  <p className='mt-1'>Free shipping and returns</p>

                  
                </div>
                <div className='flex w-56 shadow-xs bg-green-100 mt-2 pt-1 h-8 text-xs rounded-md'>
                  <FaShippingFast className='ml-2 mr-3 mt-1 text-green-500' size={20} />
                  <p className='mt-1'>Fast and secure shipping</p>
                </div>
                <div className='w-56 p-3 border-2 mt-6 shadow-md mt-2 pt-1 h-44 text-xs rounded-xl'>
                    <div className='w-36 h-28'>
                      <div className='flex p-2'>
                        <h1 className='hover:underline text-sm text-blue-400 cursor-pointer'>YB Product</h1>
                        <h1 className='bg-green-500 text-white ml-2 h-4 w-8 mt-0.5 text-center rounded-md cursor-pointer font-bold'>4.4</h1>
                      </div>
                      <p className='ml-2 text-xs'>118 followers</p>
                      <div className='flex h-9 pt-2 cursor-pointer bg-gray-100 shadow-md hover:shadow-lg duration-200 p-1 text-center mt-2 rounded-md'>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/3vjia-icon-line/follow-42.png" className='w-5 cursor-pointer h-5 ml-2' alt="" />
                        <p className='ml-2 mt-0.5 text-xs'>Follow the seller</p>
                      </div>
                      <div className='flex h-9 pt-2 cursor-pointer bg-gray-100 shadow-md hover:shadow-lg duration-200 p-1 text-center mt-3 rounded-md'>
                        <img src="https://static-00.iconduck.com/assets.00/message-icon-512x463-tqzmxrt7.png" className='w-5 cursor-pointer h-5 ml-2' alt="" />
                        <p className='ml-2 mt-0.5 text-xs'>Ask a question</p>
                      </div>

                    </div>
                </div>
              </div>
                  
              </div>
              <div className='p-10'>
                <h1 className='text-2xl font-bold text-center p-3'>Description</h1>
                <p className='text-center'>{product.description}</p>
                
              </div>
              
            </div>
            <Carousel></Carousel>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} />

        </div>
      
  );
}

export default Details;
