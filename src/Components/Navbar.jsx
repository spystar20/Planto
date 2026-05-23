import React from 'react'
import Plant from '../assets/Plant.png'
import { GoTriangleDown } from 'react-icons/go'
import { CiSearch } from 'react-icons/ci'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { BiMenuAltRight } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='py-8 px-2 md:px-12  flex justify-between items-center'>
        <div className='flex items-center gap-2'>
        <img className='w-10' src={Plant} alt="" />
        <h2 className='font-bold text-xl md:text-4xl text-white/80'>Planto.</h2>
    </div>
   <ul className='hidden md:flex gap-8  text-white/70 text-lg '>
    <li>Home</li>
    <li className='flex items-center gap-1'>Plants Type<GoTriangleDown/></li>
    <li>More</li>
    <li>Contact</li>
   </ul>
   <div className='flex gap-8  text-white/70 text-2xl'>
    <CiSearch/>
    <RiShoppingBag2Line/>
    <BiMenuAltRight/>
   </div>
    </div>
  )
}

export default Navbar