// import React, { useEffect, useRef, useState } from 'react'
// import { OurProcessData, team_data } from '../../../Utils/DummyData';
// import Button from '../../../Components/Button';

// const OurProcess = () => {
//     const sidebarContainerRef = useRef(null);
//     const sidebarInnerRef = useRef(null);
//     const stopRef = useRef(null);
//     const [positionClass, setPositionClass] = useState('relative');

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!sidebarContainerRef.current || !stopRef.current) return;

//             const containerTop = sidebarContainerRef.current.getBoundingClientRect().top;
//             const stopBottom = stopRef.current.getBoundingClientRect().bottom;

//             const sidebarHeight = sidebarInnerRef.current.offsetHeight;

//             if (containerTop <= 20 && stopBottom > sidebarHeight + 20) {
//                 setPositionClass('fixed top-5');
//             } else if (stopBottom <= sidebarHeight + 20) {
//                 setPositionClass('absolute bottom-0');
//             } else {
//                 setPositionClass('relative');
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     console.log(OurProcessData);


//     return (
//         <div className="container mx-auto px-4 py-8">
//             <div className="flex">


//                 {/* Team Members */}
//                 <div className="grid  sm:grid-cols-2 md:gap-6 gap-2 w-full cursor-pointer" ref={stopRef}>
//                     {OurProcessData.map((item, index) => (
//                         <div key={index} className="group w-fit relative overflow-hidden rounded-lg">
//                             {
//                                 item.imgsec?.map((items, index) => (
//                                     <img
//                                         key={index}
//                                         src={items}
//                                         alt={items}
//                                         className="lg:w-[480px] w-full object-contain rounded-lg"
//                                     />

//                                 ))
//                             }

//                             {/* Background hover overlay */}
//                             <div className="absolute bottom-0 left-0 w-full h-full bg-transparent transition-colors duration-300 ease-linear group-hover:bg-yellow_color group-hover:bg-opacity-35" />

//                             {/* Rotated role text (hidden until hover) */}
//                             <p className="absolute top-14 text1 -right-10 transform -rotate-90 text-white_color  font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 ease-linear">
//                                 {item.role}
//                             </p>

//                             <p>
//                                 <span className="text1 font-semibold text-white_color absolute bottom-0 lg:p-4 p-2 translate-y-full transform group-hover:translate-y-0 transition-transform duration-500 ease-in-out  ">{item.name}</span>

//                                 <span className='absolute bottom-2 lg:right-3 right-0 flex  gap-1 flex-col translate-y-[120%] transform group-hover:translate-y-0 transition-transform duration-500 ease-in-out'>
//                                     <img
//                                         src={item.facebook}
//                                         alt={item.facebook}
//                                         className='lg:w-[30px] w-[25px] '
//                                     />
//                                     <img
//                                         src={item.instagram}
//                                         alt={item.instagram}
//                                         className='lg:w-[30px] w-[25px]'
//                                     />
//                                     <img
//                                         src={item.linkedin}
//                                         alt={item.linkedin}
//                                         className='lg:w-[30px] w-[25px]'
//                                     />
//                                 </span>
//                             </p>
//                         </div>
//                     ))}
//                 </div>


//                 {/* Sidebar Wrapper */}
//                 <div
//                     ref={sidebarContainerRef}
//                     className="relative md:min-h-[300px] md:h-[100%]">
//                     <div
//                         ref={sidebarInnerRef}
//                         className={`${positionClass} transition-all duration-300`}>
//                         <Button
//                             btnname='Our Team'
//                             btnStyle={`text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full mx-auto`}
//                             disabled={true}
//                         />
//                         <div className="lg:w-[380px] mb-4">
//                             <h3 className="mainheading font-medium mb-2 text-white_color">Meet With Expert Team</h3>
//                             <p className="text2 text-white_color">
//                                 Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OurProcess




import React, { useEffect, useRef, useState } from 'react';
import { OurProcessData } from '../../../Utils/DummyData';
import Button from '../../../Components/Button';

const OurProcess = () => {
    const sidebarContainerRef = useRef(null);
    const sidebarInnerRef = useRef(null);
    const stopRef = useRef(null);
    const [positionClass, setPositionClass] = useState('relative');

    useEffect(() => {
        const handleScroll = () => {
            if (!sidebarContainerRef.current || !stopRef.current || !sidebarInnerRef.current) return;

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
        <div className="md:w-[80%] w-[90%] mx-auto md:py-8 py-4">
            <div className="flex flex-col md:flex-row md:items-start md:gap-12">

                {/* Left: Images Grid */}
                <div className="w-full md:w-1/2 flex gap-4">
                    <div className="flex flex-col gap-4 ">

                        <div className="relative w-full group overflow-hidden rounded-lg">
                            <img
                                src={OurProcessData[0]?.imgsec?.[0]}
                                alt="process-img-0"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                            />
                            <div className="cursor-pointer absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, quisquam.</p>
                            </div>
                        </div>

                        <div className="relative w-full group overflow-hidden rounded-lg">
                            <img
                                src={OurProcessData[0]?.imgsec?.[2]}
                                alt="process-img-0"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                            />
                            <div className="cursor-pointer absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, quisquam.</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 ">

                        <div className="relative w-full group overflow-hidden rounded-lg">
                            <img
                                src={OurProcessData[0]?.imgsec?.[1]}
                                alt="process-img-0"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                            />
                            <div className="cursor-pointer absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, quisquam.</p>
                            </div>
                        </div>

                        <div className="relative w-full group overflow-hidden rounded-lg">
                            <img
                                src={OurProcessData[0]?.imgsec?.[3]}
                                alt="process-img-0"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                            />
                            <div className="cursor-pointer absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, quisquam.</p>
                            </div>
                        </div>

                    </div>
                    {/* Stop point (bottom boundary) */}
                    <div className="h-[1px] mt-96" />
                </div>

                {/* Right: Text Section */}
                <div ref={sidebarContainerRef} className="w-full md:w-1/2 text-white_color relative">
                    <div
                        ref={sidebarInnerRef}
                        className={`${positionClass} transition-all duration-300 z-10 `}
                    // style={{ width: 'inherit' }}
                    >
                        <Button
                            btnname="Our Team"
                            btnStyle="text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full"
                            disabled={true}
                            divstyle="md:py-3 py-1"
                        />
                        <h3 className="mainheading font-medium text-white_color ">Our Process</h3>
                        <p className="text2 md:w-[90%]">
                            At our software house, we start by thoroughly understanding client requirements and defining clear project objectives.
                            We then focus on the development phase, where we design, code, and rigorously test the software to ensure it meets high-quality standards.
                            Finally, we deploy the solution and provide ongoing maintenance and support to ensure its optimal performance and continuous improvement.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurProcess;

