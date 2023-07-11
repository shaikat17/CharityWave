import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className='max-w-7xl mx-auto mt-8 mb-24'>
            <h2 className="text-4xl text-center font-medium md:mx-auto md:w-[25%] mb-10 mx-5">We work with The <span className='text-primaryColor'>Best </span>Partners</h2>
            <Marquee pauseOnHover className='my-12'>
                <div className='flex mx-5 lg:mx-0 gap-8'>
                    {
                        companiesInfo.map(data => 
                        <div key={data.id}>
                        <Image className="mx-auto" src={data.imgSrc} alt='logo' width={140} height={50} priority />
                        </div>
                        )
                    }
                </div>
            </Marquee>
        </div>
    )
}

export default Partners

const companiesInfo = [
    {
        "id": 1,
        "imgSrc": '/sp1.png',
    },
    {
        "id": 2,
        "imgSrc": '/sp2.png',
    },
    {
        "id": 3,
        "imgSrc": '/sp3.png',
    },
    {
        "id": 4,
        "imgSrc": '/sp4.png',
    },
    {
        "id": 5,
        "imgSrc": '/sp5.png',
    },
    {
        "id": 6,
        "imgSrc": '/sp6.png',
    },
    {
        "id": 7,
        "imgSrc": '/sp7.png',
    },
]