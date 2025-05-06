import React from 'react'
import { whyChoseUSIcon, whyChoseUSTexts } from '../../../Utils/DummyData';

const WhyChooseUs = () => {
  console.log("whyChoseUSTexts", whyChoseUSTexts);

  return (
    <div className=''>

      <div className='grid grid-cols-1 md:grid-cols-3 mx-auto md:gap-8 gap-4 md:py-10 py-6' >
        {
          whyChoseUSIcon.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-center justify-center rounded-2xl gap-2 bg-gray_color md:h-[300px] h-[200px] text-white_color md:py-4 py-2">
                <img
                  className="md:w-[100px] w-[60px] object-contain"
                  src={item.icon}
                  alt={item.icon}
                />
                <div className="flex flex-col">
                  <h3 className="text1 font-medium">{item.title}</h3>
                  <p className="text2">{item.description}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 mx-auto md:gap-8 gap-4 ' >
        {
          whyChoseUSTexts.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-center justify-center bg-gradient-to-r from-cyan_color to-blue_color rounded-2xl gap-2 border md:h-[300px] h-[200px] text-white_color md:py-4 py-2">
                <div className="flex flex-col p-4">
                  <h3 className="heading2 font-medium text-black">{item.title}</h3>
                  <p className="text3 text-black">{item.description}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default WhyChooseUs