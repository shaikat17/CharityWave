'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillCloseCircle, AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import VideoModal from './VideoModal';

const SuccessfulEvents = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [strYoutube, setstrYoutube] = useState({})

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(strYoutube) {
    setIsOpen(true)
    setstrYoutube(strYoutube)
  }


  return (
    <>
      <div className='ml-auto'>
        <h3 className='font-semibold text-2xl text-center mt-2 mb-8'>Recent Events!!</h3>
   {
    recentEvents.map(item=>
      <div key={item._id} className="card card-compact w-96 bg-secondaryColor mb-10">
          <figure className='relative'>
            {
              !isOpen && <Image className=" mx-auto rounded-t-3xl" src={item.image} alt='logo' width={400} height={400} priority />
            }
            <div>
              <AiFillPlayCircle onClick={() => openModal(item.strYoutube)} className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  text-white inline w-9 h-9 cursor-pointer' />
            </div>
          </figure>
          <div className="card-body mb-3">
            <p className='text-primaryColor font-medium'>{item.time}</p>
            <h2 className="card-title">{item.title}</h2>
            <p>{item.des}</p>
          </div>
        </div>)
   }
      </div>
      {isOpen && <VideoModal isOpen={isOpen} strYoutube={strYoutube} closeModal={closeModal} />}
    </>
  )
}

export default SuccessfulEvents


const recentEvents=[
  {
"_id":1,
"time":"12days ago",
"title":"Circle of Hope",
"des":"Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile.",
"image":"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
"strYoutube":"https://www.youtube.com/watch?v=F1YHh87qEpM"
},
  {
"_id":2,
"time":"19days ago",
"title":"Change for Good",
"des":"Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile.",
"image":"https://images.unsplash.com/photo-1593113616828-6f22bca04804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
"strYoutube":"https://www.youtube.com/watch?v=bdBG5VO01e0"
},
  {
"_id":3,
"time":"25days ago",
"title":"Stand for Tomorrow",
"des":"Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile.",
"image":"https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
"strYoutube":"https://www.youtube.com/watch?v=F1YHh87qEpM"
},
  {
"_id":4,
"time":"1 month ago",
"title":"Lighting the Way",
"des":"Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile.",
"image":"https://images.unsplash.com/photo-1638526970908-b18e32b0bc42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
"strYoutube":"https://www.youtube.com/watch?v=ourNBOWze7k"
},
  {
"_id":5,
"time":"2 month ago",
"title":" Hope",
"des":"Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile.",
"image":"https://plus.unsplash.com/premium_photo-1683140516842-74c378a43d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
"strYoutube":"https://www.youtube.com/watch?v=82NmMGrz1IM"
},

]