import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { IMAGES } from '../../Utils/images'
import ReviewCrousal from './Components/ReviewCrousal'
import Inputfield from '../Inputfield'













const Review = () => {



    const [formData, setFormData] = useState({
        fullName: '',
        number: '',
        email: '',
        project: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Dummy errors/touched for now
    const errors = {};
    const touched = {};



    return (
        <div className='p-4'>
            {/* Review Section Start */}

            <div className='bg-yellow_color rounded-3xl md:p-8 p-4'>
                <div>
                    <Button
                        btnname='Portfolio'
                        btnStyle={`text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 rounded-full mx-auto`}
                        disabled={true}
                        divstyle={`flex items-center justify-center mx-auto`}
                    />
                    <p className=' mainheading text-white_color font-medium text-center '>Trust We've Earned</p>
                    <p className='text2 text-white_color text-center'>What Our Clients Says About Us</p>
                </div>
                <div>
                    <img
                        src={IMAGES.GOOGLEREVIEWS}
                        alt={IMAGES.GOOGLEREVIEWS}
                        className='md:w-[219px] w-[100px] h-[100px] object-contain'
                    />
                </div>
                <ReviewCrousal />
            </div>

            {/* Review Section End */}


            {/* TouchForm Start */}


            <div className='flex items-center md:flex-row flex-col justify-between gap-4 md:py-6 py-4'>
                {/* TExt */}
                <div className='text-white_color'>
                    <p className='text3'>Let’s Talk</p>
                    <p className='subheading'>Got an Idea?</p>
                    <h4 className='subheading font-medium'>Let’s get in touch</h4>
                    <p className='text3 mt-2 '>Let’s discuss your project and find out what we can do to provide value.</p>
                </div>
                {/* TExt */}

                {/* form start */}
                <div className='md:w-[60%] w-full'>
                    <div className=" text-white ">
                        <p className="">Enter your details below to get started.</p>
                        <form className='md:mt-6 mt-4'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 input-floating grow w-full'>
                                <Inputfield
                                    Labelname="Your Full Name"
                                    id="fullName"
                                    htmlFor="fullName"
                                    name="fullName"
                                    labelstyle="text-white_color"
                                    inputStyle="bg-transparent border-b border-white_color py-2 w-full"
                                    values={formData.fullName}
                                    onChange={handleChange}
                                    errors={errors.fullName}
                                    touched={touched.fullName}
                                />
                                <Inputfield
                                    Labelname="Your Phone Number"
                                    id="number"
                                    htmlFor="number"
                                    name="number"
                                    labelstyle="text-white_color"
                                    inputStyle="bg-transparent border-b border-white_color py-2 w-full"
                                    values={formData.number}
                                    onChange={handleChange}
                                    errors={errors.number}
                                    touched={touched.number}
                                />

                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 input-floating grow w-full mt-6'>
                                <Inputfield
                                    Labelname="Your Email Address"
                                    id="email"
                                    htmlFor="email"
                                    name="email"
                                    labelstyle="text-white_color"
                                    inputStyle="bg-transparent border-b border-white_color py-2 w-full"
                                    values={formData.email}
                                    onChange={handleChange}
                                    errors={errors.email}
                                    touched={touched.email}
                                />
                                <Inputfield
                                    Labelname="Enter Project Type"
                                    id="project"
                                    htmlFor="project"
                                    name="project"
                                    labelstyle="text-white_color"
                                    inputStyle="bg-transparent border-b border-white_color py-2 w-full"
                                    values={formData.project}
                                    onChange={handleChange}
                                    errors={errors.project}
                                    touched={touched.project}
                                />

                            </div>

                            <Button
                                btnname='Submit'
                                btnStyle={`border px-4 py-1 rounded-md text3 hover:bg-white_color hover:text-blue_color font-medium hover:border-blue_color transition-colors duration-500 ease-in-out`}
                                divstyle={`py-4`}
                                type={`submit`}
                            />

                        </form>
                    </div>
                </div>
                {/* form end */}
            </div>

            {/* TouchForm End */}

        </div>
    )
}

export default Review








