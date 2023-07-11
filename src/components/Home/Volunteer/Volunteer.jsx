'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiPhone, HiEnvelope } from 'react-icons/hi2';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Volunteer = () => {
    return (
        <div className='max-w-7xl px-5 lg:px-0 mx-auto my-28'>
            <h2 className='text-center  text-4xl font-medium mb-20'>Our Hard Working Team </h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                 breakpoints={{
          1000: {
            spaceBetween: 10,
            slidesPerView: 5,
          },
          700: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
          500: {
            spaceBetween: 4,
            slidesPerView: 3,
          },
          411: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
          300: {
            spaceBetween: 0,
            slidesPerView: 1,
          }
        }}
            >
          {
            teamGroup.map(data=>
                <SwiperSlide key={data.id}>
                    <div className="card w-full md:w-56 bg-base-100 shadow-xl">
                    <label className="btn btn-ghost w-[150px] h-[150px] btn-circle avatar mx-auto">
                  <div className='w-full rounded-full mx-auto'>
                    <Image src={data.img_src} alt='logo' width={100} height={100} className='' priority />
                  </div>
                </label>
                        <div className="card-body">
                            <h2 className="card-title">{data.name}</h2>
                                <p className='text-black text-sm font-medium cursor-pointer'><HiPhone className='mr-1 text-primaryColor inline' />{data.phone}</p>
                                <p className='text-black text-sm font-medium cursor-pointer'><HiEnvelope className='mr-1 text-primaryColor inline' />{data.email}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )
          }
            </Swiper>
        </div>
    )
}

export default Volunteer

const teamGroup = [
    {
        "id": 1,
        "img_src": "https://images.unsplash.com/photo-1460056560479-46cf73637e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "name": "Ujjal Kumar Roy",
        "email": "the404@coders.com",
        "phone": "0123456789"
    },
    {
        "id": 2,
        "img_src": "https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "name": "Shovan Banik",
        "email": "the404@coders.com",
        "phone": "0123456789"
    },
    {
        "id": 3,
        "img_src": "https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "name": "Sarwar Hosen",
        "email": "the404@coders.com",
        "phone": "0123456789"
    },
    {
        "id": 4,
        "img_src": "https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "name": "Shamim Hosan",
        "email": "the404@coders.com",
        "phone": "0123456789"
    },
    {
        "id": 5,
        "img_src": "https://images.unsplash.com/photo-1474393695727-b2a2b9772181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "name": "shaikat",
        "email": "the404@coders.com",
        "phone": "0123456789"
    },
    {
        "id": 6,
        "img_src": "https://images.unsplash.com/photo-1536528947088-d655e462f4d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGlqYWIlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "name": "Samia Ahmed",
        "email": "the404@coders.com",
        "phone": "0123456789"
    }
]