import React from 'react'
import {  gridData } from '../../Utils/DummyData'

const OurCompletedWork = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap- md:p-4 p-2">
            {gridData.map((item, index) => {
                if (item.type === "image") {
                    return (
                        <div
                            className="flex items-center justify-center rounded-lg md:p-4 p-2"
                            key={index}
                        >
                            <img
                                src={item.content}
                                alt={`Grid item ${index + 1}`}
                                className="md:w-[470px] w-[235px] object-contain cursor-pointer rounded-lg grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                            />
                        </div>
                    );
                }
                if (item.type === "text") {
                    return (
                        <div
                            className="flex flex-col   rounded-lg  justify-center text-white_color md:pl-9 md:pr-9"
                            key={index}>
                            <h3 className="subheading font-medium leading">{item.content.title}</h3>
                            <p className="text2">{item.content.description}</p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default OurCompletedWork