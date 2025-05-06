
import React from 'react'
import Container from '../../../Components/Container'
import Button from '../../../Components/Button'

const LatestBlogs = () => {
    return (
        <Container>
            <div className='flex flex-col items-center'>
                <Button
                    btnname="Our Blog"
                    btnStyle="text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full"
                    disabled={true}
                    divstyle="md:py-3 py-1"
                />
                <p className='subheading font-semibold text-white_color'>Read Our Latest Blog</p>
            </div>
            
        </Container>
    )
}

export default LatestBlogs