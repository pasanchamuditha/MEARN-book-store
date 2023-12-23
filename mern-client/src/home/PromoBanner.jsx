import React from 'react'
import { Link } from 'react-router-dom';
import FavBookImg from "../assets/favoritebookone.jpg"


function PromoBanner() {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex justify-between items-center gap-12'>
            <div>
            <h2 className='text-4xl font-bold mb-6 leading-snug'>
               2023 National Book Awards for Fiction Shortlist
            </h2>
                <Link to ="/shop" className=' block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded
                 hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
           </div>
            
            <div className='md:w-1/4'>
             <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
            </div>
           
        </div>

    </div>
  )
}

export default PromoBanner


        