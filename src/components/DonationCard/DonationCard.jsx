"use client";
import Image from "next/image";
import cardImg from "../../../public/cardImg.jpg";
import {
  FaRegClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaFolderPlus,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import Link from "next/link";
import { dateInfo } from "@/utility/TimeCalculation";


const DonationCard = ({ categoryData, category }) => {
  const { _id, seeker_image, seeker_name, location, deadline, amount, reason, createdAt, emergency, verification } = categoryData;
  console.log(categoryData);



  const [daysAgo, monthName, date] = dateInfo(createdAt)

  const getrand = () => {
    return (Math.floor(Math.random() * 10))
  }
  return (
    <div className="bg-secondaryColor p-8 rounded-xl">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center">
          <div className="w-[60px] h-[60px] rounded-full border">
            <label className="btn btn-ghost w-[60px] h-[60px] btn-circle avatar mx-auto">
              <div className='w-full rounded-full mx-auto'>
                <Image src={`https://source.unsplash.com/random?sig=${getrand()}`} alt='logo' width={100} height={100} className='' priority />
              </div>
            </label>
          </div>
          <div>
            <h5 className="font-bold">{seeker_name}</h5>
            <div className="flex gap-2">
              <div className="flex items-center">
                <div>
                  <FaRegClock className="mr-1"></FaRegClock>
                </div>

                <p className="text-[14px] text-textColor" >{`${Math.round(daysAgo)} days ago`}</p>
              </div>
              <div className="flex items-center">
                <div>
                  <FaMapMarkerAlt className="mr-1"></FaMapMarkerAlt>
                </div>
                <p className="text-[14px] text-textColor" >{location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-2xl">
          {
            verification==='true' && 
            <Link href="#">
            <FaCheckCircle className="text-yellow-500"></FaCheckCircle>
          </Link>
          }
        {
          emergency==='true' &&
          <Link href="#">
            <FaFolderPlus className="text-primaryColor"></FaFolderPlus>
          </Link>
        }
        </div>
      </div>
      <div>
        {
          console.log(amount - 42)
        }
        <div className="flex gap-2 items-center">
          <progress
            className="progress progress-accent w-56"
            value={amount - (amount - 42) || '6'}
            max="100"
          ></progress> <span className="text-gray-600 text-[12px]">
            BDT {amount - 42} remaining
          </span>
        </div>

        <p className="mb-2">Deadline: {deadline}</p>
        <h2 className="text-xl font-semibold">{reason}</h2>
          <div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              vel sint....
            </p>
          </div>
          <div className="text-3xl flex justify-end mt-3 text-primaryColor">
            <Link href={`/donation/${_id}?category=${category}`}>
              <FaArrowAltCircleRight></FaArrowAltCircleRight>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default DonationCard;
