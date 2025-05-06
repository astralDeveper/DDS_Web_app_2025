import React from 'react';
import { tab_data } from '../Utils/DummyData';

const TabBar = ({ activeTab, setActiveTab }) => {


    return (
        <div className='md:w-[75%] w-full mx-auto md:py-10 py-4 text-white_color'>
            <div className='flex items-center justify-between py-2 px-2 border  rounded-full'>
                {tab_data.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`cursor-pointer md:px-6 px-2 py-2 rounded-full transition-all duration-500 ease-in-out
                                ${activeTab === index
                                ? 'bg-gradient-to-r from-cyan_color to-blue_color text-white shadow-md'
                                : ''
                            }`}
                    >
                        <h3 className="relative z-10 text-center text2 transition-all duration-500 ease-in-out">
                            {item}
                        </h3>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TabBar;
