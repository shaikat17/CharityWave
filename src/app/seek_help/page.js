"use client";
import React from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useState } from "react";

const SeekHelp = () => {
  const InputData = async (cat, data) => {
    const res = await fetch(`/api/${cat.toLowerCase()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  };
  const userName = "s";
  const userEmail = "s@gmail.com";
  const photoUrl =
    "https://images.unsplash.com/photo-1536528947088-d655e462f4d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGlqYWIlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

  const options = [
    { value: "", text: "Pick sub_category" },
    { value: "Medical", text: "Medical" },
    { value: "Starvation", text: "Starvation" },
    { value: "Education", text: "Education" },
    { value: "Orphanage", text: "Orphanage" },
    { value: "Oldage", text: "Oldage" },
  ];

  const [category, setCategory] = useState(options[0].value);
  const [sub_category, setSub_category] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const {
      amount,
      deadline,
      hospital_contact_number,
      hospital_location,
      hospital_name,
      location,
      reason,
      orphanage_contact_number,
      orphanage_location,
      orphanage_name,
      oldAge_name,
      oldAge_location,
      oldAge_contact_number,
      pharmacy_contact_number,
      pharmacy_location,
      pharmacy_name,
      phone_no,
      supermarket_contact_number,
      supermarket_location,
      supermarket_name,
      institution_contact_number,
      institution_location,
      institution_name,
      bookStore_contact_number,
      bookStore_location,
      bookStore_name,
    } = data;

    // console.log(data, sub_category, category)

    const seeker_name = userName;
    const seeker_email = userEmail;

    if (category === "Medical") {
      const data = {
        amount,
        deadline,
        hospital_contact_number,
        hospital_location,
        hospital_name,
        location,
        reason,
        pharmacy_contact_number,
        pharmacy_location,
        sub_category,
        pharmacy_name,
        phone_no,
        seeker_name,
        seeker_email,
        seeker_image: photoUrl,
      };

    //   console.log(data);

      InputData(category, data);
    }
    if (category === "Starvation") {
      const data = {
        amount,
        deadline,
        supermarket_contact_number,
        supermarket_location,
        supermarket_name,
        location,
        reason,
        phone_no,
        seeker_name,
        seeker_email,
        seeker_image: photoUrl,
      };

      InputData(category, data);
    }
    if (category === "Education") {
      const data = {
        amount,
        deadline,
        institution_name,
        institution_location,
        institution_contact_number,
        location,
        reason,
        sub_category,
        bookStore_name,
        bookStore_location,
        bookStore_contact_number,
        phone_no,
        seeker_name,
        seeker_email,
        seeker_image: photoUrl,
      };

      InputData(category, data);
    }
    if (category === "Orphanage") {
      const data = {
        amount,
        deadline,
        orphanage_contact_number,
        orphanage_location,
        orphanage_name,
        location,
        reason,
        phone_no,
        seeker_name,
        seeker_email,
        seeker_image: photoUrl,
      };

      InputData(category, data);
      
    }
    if (category === "Oldage") {
      console.log({
        amount,
        deadline,
        oldAge_contact_number,
        oldAge_location,
        oldAge_name,
        location,
        phone_no,
        seeker_name,
        seeker_email,
        photoUrl,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card lg:w-[60%] mx-5 shadow-2xl bg-base-100 lg:mx-auto mt-8 mb-10"
    >
      <h2 className="text-center text-3xl font-medium mt-8 mb-2">
        Please Fill up
      </h2>
      <div className="card-body">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="form-control w-full">
            <input
              type="text"
              defaultValue={userName}
              className="bg-primaryColor text-white font-medium input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              defaultValue={userEmail}
              className="bg-primaryColor text-white font-medium input input-bordered"
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", { required: true })}
              name="location"
              placeholder="Enter Location"
              className="input input-bordered"
            />
            {errors.location?.type === "required" && (
              <p role="alert" className="text-red-700">
                {" "}
                Image is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone No</span>
            </label>
            <input
              type="text"
              {...register("phone_no", { required: true })}
              name="phone_no"
              placeholder="Enter Phone Name"
              className="input input-bordered"
            />
            {errors.phone_no?.type === "required" && (
              <p role="alert" className="text-red-700">
                {" "}
                class Name is required
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Amount</span>
            </label>
            <input
              type="number"
              {...register("amount", { required: true })}
              name="amount"
              placeholder="Enter Available quantity"
              className="input input-bordered"
            />
            {errors.amount?.type === "required" && (
              <p role="alert" className="text-red-700">
                amount is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              {...register("deadline", { required: true })}
              name="deadline"
              placeholder="Enter deadline"
              className="input input-bordered"
            />
            {errors.deadline?.type === "required" && (
              <p role="alert" className="text-red-700">
                deadline is required
              </p>
            )}
          </div>
        </div>

        <div className="form-control">
              <label className="label">
                <span className="label-text">Reason</span>
              </label>
              <input
                type="text"
                {...register("reason", { required: true })}
                name="reason"
                placeholder="Enter Reason"
                className="input input-bordered"
              />
              {errors.supermarket_contact_number?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  Reason is required
                </p>
              )}
            </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select w-full max-w-xs input input-bordered"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            {errors.category?.type === "required" && (
              <p role="alert" className="text-red-700">
                Category is required
              </p>
            )}
          </div>

          {/* //for medical category show this sub categories */}
          {category === "Medical" && (
            <div className="form-control w-full flex-row items-center">
              <label className="label cursor-pointer justify-normal gap-2">
                <input
                  type="radio"
                  checked={sub_category === "Hospital"}
                  onChange={() => setSub_category("Hospital")}
                  className="radio checked:bg-red-500"
                />
                <span className="label-text">Medical related</span>
              </label>

              <label className="label cursor-pointer justify-normal gap-2">
                <input
                  type="radio"
                  checked={sub_category === "Pharmacy"}
                  onChange={() => setSub_category("Pharmacy")}
                  className="radio checked:bg-blue-500"
                />
                <span className="label-text">Medicine related</span>
              </label>
              {errors.sub_category?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Sub Category is required
                </p>
              )}
            </div>
          )}

          {/* //for Education category show this sub categories */}
          {category === "Education" && (
            <div className="form-control w-full flex-row items-center">
              <label className="label cursor-pointer justify-normal gap-2">
                <input
                  type="radio"
                  checked={sub_category === "Institution"}
                  onChange={() => setSub_category("Institution")}
                  className="radio checked:bg-red-500"
                />
                <span className="label-text">Institution related</span>
              </label>

              <label className="label cursor-pointer justify-normal gap-2">
                <input
                  type="radio"
                  checked={sub_category === "Bookstore"}
                  onChange={() => setSub_category("Bookstore")}
                  className="radio checked:bg-blue-500"
                />
                <span className="label-text">Book Buying related</span>
              </label>
              {errors.sub_category?.type === "required" && (
                <p role="alert" className="text-red-700">
                  This field is required
                </p>
              )}
            </div>
          )}
        </div>

        {/* //for Starvation category show these fields */}
        {category === "Starvation" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Starvation Name</span>
              </label>
              <input
                type="text"
                {...register("supermarket_name", { required: true })}
                name="supermarket_name"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.supermarket_name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  supermarket_name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">supermarket location</span>
              </label>
              <input
                type="text"
                {...register("supermarket_location", { required: true })}
                name="supermarket_location"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.supermarket_location?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  supermarket_location is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">supermarket contact_number</span>
              </label>
              <input
                type="text"
                {...register("supermarket_contact_number", { required: true })}
                name="supermarket_contact_number"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.supermarket_contact_number?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  supermarket_contact_number is required
                </p>
              )}
            </div>
          </>
        )}
        {/* //for oldage category show these fields */}
        {category === "Oldage" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Oldage Name</span>
              </label>
              <input
                type="text"
                {...register("oldAge_name", { required: true })}
                name="oldAge_name"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.oldAge_name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  oldAge_name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Oldage location</span>
              </label>
              <input
                type="text"
                {...register("oldAge_location", { required: true })}
                name="oldAge_location"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.oldAge_location?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  oldAge_location is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Oldage contact_number</span>
              </label>
              <input
                type="text"
                {...register("oldAge_contact_number", { required: true })}
                name="oldAge_contact_number"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.oldAge_contact_number?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  oldAge_contact_number is required
                </p>
              )}
            </div>
          </>
        )}
        {/* //for Starvation category show these fields */}
        {category === "Orphanage" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Orphanage Name</span>
              </label>
              <input
                type="text"
                {...register("orphanage_name", { required: true })}
                name="orphanage_name"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.orphanage_name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  orphanage_name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Orphanage location</span>
              </label>
              <input
                type="text"
                {...register("orphanage_location", { required: true })}
                name="orphanage_location"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.orphanage_location?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  orphanage_location is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Orphanage contact_number</span>
              </label>
              <input
                type="text"
                {...register("orphanage_contact_number", { required: true })}
                name="orphanage_contact_number"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.orphanage_contact_number?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  orphanage_contact_number is required
                </p>
              )}
            </div>
          </>
        )}

        {/* //sub categories fields */}
        {sub_category === "Hospital" && category === "Medical" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Hospital Name</span>
              </label>
              <input
                type="text"
                {...register("hospital_name", { required: true })}
                name="hospital_name"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.hospital_name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  hospital_name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Hospital location</span>
              </label>
              <input
                type="text"
                {...register("hospital_location", { required: true })}
                name="hospital_location"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.hospital_location?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  hospital_location is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Hospital contact_number</span>
              </label>
              <input
                type="text"
                {...register("hospital_contact_number", { required: true })}
                name="hospital_contact_number"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.hospital_contact_number?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  hospital_contact_number is required
                </p>
              )}
            </div>
          </>
        )}
        {sub_category === "Pharmacy" && category === "Medical" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pharmacy Name</span>
              </label>
              <input
                type="text"
                {...register("pharmacy_name", { required: true })}
                name="pharmacy_name"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.pharmacy_name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  pharmacy_name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pharmacy location</span>
              </label>
              <input
                type="text"
                {...register("pharmacy_location", { required: true })}
                name="pharmacy_location"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.pharmacy_location?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  pharmacy_location is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pharmacy contact_number</span>
              </label>
              <input
                type="text"
                {...register("pharmacy_contact_number", { required: true })}
                name="pharmacy_contact_number"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.pharmacy_contact_number?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  pharmacy_contact_number is required
                </p>
              )}
            </div>
          </>
        )}
        {sub_category === "Institution" && category === "Education" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">institution Name</span>
              </label>
              <input
                type="text"
                {...register("institution_name", { required: true })}
                name="institution_name"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.institution_name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  institution_name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">institution location</span>
              </label>
              <input
                type="text"
                {...register("institution_location", { required: true })}
                name="institution_location"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.institution_location?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  institution_location is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">institution contact_number</span>
              </label>
              <input
                type="text"
                {...register("institution_contact_number", { required: true })}
                name="institution_contact_number"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.institution_contact_number?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  institution_contact_number is required
                </p>
              )}
            </div>
          </>
        )}
        {sub_category === "Bookstore" && category === "Education" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bookstore Name</span>
              </label>
              <input
                type="text"
                {...register("bookStore_name", { required: true })}
                name="bookStore_name"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.bookStore_name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  bookStore_name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bookstore location</span>
              </label>
              <input
                type="text"
                {...register("bookStore_location", { required: true })}
                name="bookStore_location"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.bookStore_location?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  bookStore_location is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bookstore contact_number</span>
              </label>
              <input
                type="text"
                {...register("bookStore_contact_number", { required: true })}
                name="bookStore_contact_number"
                placeholder="Enter Toy Name"
                className="input input-bordered"
              />
              {errors.bookStore_contact_number?.type === "required" && (
                <p role="alert" className="text-red-700">
                  {" "}
                  bookStore_contact_number is required
                </p>
              )}
            </div>
          </>
        )}
        {/* / end of sub categories fields */}
        <div className="form-control  mt-6">
          <button className="btn bg-primaryColor text-white border-0">
            Add Class
          </button>
        </div>
      </div>
    </form>
  );
};

export default SeekHelp;
