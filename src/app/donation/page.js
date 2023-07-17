'use client';
import DonationCard from '@/components/DonationCard/DonationCard';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiFilter } from 'react-icons/hi';

const DonationPage = () => {

  const locationHandler = (e) => {
    const searchValue = e.target.value;
  }


  // useEffect(() => {
  //   fetch('api/education')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //     })
  // }, [])
  useEffect(() => {
    fetch("api/education")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);


  return (
    <>
      <div className="flex justify-between max-w-7xl my-8 mx-auto px-5 lg:px-0">
        <div className="form-control flex-row items-center">
          <HiFilter className='text-[#9774FF] w-6 h-6 inline' />
          <h2 className='mr-2'>Filter: </h2>
          <label className="label cursor-pointer justify-normal gap-2">
            <input type="radio" value="seller" className="radio checked:bg-red-500" checked />
            <span className="label-text">All</span>
          </label>

          <label className="label cursor-pointer justify-normal gap-2">
            <input type="radio" value="buyer" className="radio checked:bg-blue-500" checked />
            <span className="label-text">Emergency</span>
          </label>
        </div>

        <div className="form-control">
          <select onChange={locationHandler} defaultValue='Location' name='category' className="space-y-5 select w-full max-w-xs input input-bordered">
            <option >Location</option>
            <option value="India">India</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
      </div>

      <div className='my-4 flex justify-center gap-3'>
        <Link href='/' className="my_button">Medical</Link>
        <Link href='/a' className="my_button">Starvation</Link>
        <Link href='/signup' className="my_button">Education</Link>
        <Link href='/signup' className="my_button">Orphanage</Link>
        <Link href='/signup' className="my_button">Oldage</Link>
      </div>
      <DonationCard></DonationCard>
    </>

  )
}

export default DonationPage