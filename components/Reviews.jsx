"use client"

import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';

const Reviews = ({data}) => {
    const [value,setValue]=useState(1)

  return (
    <div>
        <h2 className=' text-[20px] font-semibold mt-2'>Customer Reviews</h2>
        <div className=' flex items-center gap-3 mb-3'>
                <StarRatings
                rating={Number(data.totalrating)}
                starDimension={"20px"}
                starSpacing={"3px"}
                starRatedColor="#ffd700"
                isSelectable={false}
                numberOfStars={5}
                name='rating'
                />
            <p>Based on {data.reviews.length} Reviews</p>
        </div>
        <hr />

        <div className='py-5'>
            <h3 className=' text-[18px] font-semibold'>Write a Review</h3>
            <div className=' mb-2'>
                <div className=' mb-2'>
                <StarRatings
                rating={Number(value)}
                starDimension={"20px"}
                starSpacing={"3px"}
                starRatedColor="#ffd700"
                numberOfStars={5}
                name='rating'
                changeRating={(newRating, name)=>setValue(newRating)}
                />
                </div>
            <textarea className=' p-3 border border-gray-300 w-full h-[120px]' placeholder='Comments...' name="" id=""></textarea>
            <div className=' mt-5'>
                <button className='py-3 font-semibold px-10 bg-green-500 rounded-md hover:bg-green-700 duration-300 text-white'>Submit Review</button>
            </div>
            </div>
        </div>

        <div className='py-5 pb-7'>
            <hr />
        </div>

        <div>
            {
                data.reviews.map((item,i)=>(
                    <div key={1} className=' mb-5'>
                    <div className=' flex items-center gap-3'>
                        <div className='w-[60px] h-[60px] bg-gray-600 rounded-full overflow-hidden'>
                            <img className='w-full h-full object-cover' src="image/user2.png" alt="" />
                        </div>
                        <div>
                            <h2 className='text-[20px] font-semibold mb-[-10px] p-0'>{item.username}</h2>
                            <StarRatings
                            rating={Number(data.totalrating)}
                            starDimension={"20px"}
                            starSpacing={"3px"}
                            starRatedColor="#ffd700"
                            numberOfStars={5}
                            name='rating'
                            />
                        </div>
                    </div>
                    <p className='ml-[75px]'>{item.comment}</p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Reviews