import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { reviews_data } from '../../../Utils/DummyData';
import { IMAGES } from '../../../Utils/images';

const ReviewCrousal = () => {
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [groupedCards, setGroupedCards] = useState([]);

    const updateItemsPerSlide = () => {
        const width = window.innerWidth;

        if (width <= 550) {
            setItemsPerSlide(1);
        } else if (width <= 768) {
            setItemsPerSlide(3);
        } else if (width <= 1200) {
            setItemsPerSlide(3);
        } else if (width <= 1880) {
            setItemsPerSlide(3);
        } else {
            setItemsPerSlide(3);
        }
    };

    useEffect(() => {
        setGroupedCards(reviews_data);
    }, [itemsPerSlide]);

    useEffect(() => {
        updateItemsPerSlide();

        const handleResize = () => {
            updateItemsPerSlide();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        // <div className='grid grid-cols-3 gap-6 py-6'>
        <Swiper
            slidesPerView={1}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={10}
            pagination={{
                clickable: true,
                el: ".swiper-custom-pagination",
            }}
            navigation={{
                nextEl: ".swiper-custom-next",
                prevEl: ".swiper-custom-prev",
            }}
            modules={[Pagination, Autoplay, Navigation]}
            breakpoints={{
                495: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                913: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 3 },
            }}
        >
            {reviews_data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div key={index} className='mt-6'>
                        <div className='flex items-center md:gap-4 gap-2'>
                            <img
                                src={item.image}
                                alt={item.image}
                                className='md:w-[80px] w-[40px] h-[40px] md:h-[80px] object-contain'
                            />
                            <div className='flex flex-col'>
                                <p className='text-white_color preheading font-medium'>{item.name}</p>
                                <Star key={index} count={item.rating} />
                            </div>
                        </div>
                        <p className='text-white_color text-wrap py-2 text2'>{item.review}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        // </div>
    )
}

export default ReviewCrousal




const Star = ({ count }) => {
    const stars = [];
    const maxStars = 5; // total number of stars to show

    for (let i = 0; i < maxStars; i++) {
        stars.push(
            <img
                key={i}
                src={i < count ? IMAGES.RATE : IMAGES.RATEGRAY}
                alt={i < count ? IMAGES.RATE : IMAGES.RATEGRAY}
                className='md:w-[22px] md:h-[22px] w-[11px] mr-1'
            />
        );
    }

    return <div style={{ display: 'flex' }}>{stars}</div>;
};














