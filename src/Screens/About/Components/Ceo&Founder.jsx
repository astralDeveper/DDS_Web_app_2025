import React from 'react'
import { IMAGES } from '../../../Utils/images'
import Button from '../../../Components/Button'
import { company_experiance } from '../../../Utils/DummyData'

const CeoFounder = () => {
    return (
        <div className=' w-[80%] mx-auto md:py-10 py-5 grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4'>



            <div className=''>
                <img
                    className='md:w-[400px] sm:w-[250px] mx-auto object-contain'
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

                <div className=''>
                    <div>
                        <h3 className='preheading font-semibold text-white_color'>Asad Mehmood</h3>
                        <p className='text3 text-[#A7A7A7]'>From wireframing to prototyping, our creative UI/UX designers combine strategic thinking and creative expertise to deliver visually captivating designs. From wireframing to prototyping, our creative UI/UX designers combine strategic. From wireframing to prototyping,</p>
                    </div>
                    <div className='flex items-start md:gap-4 gap-2 md:py-4 py-2'>
                        <img
                            src={IMAGES.FACEBOOK}
                            alt={IMAGES.FACEBOOK}
                            className='md:w-[40px] w-[20px]'
                        />
                        <img
                            src={IMAGES.TWITER}
                            alt={IMAGES.TWITER}
                            className='md:w-[40px] w-[20px]'
                        />
                        <img
                            src={IMAGES.LINKEDIN}
                            alt={IMAGES.LINKEDIN}
                            className='md:w-[40px] w-[20px]'
                        />
                    </div>
                </div>

                <div className=''>
                    <div className='w-full bg-gray_color h-[2px] ' />
                </div>

                <div className=''>
                    <h4 className='subheading font-semibold text-white_color'>Company Experience</h4>
                    <p className='text3 text-[#A7A7A7]'>From wireframing to prototyping, our creative UI/UX designers combine strategic thinking and creative expertise to deliver visually captivating designs. From wireframing to prototyping, our creative.</p>
                </div>

                <ul className='flex flex-col md:gap-3 gap-2 py-4'>
                    {
                        company_experiance.map((item, ind) => (
                            <li key={ind} className='flex items-center md:gap-2 gap-1'>
                                <span>
                                    <img
                                        src={item.icon}
                                        alt={item.icon}
                                        className=' md:w-[24px] w-[12px] object-contain'
                                    />
                                </span>

                                <span className='text3 text-[#A7A7A7]'>
                                    {item.text}
                                </span>
                            </li>
                        ))
                    }

                </ul>



            </div>







        </div>
    )
}

export default CeoFounder