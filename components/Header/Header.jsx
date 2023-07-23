"use client"

import React, { useState } from 'react'
import Container from '../Container'
import {BsSearch,BsCartPlus} from "react-icons/bs"
import {AiOutlineHeart,AiOutlineHome} from "react-icons/ai"
import {FaRegUser} from "react-icons/fa"
import {MdKeyboardArrowDown} from "react-icons/md"
import Link from 'next/link'
import {RxCross2} from "react-icons/rx"

const Header = () => {

    const [show,setShow] = useState(false)
    const [navShow,setNavShow] = useState(false)
    const [category,setCategory] = useState(false)

  return (
    <header>
        <div className='lg:block hidden '>
        <div className=' bg-slate-300'>
            <Container >
                <div className='flex items-center justify-between py-2'>
                    <h3>Free Shipping Over $100 & Free Returns</h3>
                    <h3>Hotline: <span>+91 8264954234</span></h3>
                </div>
            </Container>
        </div>
        <div className=' bg-green-600 py-6'>
            <Container>
                <div className=' flex items-center justify-between gap-7'>
                    <div className='w-[200px]'>
                        <h2 className='text-[25px] font-bold text-white'>Softriple</h2>
                    </div>
                    <div className='w-[100%]'>
                       <div className=' bg-white w-full flex items-center justify-between px-5 rounded-md'>
                            <input type="text" placeholder='Search Product here...'/>
                            <button className='w-[20px] h-[100%] py-4 px-4 text-[20px] font-bold text-gray-500'><BsSearch /></button>
                        </div> 
                    </div>

                    <div className='w-[25%]'>
                        <div className='flex items-center justify-end gap-10 text-white'>
                            <div className=' relative'>
                                <button className=' text-[30px]'><AiOutlineHeart /></button>
                                <div className=' absolute top-[-10px] right-[-10px] w-[20px] h-[20px] flex items-center justify-center bg-red-500 rounded-full'>
                                    2
                                </div>
                            </div>
                            <div className=' relative'>
                                <button className=' text-[30px]'><BsCartPlus /></button>
                                <div className=' absolute top-[-10px] right-[-10px] w-[20px] h-[20px] flex items-center justify-center bg-red-500 rounded-full'>
                                    5
                                </div>
                            </div>
                            <div className=' relative'>
                                <button onClick={()=>setShow((pre)=>!pre)} className=' text-[30px]'><FaRegUser /></button>
                                    {
                                        show &&                                 <div className=' absolute top-[50px] left-[-100px] bg-white shadow-md w-[150px] overflow-hidden rounded-lg text-black'>
                                        <button onClick={()=>setShow((pre)=>!pre)} className='py-3 px-3 w-full text-left hover:bg-gray-300'>Login</button>
                                        <button onClick={()=>setShow((pre)=>!pre)} className='py-3 px-3 w-full text-left hover:bg-gray-300'>Signup</button>
                                    </div>
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <div className=' border-b shadow-sm py-2 bg-white'>
            <Container>
                <div className=' flex items-center justify-between font-semibold'>
                    <div className='flex items-center gap-10'>
                    <div className=' relative'>
                        <div onClick={()=>setCategory(pre=>!pre)} className=' flex items-center cursor-pointer hover:text-green-700 transition-all duration-300'>
                            <span>Category</span>
                            <span className=' text-[25px] mt-1 mb-0'><MdKeyboardArrowDown /></span>
                        </div>

                        {
                            category &&  <div className=' overflow-hidden rounded-md absolute top-[40px] border z-10 left-0 bg-white shadow-md w-[180px]'>
                            <ul>
                                <li onClick={()=>setCategory(pre=>!pre)} className=' py-2 px-5 hover:bg-gray-200 cursor-pointer'>Man</li>
                                <li onClick={()=>setCategory(pre=>!pre)} className=' py-2 px-5 hover:bg-gray-200 cursor-pointer'>Women</li>
                                <li onClick={()=>setCategory(pre=>!pre)} className=' py-2 px-5 hover:bg-gray-200 cursor-pointer'>Baby</li>
                            </ul>
                        </div>
                        }
                    </div>

                    <Link className=' hover:text-green-700 transition-all duration-300' href={"#"}>About</Link>
                    <Link className=' hover:text-green-700 transition-all duration-300' href={"#"}>Contact</Link>
                    <Link className=' hover:text-green-700 transition-all duration-300' href={"#"}>Page</Link>
                    </div>

                    <div className=' flex items-center gap-10'>
                    <Link className=' hover:text-green-700 transition-all duration-300' href={"#"}>Privacy Policy</Link>
                    <Link className=' hover:text-green-700 transition-all duration-300' href={"#"}>Terms & Conditions</Link> 
                    </div>
                </div>
            </Container>
        </div>
        </div>


        {/* mobile navber */}

        <div className='flex lg:hidden'>
            <div className='bg-green-600 z-40 py-4 px-5 fixed top-0 left-0 w-full'> 
            <div className=' bg-white w-full flex items-center justify-between px-5 rounded-md'>
                            <input type="text" className='w-full' placeholder='Search Product here...'/>
                            <button className='w-[20px] h-[100%] py-4 px-4 text-[20px] font-bold text-gray-500'><BsSearch /></button>
                        </div> 
            </div>
            <div className='bg-green-600 z-40 py-4 px-5 fixed bottom-0 left-0 w-full'> 
            <div className='flex items-center justify-between gap-10 text-white'>
                <div className=''>
                    <button onClick={()=>setNavShow(pre=>!pre)} className=' text-[30px]'><AiOutlineHome /></button>
                </div>
                <div className=' relative'>
                    <button className=' text-[30px]'><AiOutlineHeart /></button>
                    <div className=' absolute top-[-10px] right-[-10px] w-[20px] h-[20px] flex items-center justify-center bg-red-500 rounded-full'>
                        2
                    </div>
                </div>
                <div className=' relative'>
                    <button className=' text-[30px]'><BsCartPlus /></button>
                    <div className=' absolute top-[-10px] right-[-10px] w-[20px] h-[20px] flex items-center justify-center bg-red-500 rounded-full'>
                        5
                    </div>
                </div>
                <div className=' relative'>
                    <button onClick={()=>setShow((pre)=>!pre)} className=' text-[30px]'><FaRegUser /></button>
                        {
                            show && <div className=' absolute top-[-115px] left-[-100px] bg-white shadow-md w-[150px] overflow-hidden rounded-lg text-black'>
                            <button onClick={()=>setShow((pre)=>!pre)} className='py-3 px-3 w-full text-left hover:bg-gray-300'>Login</button>
                            <button onClick={()=>setShow((pre)=>!pre)} className='py-3 px-3 w-full text-left hover:bg-gray-300'>Signup</button>
                        </div>
                        }
                </div>
            </div>
            </div>
        </div>

        {
            <div className={`w-full h-full z-50 bg-black/75 fixed top-0 left-0 ${navShow ? "block" : " hidden"}`}>
            <div className={`bg-white md:w-[40%] h-screen w-[90%] absolute transition-all top-0 duration-300 ${navShow ? "left-0" : "left-[-100%]"}`}>
                <div className=' bg-green-600 text-white px-5 py-2 flex items-center justify-between'>
                    <h2 className='text-[25px] font-bold text-white cursor-pointer'>Softriple</h2>
                    <button onClick={()=>setNavShow(pre=>!pre)} className=' text-[25px] py-3 text-green-600 hover:bg-red-500 hover:text-white px-3 bg-white rounded-full shadow-md'><RxCross2 /></button>
                </div>
                <div className='py-5 px-5'>
                    <h2 className='text-[25px] font-semibold'>All Categories :</h2>
                    <hr />
                    <div>
                        <div className=' overflow-hidden   bg-white w-full'>
                            <ul>
                                <li  className=' py-2 px-5 rounded-md hover:bg-gray-200 cursor-pointer'>Man</li>
                                <li  className=' py-2 px-5 rounded-md hover:bg-gray-200 cursor-pointer'>Women</li>
                                <li  className=' py-2 px-5 rounded-md hover:bg-gray-200 cursor-pointer'>Baby</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-5 px-5'>
                    <h2 className='text-[25px] font-semibold'>All Pages :</h2>
                    <hr />
                    <div>
                        <div className=' overflow-hidden   bg-white w-full'>
                            <ul>
                                <li  className=' py-2 px-5 rounded-md hover:bg-gray-200 cursor-pointer'>About</li>
                                <li  className=' py-2 px-5 rounded-md hover:bg-gray-200 cursor-pointer'>Contact</li>
                                <li  className=' py-2 px-5 rounded-md hover:bg-gray-200 cursor-pointer'>Page</li>
                                <li  className=' py-2 px-5 rounded-md hover:bg-gray-200 cursor-pointer'>Privacy Policy</li>
                                <li  className=' py-2 px-5 rounded-md hover:bg-gray-200 cursor-pointer'>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
    </header>
  )
}

export default Header