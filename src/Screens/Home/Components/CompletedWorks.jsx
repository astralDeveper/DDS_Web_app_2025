import React from 'react'
import Container from '../../../Components/Container'
import Button from '../../../Components/Button'

const CompletedWorks = () => {
    return (
        <Container >

            <Button
                btnname="Projects"
                btnStyle="text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full"
                disabled={true}
                divstyle="md:py-3 py-1"
            />

            <div className='text-white_color mainheading md:py-4 py-2 flex flex-col font-medium'>
                <span>Discover Our</span>
                <span>Completed Work</span>
            </div>
            


        </Container>
    )
}

export default CompletedWorks