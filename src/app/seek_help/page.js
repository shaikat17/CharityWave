// 'use client'
// import React from 'react'
// import useAxiosSecure from '@/hooks/useAxiosSecure';
// import { useForm } from "react-hook-form";
// import { useState } from 'react';

// const page = () => {
//     const userName = 's'
//     const userEmail = 's@gmail.com'
//     const photoUrl = 'https://images.unsplash.com/photo-1536528947088-d655e462f4d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGlqYWIlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'

//     const [axiosSecure] = useAxiosSecure()

//     const options = [
//         { value: "", text: "Pick sub_category" },
//         { value: "Medical", text: "Medical" },
//         { value: "Starvation", text: "Starvation" },
//         { value: "Education", text: "Education" },
//         { value: "Orphanage", text: "Orphanage" },
//         { value: "Oldage", text: "Oldage" },
//     ]

//     const [category, setCategory] = useState(options[0].value)
//     const [sub_category, setSub_category] = useState('')


//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const onSubmit = data => {
//         console.log(data)
//     }

// console.log(sub_category)
    

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="card lg:w-[60%] mx-5 shadow-2xl bg-base-100 lg:mx-auto mt-8 mb-10">
//             <h2 className='text-center text-3xl font-medium mt-8 mb-2'>Please Fill up</h2>
//             <div className="card-body">
//                 <div className='flex flex-col lg:flex-row justify-between gap-5'>
//                     <div className="form-control w-full">
//                         <input type="text" defaultValue={userName} className="bg-primaryColor text-white font-medium input input-bordered" readOnly />
//                     </div>
//                     <div className="form-control w-full">
//                         <input type="text" defaultValue={userEmail} className="bg-primaryColor text-white font-medium input input-bordered" readOnly />
//                     </div>
//                 </div>

//                 <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">Location</span>
//                         </label>
//                         <input type="text"  {...register("location", { required: true })} name='location' placeholder="Enter Photo url" className="input input-bordered" />
//                         {errors.location?.type === 'required' && <p role="alert" className='text-red-700'> Image is required</p>}
//                     </div>
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">Phone No</span>
//                         </label>
//                         <input type="text" {...register("phone_no", { required: true })} name='phone_no' placeholder="Enter Toy Name" className="input input-bordered" />
//                         {errors.phone_no?.type === 'required' && <p role="alert" className='text-red-700'> class Name is required</p>}
//                     </div>
//                 </div>

//                 <div className='flex flex-col lg:flex-row justify-between gap-5'>
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">Amount</span>
//                         </label>
//                         <input type="number" {...register('amount', { required: true })} name='amount' placeholder="Enter Available quantity" className="input input-bordered" />
//                         {errors.amount?.type === 'required' && <p role="alert" className='text-red-700'>amount is required</p>}
//                     </div>
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">Deadline</span>
//                         </label>
//                         <input type="date"  {...register('deadline', { required: true })} name='deadline' placeholder="Enter deadline" className="input input-bordered" />
//                         {errors.deadline?.type === 'required' && <p role="alert" className='text-red-700'>deadline is required</p>}
//                     </div>
//                 </div>


//                 <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>

//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">Category</span>
//                         </label>
//                         <select value={category}
//                             onChange={(e)=>setCategory(e.target.value)}

//                             className="select w-full max-w-xs input input-bordered"
//                         >
//                             {
//                                 options.map(option =>
//                                     <option key={option.value} value={option.value}>{option.text}</option>
//                                 )
//                             }
//                         </select>
//                         {errors.category?.type === 'required' && (
//                             <p role="alert" className="text-red-700">
//                                 Category is required
//                             </p>
//                         )}
//                     </div>

//                     {
//                         category === 'Medical' && <div className="form-control w-full flex-row items-center">
//                             <label className="label cursor-pointer justify-normal gap-2">
//                                 <input type="radio"   onChange={()=>setSub_category('Hospital')}
//  className="radio checked:bg-red-500" checked />
//                                 <span className="label-text">Hospital</span>
//                             </label>

//                             <label className="label cursor-pointer justify-normal gap-2">
//                                 <input type="radio"   onChange={()=>setSub_category('Pharmacy')}
//  className="radio checked:bg-blue-500" checked />
//                                 <span className="label-text">Pharmacy</span>
//                             </label>
//                             {errors.sub_category?.type === 'required' && <p role="alert" className='text-red-700'>Sub Category is required</p>}
//                         </div>
//                     }


//                 </div>

//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">institution_name</span>
//                     </label>
//                     <input type="text" {...register("institution_name", { required: true })} name='institution_name' placeholder="Enter Toy Name" className="input input-bordered" />
//                     {errors.institution_name?.type === 'required' && <p role="alert" className='text-red-700'> institution_name is required</p>}
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">institution_location</span>
//                     </label>
//                     <input type="text" {...register("institution_location", { required: true })} name='institution_location' placeholder="Enter Toy Name" className="input input-bordered" />
//                     {errors.institution_location?.type === 'required' && <p role="alert" className='text-red-700'> institution_location is required</p>}
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">institution_contact_number</span>
//                     </label>
//                     <input type="text" {...register("institution_contact_number", { required: true })} name='institution_contact_number' placeholder="Enter Toy Name" className="input input-bordered" />
//                     {errors.institution_contact_number?.type === 'required' && <p role="alert" className='text-red-700'> institution_contact_number is required</p>}
//                 </div>

//                 <div className="form-control  mt-6">
//                     <button className="btn bg-primaryColor text-white border-0">Add Class</button>
//                 </div>
//             </div>
//         </form>
//     )
// }

// export default page