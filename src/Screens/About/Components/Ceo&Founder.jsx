import React from 'react'
import { IMAGES } from '../../../Utils/images'
import Button from '../../../Components/Button'

const CeoFounder = () => {
    return (
        <div className=' w-[80%] mx-auto md:py-10 py-5 grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4'>



            <div>
                <img
                    className='md:w-[400px] w-[250px] object-contain'
                    src={IMAGES.CEO}
                    alt={IMAGES.CEO}
                />
            </div>



            <div>
                <Button
                    btnname="CEO & Founder"
                    btnStyle="text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-1 md:py-2 rounded-full"
                    disabled={true}
                    divstyle="md:py-3 py-1"
                />

                <div>
                    <h3>Asad Mehmood</h3>
                    <p>From wireframing to prototyping, our creative UI/UX designers combine strategic thinking and creative expertise to deliver visually captivating designs. From wireframing to prototyping, our creative UI/UX designers combine strategic. From wireframing to prototyping,</p>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>

            </div>







        </div>
    )
}

export default CeoFounder