import Heading from '../Utils/Heading'
import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import HeroReview from '../assets/HeroReview.jpg'
import Lii from '../assets/Lii.jpg'
import venely from '../assets/venely.jpg'
import Maxn from '../assets/Maxn.jpg'
const Reviews = () => {
  return (
    <div className='bg-[#1b2316] flex flex-col px-2  py-20 w-full'
    ><Heading title='customer review'/>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center gap-8'>
 <div  className='max-w-[400px] flex flex-col text-white/70 items-start rounded-4xl py-12 px-8 backdrop-blur-[20px] border-2 border-white/10 bg-white/5 shadow-lg overflow-clip border-t-0 '>
            <div className="  absolute -top-10 left-1/2 -translate-x-1/2 w-10/12 h-[60px] bg-[#1b2316] rounded-b-full z-10 "></div>

                            <div className='flex gap-5 py-6'>
                                <img src={HeroReview} className='w-10 h-10 object-cover rounded-full' alt="" />
                                <div >
                                    <h6 className='mb-1 text-2xl font-semibold text-white'>Maxn Raval</h6>
                                    <div className="flex items-center gap-2 text-yellow-300 text-sm">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalf />
                                    </div>
                                </div>

                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </div>
                         <div  className='max-w-[400px] flex flex-col text-white/70 items-start rounded-4xl py-12 px-8 backdrop-blur-[20px] border-2 border-white/10 bg-white/5 shadow-lg overflow-clip border-t-0 '>
            <div className="  absolute -top-10 left-1/2 -translate-x-1/2 w-10/12 h-[60px] bg-[#1b2316] rounded-b-full z-10 "></div>

                            <div className='flex gap-5 py-6'>
                                <img src={venely} className='w-10 h-10 object-cover rounded-full' alt="" />
                                <div >
                                    <h6 className='mb-1 text-2xl font-semibold text-white'>venely k</h6>
                                    <div className="flex items-center gap-2 text-yellow-300 text-sm">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalf />
                                    </div>
                                </div>

                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </div>
            <div  className='max-w-[400px] flex flex-col text-white/70 items-start rounded-4xl py-12 px-8 backdrop-blur-[20px] border-2 border-white/10 bg-white/5 shadow-lg overflow-clip border-t-0 '>
            <div className="  absolute -top-10 left-1/2 -translate-x-1/2 w-10/12 h-[60px] bg-[#1b2316] rounded-b-full z-10 "></div>

                            <div className='flex gap-5 py-6'>
                                <img src={Lii} className='w-10 h-10 object-cover rounded-full' alt="" />
                                <div >
                                    <h6 className='mb-1 text-2xl font-semibold text-white'>Lii thakur</h6>
                                    <div className="flex items-center gap-2 text-yellow-300 text-sm">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalf />
                                    </div>
                                </div>

                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </div>
        </div></div>
  )
}

export default Reviews