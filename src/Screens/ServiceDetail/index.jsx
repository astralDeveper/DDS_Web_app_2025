import React, { useEffect, useRef, useState } from 'react'
import Container from '../../Components/Container'
import Button from '../../Components/Button'
import { IMAGES } from '../../Utils/images'
import UIUX from '../../Assets/images/uiuxicons.png'
import STEP1 from '../../Assets/images/step1.png'
import STEP2 from '../../Assets/images/step2.png'
import STEP3 from '../../Assets/images/step3.png'
import STEP4 from '../../Assets/images/step4.png'
import STEP5 from '../../Assets/images/step5.png'
import STEP6 from '../../Assets/images/step6.png'
import STEP7 from '../../Assets/images/step7.png'
import ServiceProvideersCard from '../../Components/ServicesProvider/ServiceProvideersCard'
import StepCard from '../../Components/ServiceDet/StepCard'
import DesgineSection from '../../Components/ServiceDet/DesgineSection'
import Review from '../../Components/Review/Review'

const ServiceDetail = () => {
  const glowRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  const handleScroll = () => {
    if (glowRef.current) {
      const scrollPosition = window.scrollY;
      glowRef.current.style.top = `${scrollPosition}px`;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);


  const steps = [
    {
      stepNumber: "01",
      title: "Requirements",
      description:
        "In the requirement-gathering phase, we delve into the depths of your vision, needs, and aspirations.",
      image: STEP1,
    },
    {
      stepNumber: "02",
      title: "Analysis and Planning",
      description:
        "In the requirement-gathering phase, we delve into the depths of your vision, needs, and aspirations.",
      image: STEP2,
    },
    {
      stepNumber: "03",
      title: "Design and Prototyping",
      description:
        "In the requirement-gathering phase, we delve into the depths of your vision, needs, and aspirations.",
      image: STEP3,
    },
    {
      stepNumber: "04",
      title: "Software Development",
      description:
        "In the requirement-gathering phase, we delve into the depths of your vision, needs, and aspirations.",
      image: STEP4,
    },
    {
      stepNumber: "05",
      title: "QA and Testing",
      description:
        "In the requirement-gathering phase, we delve into the depths of your vision, needs, and aspirations.",
      image: STEP5,
    },
    {
      stepNumber: "06",
      title: "Deployment",
      description:
        "In the requirement-gathering phase, we delve into the depths of your vision, needs, and aspirations.",
      image: STEP6,
    },
    {
      stepNumber: "07",
      title: "Maintenance and Updates",
      description:
        "In the requirement-gathering phase, we delve into the depths of your vision, needs, and aspirations.",
      image: STEP7,
    },
  ];
  return (
    <>
      <div 
      className='flex flex-col items-center justify-center bg-cover bg-center' 
      style={{ backgroundImage: `url(${IMAGES.SERVICEDETAILBG})` }}>
  <div className='m-auto flex flex-col md:flex-row items-center justify-between max-w-screen-lg md:gap-4 p-4'>
    <div className='flex flex-col items-left justify-center p-4 rounded-lg w-full md:w-1/2'>
      <h1 className='text-3xl font-bold text-white'>Creative UI/UX Design
      Services</h1>
      <p className='text-white mt-4 mb-4'>From wireframing to prototyping, our creative UI/UX designers combine strategic
      thinking and creative expertise to deliver visually captivating designs.</p>
      <div>
      <Button
      btnname="Get Started"
      btnStyle={"text-white_color bg-gray_color lg:py-2 py-2 md:px-8 px-10 rounded-md mt-2 text2 border border-gray_color hover:bg-blue_color hover:transition-color duration-300 ease-in-out hover:border hover:border-white_color"}
    />
    </div>
    </div>

    <div className='flex flex-col items-center justify-center p-4 rounded-lg w-full md:w-1/2'>
    <img src={UIUX} /> 
    </div>
  </div>
  </div>
  <div 
    className='flex flex-col items-left justify-center bg-cover bg-center p-16' 
    style={{ backgroundImage: `url(${IMAGES.SERVICEDETAILBGTWO})` }}>
  <DesgineSection/>
  </div>
  <div 
    className="flex flex-col items-start justify-center bg-cover bg-center mx-auto max-w-screen-lg p-4 text-white mb-4" >
        <h2 className='text-3xl font-bold text-white'>Our Path to Perfection</h2>
        <p className='text-white mt-4 mb-4'>At Geeks of Kolachi, our SDLC stands as the cornerstone of our development process, fueling the collaboration and synergy of our coding wizards. By diligently adhering to this well-defined and efficient process, we empower ourselves to navigate through challenges, uphold unwavering quality standards, and present our valued clients with leading-edge solutions.</p>
  </div>
  <div className="relative flex flex-col m-auto max-w-screen-lg items-center justify-center bg-cover bg-center py-16">
        {/* Vertical Line (Single Border) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full md:border-l-2 md:border-gray-300"></div>

      <div className="w-full flex flex-col space-y-8 relative z-10 mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
            data-index={index}
          >
            <StepCard
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              image={step.image}
              isReversed={index % 2 !== 0}
              isActive={activeStep === index}
            />
          </div>
        ))}
      </div>
    </div>
    <div className='md:w-[80%] w-[90%] mx-auto '>
      <Review/>
      </div>
    </>
  )
}

export default ServiceDetail;