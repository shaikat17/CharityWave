import React from 'react'
import './Testimonial.css'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <div className='grid md:grid-cols-2 gap-8 bg-secondaryColor px-5 lg:px-0 max-w-7xl mx-auto mt-40 mb-28'>
            
            <div className='flex flex-col gap-4 justify-center px-8 mt-10 md:mt-0'>
            <h2 className='w-full text-center  mx-auto text-3xl md:text-4xl font-semibold' >We bring Solutions to make life easier for people</h2>
            <p className='text-black text-sm text-center'>From testimonials and personal experience we have enough information to conclude what has been, and are a promise of what is to come. I would be reminded just how important a client experience is whenever I would get referrals, testimonials,</p>
            </div>
            <div>
                <div className="card card1 right-[-70px] top-[13%] opacity-60 bg-primaryColor text-white relative w-[50%] md:w-96  shadow-xl">
                    <label className="absolute left-[-6%] top:[-90%] btn btn-ghost w-[80px] h-[80px] btn-circle avatar lef ">
                        <div className='w-full rounded-full '>
                            <Image src="https://images.unsplash.com/photo-1460056560479-46cf73637e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='logo' width={100} height={100} className='' priority />
                        </div>
                    </label>
                    <div className="card-body flex-col items-center justify-center">
                        <h2 className="card-title">Sam Ahmed</h2>
                        <p className=' text-sm text-center'>I have found that among its other benefits, giving liberates the soul of the giver</p>
                    </div>
                </div>
                <div className="card card2 top-0 z-10 relative w-[50%] md:w-96 bg-primaryColor text-white shadow-xl">
                    <label className="absolute left-[-6%] top:[-90%] btn btn-ghost w-[80px] h-[80px] btn-circle avatar lef ">
                        <div className='w-full rounded-full '>
                            <Image src="https://images.unsplash.com/photo-1474393695727-b2a2b9772181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='logo' width={100} height={100} className='' priority />
                        </div>
                    </label>
                    <div className="card-body flex-col items-center justify-center">
                        <h2 className="card-title">Parth</h2>
                        <p className=' text-sm text-center'>I have found that among its other benefits, giving liberates the soul of the giver</p>
                    </div>
                </div>
                <div className="card card3 right-[-70px] top-[-13%] opacity-60 relative bg-primaryColor text-white w-[50%] md:w-96  shadow-xl">
                    <label className="absolute left-[-6%] top:[-90%] btn btn-ghost w-[80px] h-[80px] btn-circle avatar lef ">
                        <div className='w-full rounded-full '>
                            <Image src="https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='logo' width={100} height={100} className='' priority />
                        </div>
                    </label>
                    <div className="card-body flex-col items-center justify-center">
                        <h2 className="card-title">Peter</h2>
                        <p className=' text-sm text-center'>I have found that among its other benefits, giving liberates the soul of the giver</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial