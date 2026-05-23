import React from 'react'

const Heading = ({title}) => {
  return (
      <div className="self-center relative inline-block px-2 py-1 md:px-6 md:py-3 rounded-2xl mb-23">
  {/* Top Left */}
  <span  className="absolute  bottom-0 left-0 h-10 w-10 border-b-3 border-l-3 border-white rounded-bl-lg"></span>

  {/* Bottom Right */}
  <span className="absolute top-0 right-0 h-10 w-10 border-t-3 border-r-3 rounded-tr-lg border-white"></span>

  <h2 className="text-4xl font-semibold capitalize text-white">
{title}  </h2>
</div>
  )
}

export default Heading