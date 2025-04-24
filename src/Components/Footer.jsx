import React from 'react'
import { IMAGES } from '../Utils/images'
import { footerData } from '../Utils/DummyData'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <main className='w-[80%] mx-auto  p-6' >

            {/* main_Div_Start */}
            <div className='grid xl:grid-cols-2 grid-cols-1 items-start justify-center'>

                {/* Logo_Section_Start */}
                <div className='flex flex-col gap-6'>
                    <img
                        src={IMAGES.LOGOF}
                        alt={IMAGES.LOGOF}
                        draggable="false"
                        className='md:w-[197px] w-[100px] object-contain'
                    />
                    <span className='text3 text-white_color'>We are more than a digital agency</span>
                </div>
                {/* Logo_Section_End */}

                <div>
                    {/* Contact_info_start */}
                    <div className="grid xl:grid-cols-3 sm:grid-cols-2 w-[100%] ">
                        {footerData.map((item, index) => (
                            <div key={index} className=''>
                                <h3 className="heading2 text-white_color font-semibold">{item.title}</h3>
                                {item.items.map((data, idx) => (
                                    <div key={idx} className="flex items-center md:gap-4 gap-2 md:mb-4 mb-2 ">
                                        {data.icon && <img src={data.icon} alt={data.label} className="md:w-[30px] w-[15px] object-contain" />}
                                        <Link to={"/"} className='text2 text-white_color font-medium mt-1'>{data.label}</Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    {/* Contact_info_end */}
                </div>
            </div>

            {/* main_Div_End */}

            {/* Diverder_Start */}
            <div className='w-full border-t border-white_color flex items-center justify-between pt-2 '>
                <div className='flex md:flex-row flex-col md:gap-4 gap-2'>
                    <Link to={"/"} className='text2 text-white_color underline' >Privacy Policy</Link>
                    <Link to={"/"} className='text2 text-white_color underline' >Terms and Conditions</Link>
                    <p className='text2 text-white_color underline' > &copy; 2025 DDSH. All rights reserved.</p>
                </div>
                <div className='grid grid-cols-4 gap-1'>
                    <img
                        src={IMAGES.FB}
                        alt={IMAGES.FB}
                        className='md:w-[40px] w-[30px]'
                    />
                    <img
                        src={IMAGES.LINK}
                        alt={IMAGES.LINK}
                        className='md:w-[40px] w-[30px]'
                    />
                    <img
                        src={IMAGES.INSTA}
                        alt={IMAGES.INSTA}
                        className='md:w-[40px] w-[30px]'
                    />
                    <img
                        src={IMAGES.TWIT}
                        alt={IMAGES.TWIT}
                        className='md:w-[40px] w-[30px]'
                    />
                </div>
            </div>
            {/* Diverder_End */}

        </main>
    )
}

export default Footer