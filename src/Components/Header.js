"use client"
import React from 'react'
import { useState } from "react";
import {AiFillPlusCircle} from 'react-icons/ai'
import {AiFillMinusCircle} from 'react-icons/ai'

import Logo from '../image/1.png'
import Image from 'next/image'
import Lg from '../image/demon.jpg'

const Header = () => {
    let [count,setcount] = useState(0);
    const handelMinus =()=>{
            if(count === 0){
                setcount(0)
            }else{
                setcount(count-1)
            }
        
        }
        const handelPlus =()=>{
            setcount( count+1)
        }
  return (
        <>
            <div className='bg-gray-500 flex items-center h-20 justify-between text-white'>
                <div className='ms-3'>
                    <Image src={Logo}  className=" w-16 h-16" />
                </div>
                <div className='flex gap-5  '>
                    <p>Home</p>
                    <p>Contact</p>
                    <p>Content</p>
                    <p>Blog</p>
                </div>
                <div className='me-3'>Search</div>
            </div>
            <div className='w-full h-screen relative'>
                <Image src={Lg} className='w-full h-full object-cover '/>
                <div className=' absolute w-full h-screen text-white top-0 bg-gray-800/80 flex flex-col justify-center  text-center '>
                        <h1 className='py-10 text-2xl' >Counter-App made by Abu-bakar</h1>
                    <div className='  max-w-2xl mx-auto items-center justify-center border border-gray-400 shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex w-80 h-40 gap-9 '>
                         
                        <button onClick={handelMinus} className='text-3xl'>
                            <AiFillMinusCircle/>
                        </button>
                        <p className='text-2xl'>{count}</p>
                        <button onClick={handelPlus} className='text-3xl'>
                            <AiFillPlusCircle/>
                        </button>

                    </div>
                </div>
            </div>
        </>
  )
}

export default Header
