import React from 'react'
import ReactStars from "react-rating-stars-component";
import {BsBagPlusFill} from "react-icons/bs"

const Product = ({item}) => {
  return (
    <div className=' bg-white rounded-md w-full shadow-xl p-3'>
        <div className='w-full h-[230px] overflow-hidden'>
            <img src={item.image} alt="" className='w-full cursor-pointer h-[230px] object-cover transition-all duration-500 hover:scale-110'/>
        </div>
        <div className='py-3 px-2 '>
            <h3 className=' text-red-500'>Shirt</h3>
            <h2 className='py-2 text-[16px] font-semibold'>{item.title}</h2>
            <h2 className='text-red-600 text-[20px] font-semibold'>${item.price}</h2>
            <div className='flex items-center justify-between'>
                <ReactStars
                    count={5}
                    size={24}
                    value={Number(item.reating)}
                    edit={false}
                    activeColor="#ffd700"
                />
                <button className=' py-2 px-2 text-[20px] font-bold text-green-700 border-2 hover:bg-green-500 hover:text-white rounded-md border-green-500 transition-all duration-300'><BsBagPlusFill /></button>
            </div>
        </div>
    </div>
  )
}

export default Product