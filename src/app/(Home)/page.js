import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Service from './Service/Service'
import ProjectGallery from './ProjectGallery/ProjectGallery'
import Volunteer from './Volunteer/Volunteer'
import Partners from './Partners/Partners'
import JoinUs from './JoinUs/JoinUs'
import Testimonial from './Testimonial/Testimonial'

const page = () => {
  return (
    <>
<Hero/>
<About/>
<Service/>
<Partners/>
<ProjectGallery/>
<Volunteer/>
<Testimonial/>
<JoinUs/>
    </>
  )
}

export default page