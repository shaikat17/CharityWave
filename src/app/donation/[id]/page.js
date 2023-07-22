"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import {
  FaCheckCircle,
  FaFolderPlus,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";

const DonationDetailsPage = ({ params }) => {
  const [singleData, setSingleData] = useState([]);
  const getData = async (category, id) => {
    try {
      const res = await fetch(`/api/${category}/${id}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      return null; // Handle error case appropriately
    }
  };

  console.log(singleData);

  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(search, id);
      console.log(data);
      setSingleData(data);
    };

    fetchData();
  }, [search, id]);

  const {
    seeker_name,
    seeker_image,
    seeker_email,
    amount,
    createdAt,
    deadline,
    emergency,
    location,
    phone_no,
    reason,
    supermarket_contact_number,
    supermarket_location,
    supermarket_name,
    updatedAt,
    verification,
  } = singleData;

  return (
    <div className="bg-gray-100 p-8 rounded-xl max-w-7xl mx-auto mt-40">
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
            <p>Contact Number: +{phone_no}</p>
          </div>
          <div>
            <button className="text-white py-3 px-8 text-xl font-bold bg-[#8BC34A] rounded-xl">
              Donates
            </button>
          </div>
        </div>
        <div>
          <p>Super market name: {supermarket_name}</p>
          <p>Super market location: {supermarket_location}</p>
          <p>Super market number: +{supermarket_contact_number}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            vel sint....
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailsPage;
