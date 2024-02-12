import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data.slice(0, 10)); // İlk 10 ürünü al
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const CustomNextArrow = (props) => (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-orange-500 text-white font-bold -mr-14 py-2 px-4 rounded-full"
      onClick={props.onClick}
    >
      {'>'}
    </button>
  );

  const CustomPrevArrow = (props) => (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-orange-500 text-white font-bold -ml-14 py-2 px-4 rounded-full"
      onClick={props.onClick}
    >
      {'<'}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className='max-w-screen-md mx-auto mb-4 p-1'>
      <Slider {...settings}>
        {products.map((product) => (
          <Link key={product.id} to={`/details/${product.id}`}>
            <div className='p-4 w-full h-full'>
              <div className='border shadow-md border-gray-300 p-4 rounded-md'>
                <h2 className='text-xl whitespace-nowrap text-center font-bold mb-2'>
                  {product.title.substring(0, 18)}
                </h2>
                <img
                  className='w-full h-40 object-cover object-scale-down mb-2'
                  src={product.image}
                  alt={product.title}
                />
                <p className='text-orange-500 text-center mt-2 font-bold'>
                  {product.price}$
                </p>
                <button className='bg-orange-400 flex hover:bg-orange-500 text-white font-bold py-2 mt-3 mx-auto items-center justify-center mb-2 px-4 rounded-full '>
                  View Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
