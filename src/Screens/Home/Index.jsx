import React from 'react'
import IntroBanner from './Components/IntroBanner'
import OurProcess from './Components/OurProcess'
import Services from './Components/Services'
import WhyChoseUs from './Components/WhyChoseUs'
import OurAwesomeWork from './Components/OurAwesomeWork'
import CompletedWorks from './Components/CompletedWorks'
import OurCompletedWork from '../../Components/CompletedWork/OurCompletedWork'
import Review from '../../Components/Review/Review'
import LatestBlogs from './Components/LatestBlogs'
import OurTeam from '../../Components/Team/OurTeam'
import OurBlogs from '../../Components/BlogCard/OurBlogs'
import GreatTogather from './Components/GreatTogather'

const Home = () => {
  return (
    <>
      <IntroBanner />
      <OurProcess />
      <Services />
      <WhyChoseUs />
      <OurAwesomeWork />
      <CompletedWorks />
      <div className='md:w-[80%] w-[90%] mx-auto '>
        <OurCompletedWork />
        <Review />
        <LatestBlogs />
        <OurBlogs />
        <OurTeam />
        <GreatTogather />
      </div>

    </>
  )
}

export default Home
{/* <WorkLaptop iamge={IMAGES.WEB} /> */ }