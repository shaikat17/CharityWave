"use client";
import DonationCard from "@/components/DonationCard/DonationCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiFilter } from "react-icons/hi";

const DonationPage = () => {
  const [categoryName, setCategoryName] = useState("medical");
  const [categoryData, setCategoryData] = useState([]);

  const locationHandler = (e) => {
    const searchValue = e.target.value;

    // if(searchValue === "India"){
    //   const newCategoryData = categoryData.filter(item => item.)
    // }
  };

  useEffect(() => {
    fetch(`api/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, [categoryName]);


  return (
    <>
      <div className="flex justify-between max-w-7xl my-8 mx-auto px-5 lg:px-0">
        <div className="form-control flex-row items-center">
          <HiFilter className="text-[#9774FF] w-6 h-6 inline" />
          <h2 className="mr-2">Filter: </h2>
          <label className="label cursor-pointer justify-normal gap-2">
            <input
              type="radio"
              value="seller"
              className="radio checked:bg-red-500"
              defaultChecked
            />
            <span className="label-text">All</span>
          </label>

          <label className="label cursor-pointer justify-normal gap-2">
            <input
              type="radio"
              value="buyer"
              className="radio checked:bg-blue-500"
              defaultChecked
            />
            <span className="label-text">Emergency</span>
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
            <option value="India">India</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
      </div>

      <div className="my-4 flex justify-center gap-3">
        <button
          onClick={() => setCategoryName("medical")}
          className="my_button"
        >
          Medical
        </button>
        <button
          onClick={() => setCategoryName("starvation")}
          className="my_button"
        >
          Starvation
        </button>
        <button
          onClick={() => setCategoryName("education")}
          className="my_button"
        >
          Education
        </button>
        <button
          onClick={() => setCategoryName("orphanage")}
          className="my_button"
        >
          Orphanage
        </button>
        <button onClick={() => setCategoryName("oldage")} className="my_button">
          Oldage
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto my-20">
        {categoryData.map((item, index) => <DonationCard key={index} categoryData={item} ></DonationCard>)}
      </div>
    </>
  );
};

export default DonationPage;

