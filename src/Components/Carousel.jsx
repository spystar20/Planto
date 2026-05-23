import Heading from '../Utils/Heading'
import React, { useState }  from 'react'
import { useEffect } from 'react'
import HeroCard from '../assets/HeroCard.png'
import Button from '../Utils/Button'
import Card4 from '../assets/Card4.png'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
  const [selectedIndex,setSelectedIndex] = useState(false)
 const onPrev = () => emblaApi?.scrollPrev()
  const onNext = () => emblaApi?.scrollNext()

   useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoplay?.play()
  }, [emblaApi])
  useEffect(() => {
  if (!emblaApi) return

  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }

  onSelect()
  emblaApi.on("select", onSelect)

  return () => {
    emblaApi.off("select", onSelect)
  }
}, [emblaApi])
  return (
    <div className='bg-[#1b2316] flex flex-col py-20 lg:px-36 w-full '>
        <Heading title='Our Best 02'/>
        <div className='embla'> 
        <div className="embla__viewport" ref={emblaRef}>
<div className='self-center w-full embla__container'>
   <div  className='embla__slide relative h-[800px] md:h-[490px] my-12 w-full rounded-[40px] bg-white/5 backdrop-blur-xl border-2 border-white/10 grid grid-cols-1 md:grid-cols-2 px-3 md:px-6'>
<div className='relative flex  '>
    <img className='md:absolute -left-12 -top-1/5  z-10 ' src={HeroCard} alt="" />
</div>
<div className=' p-8 text-white/70 gap-4 md:gap-8  flex flex-col items-start justify-center w-full'>

   <h2 className='md:text-4xl text-xl font-medium  '>We Have Small And Best O2 Plants Collection’s</h2>
       <p className='text-lg max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
       <p className='text-lg max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      
  <span className='flex items-center justify-between w-full'><Button className='px-12 py-0.5 self-start'>Explore</Button>
   <div className=" px-6">
  <div className="flex items-center justify-between text-white gap-3">

      <FaAngleLeft onClick={onPrev} className='text-2xl'/>

    <span className="text-base font-semibold text-white/40">
     <span className='text-lg'>01</span>
      <span className="text-white/40"> / </span>
     02
    </span>

      <FaAngleRight   onClick={onNext} className='text-2xl'/>
  </div>
</div></span>
  
</div>
                    </div>
                    
                     <div  className='embla__slide relative h-[840px] md:h-[490px] my-12 w-full rounded-[40px] bg-white/5 backdrop-blur-xl border-2 border-white/10 grid grid-cols-1 md:grid-cols-2 px-3 md:px-6' >
                        <div className='relative'>
    <img className='md:absolute -left-12 -top-[31%]  z-10 ' src={Card4} alt="" />
</div>
<div className=' p-8 text-white/70 gap-8  flex flex-col items-start justify-center w-full'>

   <h2 className='md:text-4xl font-medium  '>We Have Small And Best O2 Plants Collection’s</h2>
       <p className='text-lg max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
       <p className='text-lg max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      
  <span className='flex items-center justify-between w-full'><Button className='px-12 py-0.5 self-start'>Explore</Button>
   <div className=" px-6">
  <div className="flex items-center justify-between text-white gap-3">

      <FaAngleLeft onClick={onPrev} className='text-2xl'/>

    <span className="text-base font-semibold text-white/40">
     <span className='text-lg'>02</span>
      <span className="text-white/40"> / </span>
     02
    </span>

      <FaAngleRight   onClick={onNext} className='text-2xl'/>
  </div>
</div></span>
 
  
</div>
                    </div>
</div>
</div>
<div className="flex justify-center gap-2 mt-6">
  <button
    onClick={() => emblaApi?.scrollTo(0)}
    className={`w-2 h-2 rounded-full ${
      selectedIndex === 0 ? "bg-white" : "bg-white/30"
    }`}
  />

  <button
    onClick={() => emblaApi?.scrollTo(1)}
    className={`w-2 h-2 rounded-full ${
      selectedIndex === 1 ? "bg-white" : "bg-white/30"
    }`}
  />
</div>
</div>
    </div>
  )
}

export default Carousel