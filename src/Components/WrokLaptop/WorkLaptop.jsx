import React from 'react'
import { IMAGES } from '../../Utils/images'

const WorkLaptop = ({iamge}) => {
    return (
        <div className="relative w-full max-w-[800px] mx-auto group overflow-hidden">
        {/* Laptop Mockup */}
        <img
            src={IMAGES.MAC}
            alt="Laptop Mockup"
            className="w-full h-auto object-contain relative -z-10"
        />
    
        {/* Website Screenshot inside laptop screen */}
        <div className="absolute top-[5.2%] left-[17%] w-[66.6%] h-[72%] overflow-hidden rounded-[4px] z-0">
            <img
                src={iamge}
                alt="Website Screenshot"
                className="w-full h-full object-cover object-[top_center] transition-all duration-[5s] ease-in-out group-hover:object-[bottom_center] cursor-pointer"
            />
        </div>
    </div>
    




    )
}

export default WorkLaptop