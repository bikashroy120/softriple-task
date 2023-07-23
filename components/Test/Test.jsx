"use client"

import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';


const Test = ({data}) => {

  const [color,setColor] = useState("Red")
  const [size,setSize] = useState("Small")
  const [count,setCount] = useState(1)

  return (
    <div className=' px-8'>
        <h2 className=' text-[25px] font-semibold'>{data.name}</h2>
        <p className='mb-3'>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably.</p>
        <div className=' border-t border-b py-4'>
            <h2 className=' text-[21px] font-semibold'>Price :<span className=' text-red-500'> ${data.price}</span></h2>
            <div className=' flex items-center gap-2'>

                <StarRatings
                rating={Number(4)}
                starDimension={"20px"}
                starSpacing={"3px"}
                starRatedColor="#ffd700"
                isSelectable={false}
                numberOfStars={5}
                name='rating'
                />
                <span>({data.reviews.length} Reviews)</span>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-2'>
            <h3 className=' font-semibold text-[17px]'>category :</h3>
            <span>Men</span>
        </div>

        <div className='flex items-center gap-2 mt-2'>
            <h3 className=' font-semibold text-[17px]'>Sub category :</h3>
            <span>Shart</span>
        </div>

        <div className='flex items-center gap-2 mt-2'>
            <h3 className=' font-semibold text-[17px]'>Brand  :</h3>
            <span>No Brand</span>
        </div>

        <div className='flex sm:items-center flex-col sm:flex-row gap-2 mt-4'>
            <h3 className=' font-semibold text-[17px]'>Color  :</h3>
            <div className=' flex items-center gap-3'>
                {data.colors.map((item,i)=>(
                    <button key={i} onClick={()=>setColor(item)} className={`border-2 duration-300 transition-all  rounded-md px-2 ${item === color? "border-green-500 font-semibold shadow-xl" :"border-gray-600"}`}>{item}</button>
                ))}
            </div>
        </div>
        <div className='flex sm:items-center flex-col sm:flex-row gap-2 mt-5'>
            <h3 className=' font-semibold text-[17px]'>Sizes  :</h3>
            <div className=' flex items-center gap-3'>
                {data.sizes.map((item,i)=>(
                    <button key={i} onClick={()=>setSize(item)} className={`border-2 duration-300 transition-all  rounded-md px-2 ${item === size? "border-green-500 font-semibold shadow-xl" :"border-gray-600"}`}>{item}</button>
                ))}
            </div>
        </div>

        <div className='flex sm:items-center flex-col sm:flex-row gap-2 mt-5'>
            <h3 className=' font-semibold text-[17px]'>Quantity  :</h3>
            <div className=' flex items-center'>
                <button onClick={()=>setCount((pre)=> pre===1? 1 : pre-1)}  className=' border-2 border-gray-400 text-[25px] py-0 px-4 font-semibold rounded-s-xl hover:bg-gray-400 hover:text-white'>-</button>
                <span className='border-t-2 border-b-2 border-gray-400 text-[19px] py-1 px-4 '>{count}</span>
                <button onClick={()=>setCount((pre)=>pre+1)} className=' border-2 border-gray-400 text-[25px] py-0 px-4 font-semibold rounded-e-xl hover:bg-gray-400 hover:text-white'>+</button>
            </div>
        </div>

        <div className=' flex items-center gap-4 mt-10 mb-7'>
            <button className='w-[200px] py-3 bg-red-500 font-semibold text-white'>Buy Now</button>
            <button className='w-[200px] py-3 bg-green-500 font-semibold text-white'>Add to Card</button>
        </div>
    </div>
  )
}

export default Test