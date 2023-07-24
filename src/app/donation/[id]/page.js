"use client";
import { dateInfo } from "@/utility/TimeCalculation";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation'
import {
  FaArrowLeft,
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
    sub_category,
    hospital_name,
    hospital_location,
    hospital_contact_number,
    pharmacy_name,
    pharmacy_location,
    pharmacy_contact_number,
    institution_name,
    institution_location,
    institution_contact_number,
    bookStore_name,
    bookStore_location,
    bookStore_contact_number,
    oldAge_name,
    oldAge_location,
    oldAge_contact_number,
    orphanage_name,
    orphanage_location,
    orphanage_contact_number,
    supermarket_contact_number,
    supermarket_location,
    supermarket_name,
    updatedAt,
    verification,
  } = singleData;


  const getrand = () => {
    return (Math.floor(Math.random() * 10))
  }
  const [daysAgo, monthName, date] = dateInfo(createdAt)

  const pathname = usePathname()
  const backpath = pathname.split('/')[1]
  const router = useRouter()

  return (
    <div className=" max-w-7xl mx-auto mt-6">

      <button onClick={() => router.push(`/${backpath}`)} className=' my-4 mx-5  md:ml-[10%] my_small_button border-l-2 border-l-white border-b-2 border-b-white'>
        <FaArrowLeft className='inline mr-1' /> back</button>

      <div className="bg-secondaryColor w-[70%] mx-auto p-8 mt-6 rounded-xl">
        <div className="flex justify-between mb-2">
          <div className="flex gap-2">
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
              verification === 'true' &&
              <Link href="#">
                <FaCheckCircle className="text-yellow-500"></FaCheckCircle>
              </Link>
            }
            {
              emergency === 'true' &&
              <Link href="#">
                <FaFolderPlus className="text-primaryColor"></FaFolderPlus>
              </Link>
            }
          </div>
        </div>
        <div>
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
          <div className="flex justify-between items-center gap-5">
            <div>
              <p className="font-medium text-gray-900">Contact Number: <span className="text-textColor">+{phone_no}</span></p>
            </div>
            <div>
              <button className="my_button">
                Donates
              </button>
            </div>
          </div>
          <div>

            {
              sub_category === "Hospital" &&
              <>
                <p className="font-medium text-gray-900" >Hospital name: <span className="text-textColor"> {hospital_name} </span> </p>
                <p className="font-medium text-gray-900" >Hospital location: <span className="text-textColor"> {hospital_location} </span> </p>
                <p className="font-medium text-gray-900" >Hospital number: <span className="text-textColor"> +{hospital_contact_number} </span> </p>
              </>
            }
            {
              sub_category === "Pharmacy" &&
              <>
                <p className="font-medium text-gray-900" >Pharmacy name: <span className="text-textColor"> {pharmacy_name} </span> </p>
                <p className="font-medium text-gray-900" >Pharmacy location: <span className="text-textColor"> {pharmacy_location} </span> </p>
                <p className="font-medium text-gray-900" >Pharmacy number: <span className="text-textColor"> +{pharmacy_contact_number} </span> </p>
              </>
            }
            {
              sub_category === "Institution" &&
              <>
                <p className="font-medium text-gray-900" >Institution name: <span className="text-textColor"> {institution_name} </span> </p>
                <p className="font-medium text-gray-900" >Institution location: <span className="text-textColor"> {institution_location} </span> </p>
                <p className="font-medium text-gray-900" >Institution number: <span className="text-textColor"> +{institution_contact_number} </span> </p>
              </>
            }
            {
              sub_category === "Bookstore" &&
              <>
                <p className="font-medium text-gray-900" >BookStore name: <span className="text-textColor"> {bookStore_name} </span> </p>
                <p className="font-medium text-gray-900" >BookStore location: <span className="text-textColor"> {bookStore_location} </span> </p>
                <p className="font-medium text-gray-900" >BookStore number: <span className="text-textColor"> +{bookStore_contact_number} </span> </p>
              </>
            }
            {
              oldAge_name && oldAge_location &&
              <>
                <p className="font-medium text-gray-900" >oldAge name: <span className="text-textColor"> {oldAge_name} </span> </p>
                <p className="font-medium text-gray-900" >oldAge location: <span className="text-textColor"> {oldAge_location} </span> </p>
                <p className="font-medium text-gray-900" >oldAge number: <span className="text-textColor"> +{oldAge_contact_number} </span> </p>
              </>
            }
            {
              orphanage_name && orphanage_location &&
              <>
                <p className="font-medium text-gray-900" >orphanage name: <span className="text-textColor"> {orphanage_name} </span> </p>
                <p className="font-medium text-gray-900" >orphanage location: <span className="text-textColor"> {orphanage_location} </span> </p>
                <p className="font-medium text-gray-900" >orphanage number: <span className="text-textColor"> +{orphanage_contact_number} </span> </p>
              </>
            }
            {
              supermarket_name && supermarket_location &&
              <>
                <p className="font-medium text-gray-900" >supermarket name: <span className="text-textColor"> {supermarket_name} </span> </p>
                <p className="font-medium text-gray-900" >supermarket location: <span className="text-textColor"> {supermarket_location} </span> </p>
                <p className="font-medium text-gray-900" >supermarket number: <span className="text-textColor"> +{supermarket_contact_number} </span> </p>
              </>
            }


            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              vel sint.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              vel sint   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              vel sint   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              vel sint   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              vel sint
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailsPage;
