import React from 'react'
import BackgroundImg from '../assets/BackgroundImage.jpg'
import { FaPlay, FaStar, FaStarHalf } from 'react-icons/fa'
import HeroReview from '../assets/HeroReview.jpg'
import HeroCard from '../assets/HeroCard.png'
import { BiArrowToRight, BiArrowToTop } from 'react-icons/bi'
const Home = () => {

    return (
        <div className='w-full font-inter text-white/80 '>
            <div className='min-h-screen bg-center bg-cover p-10 pt-34' style={{ backgroundImage: `url(${BackgroundImg})` }}>
                {/* herosection */}
                <div className='grid grid-cols-2'>
                    {/* left-side */}
                    <div className=' flex flex-col justify-between'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-semibold text-6xl'>Breath Natural</h2>
                            <p className='text-sm max-w-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='flex gap-6'>
                                <button className='border-2 font-light rounded-lg border-white/60 px-6 py-1'>
                                    Explore
                                </button>
                                <span className='text-sm flex items-center gap-3'>
                                    <FaPlay className='rounded-full border-white/60 border-2 p-2 text-4xl' />
                                    Live Demos..
                                </span>
                            </div>
                        </div>
                        <div className='max-w-[400px] flex flex-col items-start rounded-4xl py-8 px-6 backdrop-blur-[20px] border border-white/10 bg-white/5 shadow-lg '>
                            <div className='flex gap-5'>
                                <img src={HeroReview} className='w-10 h-10 object-cover rounded-full' alt="" />
                                <div >
                                    <h6 className='mb-1'>alena Patel</h6>
                                    <div className="flex items-center gap-1 text-yellow-300 text-sm">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalf />
                                    </div>
                                </div>

                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                        </div>
                    </div>
                    {/* right-side */}
                    <div className='relative rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col  w-[280px] h-[380px] '>
{/* <div  className='absolute inset-0 rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]  overflow-hidden '>  </div> */}
    <img className='absolute -top-20 left-1/2 -translate-x-1/2 z-10' src={HeroCard} alt="" />

<div className='mt-50 p-4 h-full'>
    <h6 className='text-sm'>Trendy House Plant</h6>
    <span><h2></h2><BiArrowToRight/></span>
</div>
                    </div>



                    
                </div>

            </div>
        </div>
    )
}

export default Home