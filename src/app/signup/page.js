"use client";
import { AuthContext } from "@/provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";


const SignUpPage = () => {
  const { createUser, updateUserProfile,logOut, googleHandler} = useContext(AuthContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name,data.photoUrl)
        .then(()=>{
          console.log('user updated');
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registration successfully done',
            showConfirmButton: false,
            timer: 1500
          })
          reset();
          logOut();
          router.push('/login');
        })
        .catch(error=>console.log(error));
      })
  };

  const handleGoogleLogin=()=>{
    googleHandler();
    router.push('/');
}

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
              {...register("name", { required: true })}
            />
            {errors.name && <span className='text-red-500'>This field is required</span>}
          </div>
          <div>
            <label htmlFor="photoUrl">Photo Url</label>
            <input
              id="photoUrl"
              type="text"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("photoUrl", { required: true })}
            />
            {errors.photoUrl && <span className='text-red-500'>This field is required</span>}
          </div>
          <div>
            <label htmlFor="NidNo">NID NO</label>
            <input
              id="NidNo"
              type="number"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("nidNumber", { required: true })}
            />
            {errors.nidNumber && <span className='text-red-500'>This field is required</span>}
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              type="number"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span className='text-red-500'>This field is required</span>}
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <select className="w-full px-5 py-2 rounded-lg mt-2 border" id="location" {...register("location", { required: true })}>
              <option value="dhaka">Dhaka</option>
              <option value="Tangail">Tangail</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Rajshahi">Rajshahi</option>
            </select>
            {errors.location && <span className='text-red-500'>This field is required</span>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("email", { required: true })}
            />
            {errors.email && <span className='text-red-500'>This field is required</span>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-5 py-2 rounded-lg mt-2 font-inter border"
              {...register("password", { required: true })}
            />
            {errors.password && <span className='text-red-500'>This field is required</span>}
          </div>

          <div className="flex justify-center">
            <input
              className="border bg-[#8BC34A] py-3 px-6 rounded-lg mt-8"
              type="submit"
              value="Submit"
            />
          </div>
          <p>Already have an account! <span className="text-blue-400 hover:text-blue-900"><Link href='/login'>SignIn</Link></span></p>
        </form>
        <div className='flex justify-center mt-4'>
          <button className='my_button mb-5 flex items-center'>Login with<span> <FaGoogle className='ml-2'></FaGoogle></span></button>
        </div>
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
