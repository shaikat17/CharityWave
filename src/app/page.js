import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
import JoinUs from "@/components/Home/JoinUs/JoinUs";
import Partners from "@/components/Home/Partners/Partners";
import ProjectGallery from "@/components/Home/ProjectGallery/ProjectGallery";
import Service from "@/components/Home/Service/Service";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import Volunteer from "@/components/Home/Volunteer/Volunteer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Partners />
      <ProjectGallery />
      <Volunteer />
      <Testimonial />
      <JoinUs />
    </>
  );
};

export default Home;
