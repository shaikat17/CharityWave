// 'use client'
import Image from 'next/image';
import cardImg from '../../../public/cardImg.jpg';
import { FaRegClock, FaMapMarkerAlt, FaCheckCircle, FaFolderPlus, FaArrowAltCircleRight } from "react-icons/fa";
import Link from 'next/link';


const DonationCard = () => {
    return (
        <div className='max-w-7xl mx-auto mt-12 '>
            <div className='md:w-1/3 bg-gray-100 p-8 rounded-xl'>
                <div className='flex justify-between mb-2'>
                    <div className='flex gap-2'>
                        <div>
                            <Image src={cardImg} alt='User' height={80} width={80} className='rounded-full'></Image>
                        </div>
                        <div>
                            <h5 className='font-bold'>Shovan Banik</h5>
                            <div className='flex gap-2'>
                                <div className='flex items-center'>
                                    <div><FaRegClock></FaRegClock></div>
                                    <p>14 min ago</p>
                                </div>
                                <div className='flex items-center'>
                                    <div><FaMapMarkerAlt></FaMapMarkerAlt></div>
                                    <p>Tangail</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex gap-2 text-2xl'>
                        <Link href='#'><FaCheckCircle className='text-yellow-700'></FaCheckCircle></Link>
                        <Link href='#'><FaFolderPlus className='text-indigo-700'></FaFolderPlus></Link>
                    </div>
                </div>
                <div>
                    <progress className="progress progress-accent w-56" value="70" max="100"></progress>
                    <p className='mb-2'>Deadline-date: 17/07/2023</p>
                    <h2 className='text-xl font-semibold'>I really need donation for medical</h2>
                    <div className='flex justify-between items-center gap-5'>
                        <div >
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, vel sint....</p>
                        </div>
                        <div className='text-3xl text-orange-500'><Link href='#'><FaArrowAltCircleRight></FaArrowAltCircleRight></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;