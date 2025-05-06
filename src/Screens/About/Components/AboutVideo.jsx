import React from 'react'
import AboutVideos from '../../../Assets/video/about.mp4'
const AboutVideo = () => {
    return (
        <div className='flex flex-col md:gap-6 gap-4 text-white_color' >

            <div className='text-center'>
                <h3 className='subheading font-semibold'>Get to Know About Us</h3>
                <p className='heading2 sm:w-[55%] w-[full] mx-auto'>From wireframing to prototyping, our creative UI/UX designers combine strategic thinking and creative expertise to deliver visually captivating designs.</p>
            </div>

            <video
                width="640"
                height="360"
                autoPlay
                muted
                loop
                playsInline
                className='rounded-2xl mx-auto'
            >
                <source src={AboutVideos} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='text-center flex flex-col md:gap-2 gap-1'>
                <h3 className='preheading font-semibold'>Build up your web appearance </h3>
                <p className='text2 sm:w-[55%] w-full mx-auto text-center '>From wireframing to prototyping, our creative UI/UX designers combine strategic thinking and creative expertise to deliver visually captivating designs.From wireframing to prototyping, our creative UI/UX designers combine strategic thinking and creative expertise to deliver visually captivating designs.</p>
            </div>


        </div>
    )
}

export default AboutVideo