import React from 'react'
import { HiPhone, HiEnvelope } from 'react-icons/hi2';

const TopBar = () => {
    return (
        <section className=' bg-primaryColor p-2'>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center'>
          <div className='flex items-center gap-4'>
                <p className='text-white text-sm font-medium cursor-pointer'><HiPhone className='mr-1 text-[#E8F5FF] inline' />+880-17456789</p>
                <p className='text-white text-sm font-medium cursor-pointer'><HiEnvelope className='mr-1 text-[#E8F5FF] inline' />the404@coders.com</p>
            </div>
            <div className='flex items-center gap-2'>
                <h3 className='text-white text-sm font-medium'>No one has ever become poor from giving</h3>
                <button className='my_small_button border-l-2 border-l-white border-b-2 border-b-white'>Donate</button>
            </div>
          </div>
        </section>
    )
}

export default TopBar