
import React from 'react'
import Container from '../../../Components/Container'
import Button from '../../../Components/Button'
import { why_choose_us } from '../../../Utils/DummyData';
import { IMAGES } from '../../../Utils/images';

const WhyChoseUs = () => {
    console.log("why_choose_us", why_choose_us);

    return (
        <Container >
            <main className='grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4' >
                <div>
                    <Button
                        btnname="Best Digital Agency"
                        btnStyle="text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full"
                        disabled={true}
                        divstyle="md:py-3 py-1"
                    />
                    <p className='mainheading text-white_color font-medium'>Why Our Clients Choose Us</p>
                    {
                        why_choose_us.map((item, index) => (
                            <div key={index}>
                                <div className='flex items-center gap-2 text-white_color md:py-4 py-2'>
                                    <img
                                        className='md:w-[100px] w-[60px] object-contain'
                                        src={item.icon}
                                        alt={item.icon}
                                    />
                                    <div className='flex flex-col'>
                                        <h3 className="text1 font-medium">{item.title}</h3>
                                        <p className="text2">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div>

                    </div>
                </div>

                <div>
                    <img
                        src={IMAGES.AGENCY}
                        alt={IMAGES.AGENCY}
                        className='md:w-[580px] sm:w-[290px] mx-auto object-contain'
                    />
                </div>
            </main>

        </Container>
    )
}

export default WhyChoseUs