import React from 'react'
import Container from '../../Components/Container'
import AboutVideo from './Components/AboutVideo'
import WhyChooseUs from './Components/WhyChooseUs'
import CeoFounder from './Components/Ceo&Founder'
import OurTeam from '../../Components/Team/OurTeam'
import Review from '../../Components/Review/Review'


const About = () => {
    return (
        <Container>
            <AboutVideo />
            <WhyChooseUs />
            <CeoFounder />
            <OurTeam />
            <Review />
        </Container>
    )
}

export default About