import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { home_banner } from '../../../Utils/DummyData';
import Button from '../../../Components/Button';
import CompaniesLogo from './CompaniesLogo';

const IntroBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000, // Slide ke beech mein time
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true, // Fade effect enable
    };

    return (
        <>
            <div className="relative">
                <Slider {...settings}>
                    {home_banner.map((image, index) => (
                        <div key={index}>
                            <div
                                className="w-full bg-cover bg-center transition-opacity duration-1000 md:h-[60vh] h-[45vh]"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundRepeat: "no-repeat",
                                    // height: "60vh", // Full screen height
                                    backgroundPosition: "center", // Ensure image is centered
                                    objectFit: "cover", // Ensures the image covers the full height and width
                                }}
                            ></div>
                        </div>
                    ))}
                </Slider>
                <div className="absolute top-20 left-0 right-0 bottom-0 mx-auto text-white text-center z-10">
                    <Button
                        btnname='Best Digital Agency'
                        btnStyle={`text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full mx-auto`}
                        disabled={true}
                    />
                    <p className="md:py-4 py-2 mainheading md:w-[60%] w-full font-bold mx-auto">Empowering Brands in the Digital Age</p>
                    <p className='text2 md:w-[60%] w-full mx-auto'>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim minim veniam quis nostrud</p>
                    <Button
                        btnname='Make Inquiry'
                        btnStyle={`text1  bg-blue_color text-white_color text-blue_color md:px-7 px-3 hover:border-blue_color transition-colors duration-500 ease-in-out  border border-white_color rounded-full mx-auto md:mt-10 mt-2 hover:bg-white_color hover:text-blue_color lg:leading-0  `}
                        divstyle={`w-fit`}
                    />
                </div>

                <div className='absolute translate-y-1/2 left-0 right-0 bottom-0 mx-auto text-white text-center z-10'>
                    <Button
                        btnname='Trusted By 250+ Companies'
                        btnStyle={`text2  bg-yellow_color text-white_color text-blue_color md:px-4 px-2 py-2 md:py-3 rounded-full `}
                        divstyle={``}
                    />
                </div>
            </div>

            <div className='bg-dark_gray_color'>
                <div className='md:w-[80%] w-[90%] mx-auto gray_color'>
                    <CompaniesLogo />
                </div>
            </div>



        </>
    );
};

export default IntroBanner;
