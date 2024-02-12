// CartDrawer.js
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useCart } from './CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className={`fixed top-0 right-0 h-full w-96 bg-white border-l border-gray-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
      <button className='absolute top-0 right-0 p-2 text-black font-bold' onClick={onClose}>X</button>
      <h3>Sepet</h3>
      <ul className='space-y-4'>
        {cartItems.map((items) => (
          <li className='bg-gray-100 roundend-sm m-4 p-3 flex items-center pl-4' key={items.id}>
            <img src={items.image} className='w-20 p-2' alt="" />
            <p className='ml-4'>{items.title.substring(0, 20)}</p>
            <FaRegTrashAlt className='ml-auto text-xl text-orange-600 cursor-pointer mt-16 mr-4' onClick={() => removeFromCart(items.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDrawer;
