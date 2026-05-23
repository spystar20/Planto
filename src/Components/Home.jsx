import React from 'react'
import BackgroundImg from '../assets/BackgroundImage.jpg'
import { FaPlay, FaStar, FaStarHalf } from 'react-icons/fa'
import HeroReview from '../assets/HeroReview.jpg'
import HeroCard from '../assets/HeroCard.png'
import Trendy1 from '../assets/Trendy1.png'
import { BiArrowToRight, BiArrowToTop } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Button from '../Utils/Button'
import { IoBagHandleOutline } from 'react-icons/io5'
import Trendy2 from '../assets/Trendy2.png'
import Heading from '../Utils/Heading'
const Home = () => {

    return (
        <div className='w-full font-inter text-white/80 -mt-26'>
            <div className='min-h-screen bg-center bg-cover p-5 md:p-10 pt-34' style={{ backgroundImage: `url(${BackgroundImg})` }}>
                {/* herosection */}
                <div className='grid grid-cols-1  md:grid-cols-3'>
                    {/* left-side */}
                    <div className=' flex flex-col justify-between gap-y-20 col-span-2'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-semibold text-5xl md:text-9xl'>Breath Natural</h2>
                            <p className='md:text-xl text-lg font-light  text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='flex gap-6'>
                          <Button>Explore</Button>
                                <span className='text-sm flex items-center gap-3'>
                                    <FaPlay className='rounded-full border-white/60 border-2 p-2 text-4xl' />
                                    Live Demos..
                                </span>
                            </div>
                        </div>
                        <div  className='max-w-[400px] flex flex-col items-start rounded-4xl py-8 px-6 backdrop-blur-[20px] border-2 border-white/10 bg-white/5 shadow-lg '>
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
                    <div className='mt-23 md:mt-0 w-full flex items-start justify-end'>
                    <div  className='relative rounded-[50px] bg-white/5 backdrop-blur-xl border-2 border-white/10  flex flex-col  w-[350px] h-[450px] px-6'>
{/* <div  className='absolute inset-0 rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]  overflow-hidden '>  </div> */}
    <img className='absolute -top-20 left-1/2 -translate-x-1/2 z-10 ' src={HeroCard} alt="" />

<div className='mt-69 p-4  text-white/60 gap-3  flex flex-col w-full'>
    <h6 className='text-sm font-light'>Trendy House Plant</h6>
    <span className='flex justify-between items-center'><h2 className='text-2xl font-normal text-white/70 '>Calathea plant</h2><MdKeyboardArrowRight className='text-2xl text-white/50'/></span>
    <Button className='px-8 py-1.5 self-start'>Buy Now</Button>
</div>
                    </div>
</div>

                    
                </div>
<div className='flex flex-col items-center justify-center my-20 gap-12'>
  <Heading title='Our Trendy plants'/>
<div className='flex flex-col gap-18 w-full'>
     <div  className='relative h-[500px] md:h-[380px] my-12 w-full rounded-3xl md:rounded-[120px] bg-white/5 backdrop-blur-xl border-2 border-white/10 grid grid-cols-1 md:grid-cols-2 px-3 md:px-6'>
<div className='relative  '>
    <img className='md:absolute w-[340px] md:-top-1/2 left-2 md:w-5/6 z-10 ' src={Trendy1} alt="" />
</div>
<div className='-mt-12 md:mt-0 p-4  text-white gap-2 md:gap-4  flex flex-col items-start justify-center w-full'>

   <h2 className='text-xl md:text-3xl font-medium  '>For Small Decs Ai Plat</h2>
       <p className=' text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
       <span className=' text-xl md:text-3xl font-medium  '>Rs. 599/-</span>
       <span className='flex gap-4 items-start '>
    <Button className='px-10 self-start '>Explore</Button>
    <span className='p-2 border-2 rounded-lg border-white/60'><IoBagHandleOutline className='text-2xl'/></span>
    </span>
</div>
                    </div>
                      <div  className='relative h-[530px] md:h-[380px] my-12 w-full rounded-3xl md:rounded-[120px] bg-white/5 backdrop-blur-xl border-2 border-white/10 grid grid-cols-1  md:grid-cols-2 px-3 md:px-6'>
                      <div className='-mt-12 md:mt-0 p-4  text-white gap-4  flex flex-col items-start justify-center w-full order-2 md:order-1'>

   <h2 className='text-xl md:text-3xl font-medium  '>For Small Decs Ai Plat</h2>
       <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
       <span className='text-xl md:text-3xl font-medium  '>Rs. 599/-</span>
       <span className='flex gap-4 items-start'>
    <Button className='px-10 self-start'>Explore</Button>
    <span className='p-2 border-2 rounded-lg border-white/60'><IoBagHandleOutline className='text-2xl'/></span>
    </span>
</div>
<div className='relative order-1 md:order-2'>
    <img className=' md:absolute -top-1/3 left-2 md:w-5/6 z-10 ' src={Trendy2} alt="" />
</div>

                    </div>
</div>
</div>
            </div>
        </div>
    )
}

export default Home