import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div className='h-[1px] lg:w-11/12 max-md:w-[200px] max-lg:w-[750px] mx-auto bg-white-100'></div>
        <div className='text-white-100 mb-8'>
            &#169; 2024 All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer;
