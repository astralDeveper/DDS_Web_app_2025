import React from 'react'
import Container from '../../Components/Container'
import AboutVideo from './Components/AboutVideo'
import WhyChooseUs from './Components/WhyChooseUs'
import CeoFounder from './Components/Ceo&Founder'


const About = () => {
    return (
        <Container>
            <AboutVideo />
            <WhyChooseUs />
            <CeoFounder />
        </Container>
    )
}

export default About