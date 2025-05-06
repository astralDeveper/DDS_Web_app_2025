import React from 'react'
import { IMAGES } from '../../../Utils/images'
import Button from '../../../Components/Button'

const GreatTogather = () => {
    return (
        <div
            className=" bg-no-repeat bg-cover mb-4 rounded-[50px]"
            style={{
                backgroundImage: `url('${IMAGES.INQUIRYBG}')`,
            }}
        >
            <div className='md:w-[80%] w-[90%] mx-auto text-white_color py-14 ' >
                <h3 className='text-center mainheading '>Let's Create Something Great Together</h3>
                <p className='md:w-[60%] w-[80%] text-center mx-auto md:mt-4 mt-2'>Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu</p>
                <div className='flex items-center justify-center md:mt-4 mt-2'>
                    <Button
                        btnname="Make Inquiry"
                        btnStyle="text2 text-black bg-blue_color hover:bg-white_color transition-all delay-200 ease-liner  border border-white_color md:px-14 px-7 py-2 md:py-3 rounded-full "
                        divstyle="md:py-3 py-1"
                    />
                </div>
            </div>
        </div>


    )
}

export default GreatTogather