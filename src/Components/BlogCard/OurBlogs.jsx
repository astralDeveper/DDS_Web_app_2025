import React from 'react'
import Button from '../Button'
import { our_blogs_data } from '../../Utils/DummyData';

const OurBlogs = () => {
    return (
        <main>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 py-6'>
                {our_blogs_data.map((item, index) => (
                    <div key={index} className='relative group'>
                        <img
                            src={item.image}
                            alt={item.title}
                            className='md:w-[470px] sm:w-[235px] w-full mx-auto object-contain'
                        />
                        <div className='absolute md:w-[470px] sm:w-[235px] w-full mx-auto inset-0 bg-black bg-opacity-50 flex flex-col justify-end text-white_color md:p-4 p-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                            <h3 className="text1 font-medium">{item.title}</h3>
                            <p className="text2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default OurBlogs