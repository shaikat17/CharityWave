import Image from 'next/image'
import React from 'react'
import { HiDotsHorizontal, HiStar } from 'react-icons/hi';
import { HiMapPin, HiCalendar, HiShare } from 'react-icons/hi2';

const UpcomingEvents = () => {
  return (
    <div>
      <h3 className='font-semibold text-2xl text-center mt-2 mb-8'>Upcoming Events!!</h3>
     {
      eventData.map(event=>
        <div className="card card-side bg-base-100 shadow-lg mb-10">
        <figure className='border-t-4 border-t-primaryColor border-l-4 border-l-primaryColor'><Image className='' width={400} height={600} priority src={event.image} alt="Movie" /></figure>
        <div className="card-body border-b-4 border-b-primaryColor border-r-4 border-r-primaryColor rounded-br-2xl">
          
        <div className='flex gap-3 justify-end mb-3 text-secondaryColor'>
     <HiDotsHorizontal className='cursor-pointer inline text-black w-5 h-5'/>
       <HiShare className='cursor-pointer inline text-black w-5 h-5'/>
         </div>

          <h2 className="card-title">{event.title}</h2>
          <p className='mb-0'>{event.des}</p>
         <div className='flex justify-between text-start  text-textColor my-2'>
         <p className='flex gap-1 text-[15px] text-textColor'><HiCalendar className='inline text-textColor w-5 h-5'/>{event.date}</p>
          <p className='flex gap-1  text-[15px] text-textColor'><HiMapPin className='inline text-textColor w-5 h-5'/>{event.location}</p>
         </div>
         <div className='flex justify-between text-start text-secondaryColor'>
         <p className='flex gap-1 text-[15px] text-textColor'><HiStar className='inline text-yellow-200 w-5 h-5'/>Interested: {event.interested}</p>
          <p className='flex gap-1 text-[15px] text-textColor'><HiCalendar className='inline text-green-300 w-5 h-5'/>Going: {event.going}</p>
         </div>
          <div className="card-actions mt-2">
            <button className="bg-yellow-200 border-0 rounded-[8px] py-2 px-4 md:px-5 text-[16px] capitalize text-black">Interested</button>
            <button className="my_button">Going</button>
          </div>
        </div>
      </div>)
     }
    </div>
  )
}

export default UpcomingEvents

const eventData=[
    {
      "image": "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "date": "2023-07-15",
      "title": "Summer Music Festival",
      "des":"I have found that among its other benefits, giving liberates the soul of the giver.",
      "location": "City Park",
      "interested": 200,
      "going": 120
    },
    {
      "image": "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "date": "2023-08-05",
      "title": "Food Truck Festival",
      "des":"I have found that among its other benefits, giving liberates the soul of the giver.",
      "location": "Downtown Square",
      "interested": 300,
      "going": 180
    },
    {
      "image": "https://images.unsplash.com/photo-1591522810850-58128c5fb089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "date": "2023-09-20",
      "title": "Art Exhibition",
      "des":"I have found that among its other benefits, giving liberates the soul of the giver.",
      "location": "Art Gallery",
      "interested": 150,
      "going": 90
    },
    {
      "image": "https://images.unsplash.com/photo-1593113616828-6f22bca04804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "date": "2023-10-10",
      "title": "Tech Conference",
      "des":"I have found that among its other benefits, giving liberates the soul of the giver.",
      "location": "Convention Center",
      "interested": 400,
      "going": 250
    },
    {
      "image": "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "date": "2023-11-30",
      "title": "Charity Fundraiser",
      "des":"I have found that among its other benefits, giving liberates the soul of the giver.",
      "location": "Community Center",
      "interested": 100,
      "going": 70
    }
]