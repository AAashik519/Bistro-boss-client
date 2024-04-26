import React from 'react'

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className='text-center my-10 max-w-sm mx-auto'>
        <p className='text-[#f3bc3a] mb-2'>{subHeading}</p>
        <h3 className='uppercase border-y-2 text-3xl font-medium border-gray-300 p-4'>{heading}</h3>
    </div>
  )
}

export default SectionTitle