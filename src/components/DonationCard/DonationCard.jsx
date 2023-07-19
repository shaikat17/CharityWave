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

const DonationCard = ({ categoryData, category }) => {
  const { _id, seeker_image, seeker_name, location, deadline, reason  } = categoryData;

  // console.log(categoryData);
  return (
    <div className="bg-gray-100 p-8 rounded-xl">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2">
          <div className="w-[60px] h-[60px] rounded-full border">
            {/* <Image
                src={seeker_image}
                alt="User"
                height={40}
                width={40}
                className="rounded-full"
              ></Image> */}
          </div>
          <div>
            <h5 className="font-bold">{seeker_name}</h5>
            <div className="flex gap-2">
              <div className="flex items-center">
                <div>
                  <FaRegClock></FaRegClock>
                </div>
                <p>14 min ago</p>
              </div>
              <div className="flex items-center">
                <div>
                  <FaMapMarkerAlt></FaMapMarkerAlt>
                </div>
                <p>{location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-2xl">
          <Link href="#">
            <FaCheckCircle className="text-yellow-700"></FaCheckCircle>
          </Link>
          <Link href="#">
            <FaFolderPlus className="text-indigo-700"></FaFolderPlus>
          </Link>
        </div>
      </div>
      <div>
        <progress
          className="progress progress-accent w-56"
          value="70"
          max="100"
        ></progress>
        <p className="mb-2">Deadline-date: {deadline}</p>
        <h2 className="text-xl font-semibold">{reason}</h2>
        <div className="flex justify-between items-center gap-5">
          <div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              vel sint....
            </p>
          </div>
          <div className="text-3xl text-orange-500">
            <Link href={`/donation/${_id}?category=${category}`}>
              <FaArrowAltCircleRight></FaArrowAltCircleRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
