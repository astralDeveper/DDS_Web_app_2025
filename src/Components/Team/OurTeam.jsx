import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import { team_data } from '../../Utils/DummyData';

const OurTeam = () => {
    const sidebarContainerRef = useRef(null);
    const sidebarInnerRef = useRef(null);
    const stopRef = useRef(null);
    const [positionClass, setPositionClass] = useState('relative');

    useEffect(() => {
        const handleScroll = () => {
            if (!sidebarContainerRef.current || !stopRef.current) return;

            const containerTop = sidebarContainerRef.current.getBoundingClientRect().top;
            const stopBottom = stopRef.current.getBoundingClientRect().bottom;

            const sidebarHeight = sidebarInnerRef.current.offsetHeight;

            if (containerTop <= 20 && stopBottom > sidebarHeight + 20) {
                setPositionClass('fixed top-5');
            } else if (stopBottom <= sidebarHeight + 20) {
                setPositionClass('absolute bottom-0');
            } else {
                setPositionClass('relative');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start relative">

                {/* Sidebar Wrapper */}
                <div
                    ref={sidebarContainerRef}
                    className="relative md:min-h-[300px] md:h-[100%]">
                    <div
                        ref={sidebarInnerRef}
                        className={`${positionClass} transition-all duration-300`}>
                        <Button
                            btnname='Our Team'
                            btnStyle={`text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full mx-auto`}
                            disabled={true}
                        />
                        <div className="lg:w-[380px] mb-4">
                            <h3 className="mainheading font-medium mb-2 text-white_color">Meet With Expert Team</h3>
                            <p className="text2 text-white_color">
                                Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Members */}
                <div className="grid  sm:grid-cols-2 md:gap-6 gap-2 w-full cursor-pointer" ref={stopRef}>
                    {team_data.map((item, index) => (
                        <div key={index} className="group w-full relative overflow-hidden rounded-lg">
                            <img
                                src={item.image}
                                alt={item.image}
                                className="lg:w-[480px] w-full object-contain rounded-lg"
                            />

                            {/* Background hover overlay */}
                            <div className="absolute bottom-0 left-0 w-full h-full bg-transparent transition-colors duration-300 ease-linear group-hover:bg-yellow_color group-hover:bg-opacity-35" />

                            {/* Rotated role text (hidden until hover) */}
                            <p className="absolute top-14 text1 -right-10 transform -rotate-90 text-white_color  font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 ease-linear">
                                {item.role}
                            </p>

                            <p>
                                <span className="text1 font-semibold text-white_color absolute bottom-0 lg:p-4 p-2 translate-y-full transform group-hover:translate-y-0 transition-transform duration-500 ease-in-out  ">{item.name}</span>

                                <span className='absolute bottom-2 lg:right-3 right-0 flex  gap-1 flex-col translate-y-[120%] transform group-hover:translate-y-0 transition-transform duration-500 ease-in-out'>
                                    <img
                                        src={item.facebook}
                                        alt={item.facebook}
                                        className='lg:w-[30px] w-[25px] '
                                    />
                                    <img
                                        src={item.instagram}
                                        alt={item.instagram}
                                        className='lg:w-[30px] w-[25px]'
                                    />
                                    <img
                                        src={item.linkedin}
                                        alt={item.linkedin}
                                        className='lg:w-[30px] w-[25px]'
                                    />
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;