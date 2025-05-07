import React from 'react'
import { IMAGES } from '../../../Utils/images'
import { hearFromYou } from '../../../Utils/DummyData'

const HereFromYou = () => {
    return (
        <div className='bg-gray_color rounded-xl'>


            <div className='md:py-10 py-2 text-white_color'>
                <div>
                    <img
                        className='md:w-[38px] w-[20px] mx-auto object-contain'
                        src={IMAGES.MESSAGE}
                        alt={IMAGES.MESSAGE}
                    />
                    <div className='text-center md:py-6 py-3'>
                        <p className='subheading font-semibold '>We’d Love To Hear Form You.</p>
                        <p className='text3 py-4'>Here’s what some of my satisfied client have to say about my work.</p>
                    </div>

                    <div className='flex items-center sm:flex-row flex-col justify-center md:gap-10 gap-2'>

                        {
                            hearFromYou.map((item, index) => (
                                <div key={index} className='border md:py-2 py-1 rounded-lg lg:w-[20%] w-[80%]'>
                                    <div className='flex items-center justify-between md:px-4 px-2'>
                                        <div className='flex items-center gap-2'>
                                            <img
                                                className='md:w-[20px] w-[10px] object-contain'
                                                src={item.icon}
                                                alt={item.icon}
                                            />
                                            <div>
                                                <p className='heading2 font-semibold'>{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>


















        </div>
    )
}

export default HereFromYou