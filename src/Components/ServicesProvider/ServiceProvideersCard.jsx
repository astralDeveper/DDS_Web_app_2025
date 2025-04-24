import React from 'react'
import { services_data } from '../../Utils/DummyData';
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceProvideersCard = () => {

    return (
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:py-12 py-6">
            {services_data.map((item, index) => (
                <div
                    key={index}
                    className="relative group rounded-lg shadow-md p-6 min-h-[300px] flex flex-col md:gap-4 gap-2 items-center text-white_color border-2 border-blue_color overflow-hidden cursor-pointer hover:shadow-sm hover:shadow-light_gray_color transition-colors duration-500 ease-in-out">
                    {/* Main content */}
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[90px] h-[90px] object-contain block transform transition-transform duration-700 ease-in-out group-hover:-translate-y-[120%]"
                    />

                    <div className='group-hover:-translate-y-[50%] transition-transform duration-500 ease-in-out '>
                        <h4 className="text-lg font-semibold text-center text1 line-clamp-1">{item.title}</h4>
                        <p className="text-sm sm:text-base text-center text2">{item.description}</p>
                    </div>

                    <div className="text-blue_color cursor-pointer transform translate-y-full opacity-0 group-hover:-translate-y-[160%] transition-transform duration-700 ease-in-out group-hover:opacity-100 ">
                        <div className="flex items-center gap-2">
                            <span className="text2 font-medium">Learn More</span>
                            <span><FaArrowRightLong size={20} /></span>
                        </div>
                    </div>
                    {/* Green hover overlay */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gray_color rounded-md -z-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </div>
            ))}
        </main>

    )
}

export default ServiceProvideersCard