"use client"

import React, { useState } from 'react'
import Container from '../Container'
import Slyder from '../Slyder/Slyder'
import Test from '../Test/Test'
import Description from '../Description'
import SHIPPING from '../SHIPPING'
import Reviews from '../Reviews'
import Product from '../Product'



const DetailsTop = ({data,product}) => {
  const [active,setActive] = useState(1)

  const filterData = [
    {
      id:1,
      title:"Description"
    },
    {
      id:2,
      title:"Reviews"
    },
    {
      id:3,
      title:"Shipping & Delivery"
    },
  ]


  return (
    <Container>
    <div className=' lg:mt-10 mt-20 flex items-start lg:flex-row flex-col gap-10'>
        <div className='lg:flex-[3] flex-1 w-full  bg-white py-5 px-3 rounded-xl shadow-md'>
            <Slyder image = {data.image}/>
        </div>
        <div className='lg:flex-[5] flex-1 w-full bg-white border py-5 rounded-xl shadow-md'>
            <div>
              <Test data={data}/>
            </div>
        </div>
    </div>

    <div className=' mt-12 flex items-center flex-wrap sm:px-0 px-5 gap-3'>
        {
          filterData.map((item,i)=>(
            <button key={i} onClick={()=>setActive(item.id)} className={`py-2 px-4 border rounded-2xl font-semibold duration-300 transition-all ${item.id === active ? " shadow-xl text-green-500 border-green-500" : "border-gray-300"}`}>{item.title}</button>
          ))
        }
    </div>

    <div className='w-full bg-white border py-5 rounded-xl shadow-md mt-5 p-5'>
        {active === 1 && <Description />}
        {active === 2 && <Reviews data={data}/>}
        {active === 3 && <SHIPPING />}
    </div>

    <div className='py-5 mb-10'>
        <h2 className='text-[25px] font-semibold mb-3 mt-5'>Related products</h2>
        <div className=' grid grid-cols-2 md:grid-cols-3 sm:px-0 px-2 lg:grid-cols-5 sm:gap-4 gap-1'>
            {
              product.map((item,i)=>{
                return(
                  <Product key={i} item={item}/>
                )
              })
            }
        </div>
    </div>

    </Container>
  )
}

export default DetailsTop