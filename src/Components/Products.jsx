import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useState,useNavigate,useEffect } from "react";
import axios from 'axios'



export default function Products(){
    const [allData,setAllData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
       const getData = async() => {
        setLoading(true)
           const {data} = await axios.get('https://fakestoreapi.com/products')
           setAllData(data)
           setLoading(false)
        }
       getData()
    },[])

    console.log(allData);

    return(
        <div>
            <div className='container mt-3 flex flex-wrap justify-center py-3 space-y-4 space-x-10 text-center'>
                    {allData?.map((data, index) => (
                    <div className='mt-4 ml-8 rounded overflow-hidden w-64 h-64 md:w-80 md:h-auto shadow-md bg-white' key={index}>
                    <div className='w-auto h-full bg-gray-200 item-center justify-center mx-auto shadow-lg '>
                        <h1 className='text-2xl font-bold text-white p-4'>{data.title}</h1>
                        <img className='w-full h-40 md:h-60 p-3 sm:h-48 mx-auto rounded-3xl object-scale-down' src={data.image} alt="" />
                        <button className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 mt-2 mb-2 px-4 rounded-full' onClick={() => navigate(`/details/${data.id}`)}>View Details</button>
                    </div>
                    </div>
                ))}
                </div>
        </div>
    )
    
}