import React from 'react'
import Container from '../../Components/Container'
import Button from '../../Components/Button'
import TabBar from '../../Components/TabBar'
import WorkLaptop from '../../Components/WrokLaptop/WorkLaptop'
import { IMAGES } from '../../Utils/images'
import OurWork from './Components/OurWork'
import OurCompletedWorks from './Components/OurCompletedWorks'
import OurCompletedWork from '../../Components/CompletedWork/OurCompletedWork'
import Review from '../../Components/Review/Review'

const Work = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <Container>
            <OurWork />
            <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <WorkLaptop iamge={IMAGES.WEB} />
            <OurCompletedWorks />
            <OurCompletedWork />
            <Review />
        </Container>
    )
}

export default Work