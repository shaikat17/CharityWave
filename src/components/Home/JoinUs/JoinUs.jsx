import Image from 'next/image'
import React from 'react'

const JoinUs = () => {
    return (
        <div className='max-w-7xl mx-auto px-5 md:px-0  my-16'>
            <div className="grid lg:grid-cols-2 items-center gap-8 my-10">
                <div>
                    <h4 className=' text-4xl font-medium text-black'>Know us a little better <br/> <span className='text-primaryColor lg:ml-[30%]'>and</span> start Helping!</h4>
                    <p className='text-[16px] my-5 '>
                        Along with most talented Volunteer and service providers we are here to help you navigate through essentials in your overall needs.. We would appreciate it if you could let us know how can we help you and also happy to work along with you to make it happen!
                    </p>
                    <button className="my_button">Join Us</button>
                </div>
                <div className="w-full">
                    <Image src="/join_img.png" alt='logo' width={900} height={2300} className='' priority />
                </div>

            </div>
        </div>
    )
}

export default JoinUs