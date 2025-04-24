import React from 'react'
import Container from '../../Components/Container'
import Button from '../../Components/Button'
import { IMAGES } from '../../Utils/images'
import ServiceProvideersCard from '../../Components/ServicesProvider/ServiceProvideersCard'

const Services = () => {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center'>

        <Button
          btnname='Best Digital Agency'
          btnStyle={`text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full mx-auto`}
          disabled={true}
        />

        <div className='flex items-end md:gap-2'>
          <p className='mainheading text-white_color font-medium text-center'>The Service We Provide For You</p>
          <img
            src={IMAGES.CROSSICON}
            alt={IMAGES.CROSSICON}
            className='md:w-[28px] w-[14px] h-[14px] md:h-[28px] object-contain'
          />
        </div>

        <ServiceProvideersCard />

      </div>
    </Container>
  )
}

export default Services