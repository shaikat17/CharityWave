import React from 'react'
import { FaBookmark, FaShareAlt, FaEye, FaHeart } from 'react-icons/fa';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className='max-w-7xl my-8 mx-auto px-5 lg:px-0'>
{
    BlogsData.map(blog=>
    <div key={blog._id} className='card w-[80%] bg-base-100 shadow-xl mx-auto  mb-10 '>
    <div className='bg-secondaryColor flex items-center gap-3 px-8 py-2'>

       <label className="btn btn-ghost w-[55px] h-[55px] btn-circle avatar mx-auto">
                  <div className='w-full rounded-full mx-auto'>
                    <Image src={blog?.author?.img} alt='logo' width={100} height={100} className='' priority />
                  </div>
                </label>

    <div className='flex-grow justify-start'>
                    <h5 className='font-semibold text-lg'>{blog?.author?.name}</h5>
                    <p className='text-[14px]'>{moment().format('YYYY-MM-D')}</p>
                </div>
                <FaBookmark />
                <FaShareAlt />     
    </div>

    <div className="card-body pb-3">
<h2 className='text-xl font-semibold'>{blog.title}</h2>
<div className='w-full mx-auto my-3'>
    <Image src={blog?.image} alt='logo' width={1200} height={100} className='' priority />
       </div>  
<p>{blog?.details.length > 250 ?
                    <>{blog.details.slice(0, 250)}...<Link href={`/blog/${blog._id}`} className='text-primaryColor'>Read More</Link></> :
                    <> {blog.details}</>
                }</p>

    </div>
<hr className='w-[90%] mx-auto'/>
    <div className="text-red-300 flex gap-8 px-8 my-3">
    <p className='text-red-700'><FaHeart className='inline mr-1'/>{blog?.rating?.number}</p>
                <p className='text-primaryColor'><FaEye className='inline mr-1' />{blog?.total_view}</p>
    </div>


    </div>

    )
}
    </div>
  )
}

export default BlogPage

const BlogsData=
[
  {
    "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
    "others_info": {
      "is_todays_pick": false,
      "is_trending": true
    },
    "category_id": "1",
    "rating": {
      "number": 4.5,
      "badge": "Excellent"
    },
    "total_view": 488,
    "title": "I have found that among its other benefits, giving liberates the soul of the giver.",
    "author": {
      "name": "Samia Ahmed",
      "published_date": "2022-08-24 17:27:34",
      "img": "https://images.unsplash.com/photo-1536528947088-d655e462f4d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGlqYWIlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
    "image": "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "details": "I have found that among its other benefits, giving liberates the soul of the giver.I have found that among its other benefits, giving liberates the soul of the giver.I have found that among its other benefits, giving liberates the soul of the giver.I have found that among its other benefits, giving liberates the soul of the giver.I have found that among its other benefits, giving liberates the soul of the giver.I have found that among its other benefits, giving liberates the soul of the giver.."
  },
  {
    "_id": "0282e0e58a5c404fbd15261f11c2ab6b",
    "others_info": {
      "is_todays_pick": false,
      "is_trending": true
    },
    "category_id": "3",
    "rating": {
      "number": 4.5,
      "badge": "Excellent"
    },
    "total_view": 488,
    "title": "Giving does not only precede receiving; it is the reason for it. It is in giving that we receive.",
    "author": {
      "name": "shaikat",
      "published_date": "2022-08-24 17:27:34",
      "img": "https://images.unsplash.com/photo-1474393695727-b2a2b9772181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
    "image": "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    
    "details": "Giving does not only precede receiving; it is the reason for it. It is in giving that we receive.Giving does not only precede receiving; it is the reason for it. It is in giving that we receive.Giving does not only precede receiving; it is the reason for it. It is in giving that we receive."
  },
  {
    "_id": "f69a695f037cd9484cecaea37ca71011",
    "others_info": {
      "is_todays_pick": false,
      "is_trending": true
    },
    "category_id": "1",
    "rating": {
      "number": 4.8,
      "badge": "Excellent"
    },
    "total_view": 400,
    "title": "Happiness doesn’t result from what we get, but from what we give.",
    "author": {
      "name": "Shovan Banik",
      "published_date": "2022-08-30 16:38:45",
      "img": "https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    "thumbnail_url": "https://i.ibb.co/k8XBcMX/unsplash-Eh-Tc-C9s-YXsw-15.png",
    "image": "https://images.unsplash.com/photo-1591522810850-58128c5fb089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
     
    "details": "Happiness doesn’t result from what we get, but from what we give.Happiness doesn’t result from what we get, but from what we give.Happiness doesn’t result from what we get, but from what we give.Happiness doesn’t result from what we get, but from what we give."
  },
  {
    "_id": "f69a695f037cd9484cecaea37ca71012",
    "others_info": {
      "is_todays_pick": false,
      "is_trending": true
    },
    "category_id": "2",
    "rating": {
      "number": 4.3,
      "badge": "Excellent"
    },
    "total_view": 400,
    "title": "Sometimes those who give the most are the ones with the least to spare.",
    "author": {
      "name": "Shamim Hosan",
      "published_date": "2022-08-30 16:38:45",
      "img": "https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    "image": "https://images.unsplash.com/photo-1593113616828-6f22bca04804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "thumbnail_url": "https://i.ibb.co/k8XBcMX/unsplash-Eh-Tc-C9s-YXsw-15.png",
    
    "details": "Sometimes those who give the most are the ones with the least to spare.Sometimes those who give the most are the ones with the least to spare.Sometimes those who give the most are the ones with the least to spare.Sometimes those who give the most are the ones with the least to spare.Sometimes those who give the most are the ones with the least to spare."
  },
  {
    "_id": "11468ed61aee84de492a8b04158a22f9",
    "others_info": {
      "is_todays_pick": false,
      "is_trending": false
    },
    "category_id": "3",
    "rating": {
      "number": 4.5,
      "badge": "Excellent"
    },
    "total_view": 980,
    "title": "The meaning of life is to find your gift. The purpose of life is to give it away.",
    "author": {
      "name": "Sarwar Hosen",
      "published_date": "2022-08-24 23:15:00",
      "img": "https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    "thumbnail_url": "https://i.ibb.co/HXC719r/unsplash-Eh-Tc-C9s-YXsw-19.png",
    "image": "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      
    "details": "The meaning of life is to find your gift. The purpose of life is to give it away.The meaning of life is to find your gift. The purpose of life is to give it away.The meaning of life is to find your gift. The purpose of life is to give it away.The meaning of life is to find your gift. The purpose of life is to give it away.The meaning of life is to find your gift. The purpose of life is to give it away.The meaning of life is to find your gift. The purpose of life is to give it away."
  },
]