import React from 'react'
import Container from '../../../Components/Container'
import Button from '../../../Components/Button'
import TabBar from '../../../Components/TabBar'
import WorkLaptop from '../../../Components/WrokLaptop/WorkLaptop'
import { IMAGES } from '../../../Utils/images'

const OurAwesomeWork = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    return (
        <Container>
            <div className='flex items-center flex-col md:gap-2 gap-1 justify-center'>
                <Button
                    btnname="Portfolio"
                    btnStyle="text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full"
                    disabled={true}
                    divstyle="md:py-3 py-1"
                />
                <p className='subheading font-semibold text-white_color'>Our Awesome Work</p>
            </div>
            <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <WorkLaptop iamge={IMAGES.WEB} />
        </Container>
    )
}

export default OurAwesomeWork