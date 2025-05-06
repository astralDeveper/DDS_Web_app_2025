
import React from 'react'
import Container from '../../../Components/Container'
import Button from '../../../Components/Button'
import ServiceProvideersCard from '../../../Components/ServicesProvider/ServiceProvideersCard'

const Services = () => {
    return (
        <Container>
            <div className='flex items-center justify-center'>
                <Button
                    btnname="Best Digital Agency"
                    btnStyle="text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full"
                    disabled={true}
                    divstyle="md:py-3 py-1"
                />
            </div>
            <div className='md:py-4 py-2'>
                <p className='mainheading text-white_color font-medium text-center'>The Service We Provide For You</p>
            </div>
            <div>
                <ServiceProvideersCard />
            </div>
        </Container>
    )
}

export default Services