"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mx-auto md:flex gap-8 my-16">
      <div className="md:w-1/2 p-[50px] shadow-2xl rounded-xl ">
        <h1 className="text-4xl font-medium font-inter text-center mb-11">
          Please SignUp
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="photoUrl">Photo Url</label>
            <input
              id="photoUrl"
              type="text"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("photo")}
            />
          </div>
          <div>
            <label htmlFor="NidNo">NID NO</label>
            <input
              id="NidNo"
              type="number"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("nidNumber")}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              type="number"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("phone")}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <select className="w-full px-5 py-2 rounded-lg mt-2 border" id="location" {...register("gender")}>
              <option value="female">Pick your location</option>
              <option value="dhaka">Dhaka</option>
              <option value="khulna">Khulna</option>
            </select>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("example")}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("example")}
            />
          </div>

          {/* {errors.exampleRequired && <span>This field is required</span>} */}

          <div className="flex justify-center">
            <input
              className="border bg-[#8BC34A] py-3 px-6 rounded-lg mt-8"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <div className="md:w-1/2">
        <Image
          src="https://i.ibb.co/CKg6hyY/Group-107.png"
          alt="logo"
          width={0}
          height={0}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
