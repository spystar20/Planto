import React from 'react'
import Card from '../Utils/Card'
import trendy from '../assets/Trendy1.png'
import Heading from '../Utils/Heading'
import { cardData } from '../CardData'
const CardGrid = () => {
  return (
    <div className='bg-[#1b2316] flex flex-col  py-20 w-full'>
        <Heading  title='Our Top Selling'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 self-center'>
        {cardData.map((card)=>(
<Card key={card.id} img={card.img} />
))}
</div>
    </div>
  )
}

export default CardGrid