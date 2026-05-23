import React from 'react'
import Button from '../Utils/Button'
import { IoBagHandleOutline } from 'react-icons/io5'
const Card = ({img}) => {
  return (
       <div   className='relative rounded-[50px]  bg-white/5 backdrop-blur-xl border-2 border-t-0 border-white/10  flex flex-col  w-[350px] h-[450px] px-6'>
<div className="  absolute -top-6 left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-[#1b2316] rounded-b-full z-10 "></div>


    <img className='absolute -top-20 left-1/2 -translate-x-1/2 z-10 ' src={img} alt="" />

            <div className='mt-62 p-4  text-white/80 gap-4  flex flex-col items-start justify-center w-full'>

   <h2 className='text-2xl  '>Calathea plant</h2>
       <p className='text-base font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
       <span className='flex gap-4 justify-between w-full'>
       <span className='text-2xl  '>Rs. 359/-</span>
    <span className='p-1 border-2 rounded-lg border-white/60'><IoBagHandleOutline className='text-lg'/></span>
    </span>
</div>
                    </div>
  )
}

export default Card