import React from 'react'
import Button from '../../../Components/Button'

const OurWork = () => {
    return (
        <div> <div className='flex items-center flex-col md:gap-2 gap-1 justify-center'>
            <Button
                btnname="Portfolio"
                btnStyle="text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full"
                disabled={true}
                divstyle="md:py-3 py-1"
            />
            <p className='subheading font-semibold text-white_color'>Our Awesome Work</p>
        </div></div>
    )
}

export default OurWork