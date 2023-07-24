'use client'
import React, { useEffect, useRef } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Hero.css';
import Image from 'next/image';

const content = [
  {
    title: 'Always give without remembering',
    button: 'Donate Now',
    image: '/img_1.png',
  },
  {
    title: 'Happiness result from what we give.',
    button: 'Donate Now',
    image: '/img2.png',
  },
  {
    title: 'We make a life by what we give',
    button: 'Donate Now',
    image: '/img3.png',
  },
  {
    title: 'The meaning of life is to find your gift',
    button: 'Donate Now',
    image: '/img4.png',
  }

];

export default function Hero() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (sliderRef.current && sliderRef.current.next) {
        sliderRef.current.next();
      }
    }, 5000);

    return () => {
      clearInterval(autoplay);
    };
  }, []);

  return (
    <>
      <Slider className=" slider-wrapper" ref={sliderRef}>
        {content.map((item, index) => (
          <div key={index} className='grid md:grid-cols-[.5fr,1fr] gap-4'>
          <div className="slider-content">
              <div className="inner">
                <h1>{item.title}</h1>
                <button className='my-5 btn bg-primaryColor text-white border-0 border-b-4 border-l-4 hover:border-0 hover:bg-primaryColor'>{item.button}</button>
              </div>
            </div>
            <div
              className="slider-content"
              style={{ backgroundImage: `url('${item.image}') ` }}
            >
            </div>

           

          </div>
        ))}
      </Slider>
    </>
  )
}
