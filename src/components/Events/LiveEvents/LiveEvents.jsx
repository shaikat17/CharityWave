'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import { AiFillCloseCircle, AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import './LiveEvents.css'

const LiveEvents = () => {

    const [showVdo, setShowVdo] = useState(false)
    const [showLive, setShowLive] = useState(true)

    return (
        <div className=' max-w-7xl px-5 md:px-0 mx-auto text-primaryColor  my-8'>
          {
            showLive &&
            <div className="grid grid-cols-[1fr,.8fr,.5fr] items-center gap-3 w-[50%] mx-auto box">
                <div>
                    {
                        showVdo ?
                            <video controls autoPlay width="100%" height="100%">
                                <source src='/vdo.mp4' type="video/mp4"
                                />
                                Sorry, your browser doesn&apos;t support videos.
                            </video>
                            : <Image className="mx-auto rounded-3xl" src="/live_img.png" alt='logo' width={140} height={50} priority />
                    }
                </div>
                <div>
                    <h1 className='font-semibold'>Aiding Hearts</h1>
                    <p className='text-textColor text-[12px]'>Happening Now</p>
                </div>
                <div className='flex gap-3'>
                    {
                        showVdo ?
                            <AiFillPauseCircle onClick={() => setShowVdo(false)} className='inline w-8 h-8 cursor-pointer' />
                            : <AiFillPlayCircle onClick={() => setShowVdo(true)} className='inline w-8 h-8 cursor-pointer' />

                    }
                    <AiFillCloseCircle onClick={() => setShowLive(false)} className='inline w-8 h-8 cursor-pointer' />
                </div>
            </div>
          }
        </div>
    )
}

export default LiveEvents