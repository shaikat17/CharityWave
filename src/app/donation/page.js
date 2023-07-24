"use client";
import DonationCard from "@/components/DonationCard/DonationCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiFilter } from "react-icons/hi";

const DonationPage = () => {
  const [categoryName, setCategoryName] = useState("medical");
  const [categoryData, setCategoryData] = useState([]);
  const [savedData, setSavedData] = useState(categoryData)
  const [role, setRole] = useState('All')

  useEffect(() => {
    fetch(`api/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data)
        setSavedData(data)
      });
  }, [categoryName]);


  const locationHandler = (e) => {
    const searchValue = e.target.value;
    const ans = savedData.filter(item => item.location === searchValue)
    console.log(ans)
    setCategoryData(ans)
  }
  const roleHandler = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue)
    setRole(searchValue)

    if (role === 'Emergency') {
      const ans = savedData.filter(item => item.emergency === "true")
      console.log(ans)
      setCategoryData(ans)
    }
    
   else if (role === 'Verification') {
      const ans = savedData.filter(item => item.verification === "true")
      console.log(ans)
      setCategoryData(ans)
    }
    else{
      setCategoryData(savedData)
    }
  }



  return (
    <>
      <div className="flex justify-between max-w-7xl my-8 mx-auto px-5 lg:px-0">
        <div className="form-control flex-row items-center">
          <HiFilter className="text-primaryColor w-6 h-6 inline" />
          <h2 className="mr-2">Filter: </h2>

          <label className="label cursor-pointer justify-normal gap-2">
            <input
              type="radio"
              checked={role === "All"}
              value="All"
              onChange={roleHandler}
              className="radio checked:bg-blue-500"
            />
            <span className="label-text">All</span>
          </label>

          <label className="label cursor-pointer justify-normal gap-2">
            <input
              type="radio"
              checked={role === "Emergency"}
              value="Emergency"
              onChange={roleHandler}
              className="radio checked:bg-red-500"
            />
            <span className="label-text">Emergency</span>
          </label>
          <label className="label cursor-pointer justify-normal gap-2">
            <input
              type="radio"
              checked={role === "Verification"}
              value="Verification"
              onChange={roleHandler}
              className="radio checked:bg-primaryColor"
            />
            <span className="label-text">Verification</span>
          </label>


        </div>

        <div className="form-control">
          <select
            onChange={locationHandler}
            defaultValue="Location"
            name="category"
            className="space-y-5 select w-full max-w-xs input input-bordered"
          >
            <option>Location</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Toronto">Toronto</option>
            <option value="Sydney">Sydney</option>
            <option value="San Francisco">San Francisco</option>
          </select>
        </div>
      </div>

      <div className="my-4 flex justify-center gap-3">
        <button
          onClick={() => setCategoryName("medical")}
          className={`${categoryName === 'medical' ? 'my_button ' : 'my_category_button'}`}
        >
          Medical
        </button>
        <button
          onClick={() => setCategoryName("starvation")}
          className={`${categoryName === 'starvation' ? 'my_button ' : 'my_category_button'}`}
        >
          Starvation
        </button>
        <button
          onClick={() => setCategoryName("education")}
          className={`${categoryName === 'education' ? 'my_button ' : 'my_category_button'}`}
        >
          Education
        </button>
        <button
          onClick={() => setCategoryName("orphanage")}
          className={`${categoryName === 'orphanage' ? 'my_button ' : 'my_category_button'}`}
        >
          Orphanage
        </button>
        <button onClick={() => setCategoryName("oldage")}
          className={`${categoryName === 'oldage' ? 'my_button ' : 'my_category_button'}`}>
          Oldage
        </button>
      </div>

      {
        categoryData ?
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-16">
            {categoryData.map((item, index) => <DonationCard key={index} categoryData={item} category={categoryName} ></DonationCard>)}
          </div>
          : <p className="text-center text-3xl font-bold text-primaryColor">No Data Found</p>
      }
    </>
  );
};

export default DonationPage;