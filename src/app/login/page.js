'use client'
import React from 'react';
import Lottie from "lottie-react";
import animation from '../../../public/animation/animation_lk99rebe.json'
import { AuthContext } from '@/provider/AuthProvider';
import { useContext } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const {signIn, googleHandler}=useContext(AuthContext);
    const router = useRouter();

    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login successfully',
                showConfirmButton: false,
                timer: 1500
              })
              form.reset();
              router.push('/');
        })
    }
    const handleGoogleLogin=()=>{
        googleHandler();
        router.push('/');
    }
    return (
        <div className='h-screen'>
            <div className='md:pt-12'>
                <div className='w-full md:w-2/3 my-auto  mx-auto md:flex  rounded-lg shadow-xl'>
                    <div className='w-full'>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                    <div>
                        <div className='mx-auto'>
                            <h2 className='text-3xl font-bold mt-16 pt-8 text-center'>Login Please</h2>
                            <form onSubmit={handleLogin} className="flex flex-col p-12">
                                <label className="font-semibold text-xs" for="usernameField">Your Email</label>
                                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="email" name='email'/>
                                <label className="font-semibold text-xs mt-3" for="passwordField">Password</label>
                                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name='password'/>
                                <input type="submit" value='Login' className="flex items-center justify-center h-12 px-6 w-64 bg-primaryColor mt-8 rounded font-semibold text-sm text-black hover:bg-green-400" />
                                <div className="flex mt-6 text-xs">
                                    <p>New to here? <span><Link className="text-blue-400 hover:text-blue-900" href="/signup">Sign Up</Link></span></p>
                                </div>
                            </form>
                            <div className='flex justify-center'>
                                <button onClick={handleGoogleLogin} className='my_button mb-5 flex items-center'>Login with<span> <FaGoogle className='ml-2'></FaGoogle></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;