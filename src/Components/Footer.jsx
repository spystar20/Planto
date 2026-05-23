import React from 'react'
import Plant from '../assets/Plant.png'

const Footer = () => {
  return (
    <div className='bg-[#222c1d] w-full text-white px-6 lg:px-12 py-10'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
<div>
    <div className='flex items-center gap-2'>
        <img className='w-16' src={Plant} alt="" />
        <h2 className='font-bold text-4xl text-white/80'>Planto.</h2>
    </div>
    <p className='text-base text-white max-w-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div className='flex flex-col gap-6 md:items-center'>
    <h2 className='font-bold text-xl'>Quick Links</h2>
    <ul className='flex flex-col gap-2 text-base font-medium text-white/90'>
        <li >Home</li>
         <li >Types Of Plants</li> 
         <li >Contact</li>
         <li >Privacy</li>
    </ul>
</div>
<div className='flex flex-col gap-6'>
<h2 className='font-bold text-xl'>For Every Update.</h2>
<div className='border-2 border-white rounded-sm flex p-0.5 md:w-11/12 lg:w-3/4 justify-between '>
    <input type="text" className='outline-none border-none pl-3' placeholder='Enter Email' />
    <button className='bg-white text-black rounded-sm text-base px-5 py-2'>SUBSCRIBE</button>
</div>
</div>
</div>
<div className='grid grid-cols-1 md:grid-cols-3 justify-between py-6'>
    <div className='flex gap-8 text-xl font-bold'>
        <span>FB</span>
        <span>TW</span>
                 <span>LI</span>

    </div>
    <div></div>
    <div className='text-base text-white/95'>planto © all right reserve</div>
</div>
    </div>
  )
}

export default Footer