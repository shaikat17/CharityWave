import Image from 'next/image'
import React from 'react'
import './style.css'

const ProjectGallery = () => {
  return (
    <div className='max-w-7xl mx-auto my-40'>
      <div className='flex flex-col md:flex-row gap-3 mb-3'>
     <div className=''>
     <h2 className='text-center text-primaryColor mb-16 text-4xl font-medium'>Have a look our completed Project!!!! </h2>
     <div className='conatiner_box w-full'> <Image src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb24lMjBjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='logo' width={900} height={2300} className='' priority />
        <div className='overlay'><div className="content">
          <h1 className="text-2xl font-semi-bold">Aiding Hearts </h1>
          <h5>Sylhet</h5>
          <p>02/03/2023</p>
        </div></div>
        </div> 
     </div>


        <div className='conatiner_box w-full'> <Image src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9uYXRpb24lMjBjYW1wJTIwZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='logo' width={850} height={850} className='' priority />
        <div className='overlay'><div className="content">
          <h1 className="text-2xl font-semi-bold">Giving Voice </h1>
          <h5>Sylhet</h5>
          <p>02/03/2023</p>
        </div></div>
         </div>
      </div>

      <div className='flex flex-col md:flex-row gap-3'>
        <div className='conatiner_box w-full'> <Image src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9uYXRpb24lMjBjYW1wJTIwZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='logo' width={900} height={900} className='' priority />
        <div className='overlay'><div className="content">
          <h1 className="text-2xl font-semi-bold">United Hearts </h1>
          <h5>Sylhet</h5>
          <p>02/03/2023</p>
        </div></div>
        </div>
        <div className='conatiner_box w-full'> <Image src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9uYXRpb24lMjBjYW1wJTIwZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='logo' width={900} height={900} className='' priority />
        <div className='overlay'><div className="content">
          <h1 className="text-2xl font-semi-bold">United Hearts </h1>
          <h5>Sylhet</h5>
          <p>02/03/2023</p>
        </div></div>
        </div>

        <div className='conatiner_box w-full'> <Image src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb24lMjBjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='logo' width={900} height={900} className='' priority />
        <div className='overlay'><div className="content">
          <h1 className="text-2xl font-semi-bold">Caring Hands </h1>
          <h5>Sylhet</h5>
          <p>02/03/2023</p>
        </div></div>
        </div>

        <div className='conatiner_box w-full'> <Image src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb24lMjBjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='logo' width={900} height={900} className='' priority />
        <div className='overlay'><div className="content">
          <h1 className="text-2xl font-semi-bold">Art Cause </h1>
          <h5>Dhaka</h5>
          <p>02/03/2023</p>
        </div></div>
        </div>

      </div>
    </div>
  )
}

export default ProjectGallery