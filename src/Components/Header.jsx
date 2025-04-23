import React, { useEffect, useState } from 'react'
import { IMAGES } from '../Utils/images'
import { nav_items } from '../Utils/DummyData'
import { Link, useLocation } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import Button from './Button'

const Header = () => {
  const params = useLocation();
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

  }, [toggle])


  return (

    <>
      <main className={`xl:w-[80%] w-[90%] mx-auto p-4 sticky`}>

        <div className='flex items-center justify-between sm:gap-2 gap-0'>
          {/* logo Start */}
          <Link to="/">
            <img
              src={IMAGES.LOGO}
              alt={IMAGES.LOGO}
              className='xl:w-[141px] w-[100px] h-[50px] object-contain'
            />
          </Link>
          {/* logo End */}

          {/* nav Start */}
          <div className='border border-white_color text-white_color xl:w-[50%] w-[70%]  py-1 px-1  rounded-full md:block hidden'>

            <ul className={`flex items-center justify-between ${params.pathname === "/" ? "pl-0" : "pl-4"} ${params.pathname === "contact" ? "pl-0" : "pr-4"}  `}>
              {
                nav_items.map((path, ind) => (
                  <li
                    className={`${params.pathname === path?.path ? "bg-gray_color lg:py-2 py-1 lg:px-6 px-3 rounded-full transition-all duration-300 ease-in-out"
                      : "text-white_color "}`} key={ind}
                  >
                    <Link to={path?.path}>{path?.name}</Link>
                  </li>
                ))
              }
            </ul>

          </div>
          {/* nav End */}

          {/* button Start */}
          <div>
            <Button
              btnname="Get Started"
              btnStyle={"text-white_color md:block hidden bg-gray_color xl:py-3 py-2  xl:px-8 px-4 rounded-full text2 border border-gray_color hover:bg-blue_color hover:transition-color duration-300 ease-in-out hover:border hover:border-white_color"}
              divstyle={`w-full`}
            />
          </div>
          {/* button End */}

          {/* hamburder Start */}
          <div onClick={() => { setToggle(!toggle) }} >
            {
              toggle ? (
                <IoCloseSharp
                  size={30}
                  className={`text-white_color md:hidden block`}
                />
              ) : (
                <CiMenuFries
                  size={30}
                  className={`text-white_color md:hidden block `}
                />
              )
            }
          </div>

          {/* hamburder End */}
        </div>
      </main>

      {/* mobile_responsive_start */}
      {
        <div
          className={`absolute ${toggle ? "top-[12.8%]" : "top-0"} left-0 right-0 w-full p-4 pt-18 h-full bg-black_color flex justify-center gap-6 transform transition-transform duration-500 ease-in-out ${toggle ? 'translate-y-0' : '-translate-y-[100%]'}`}>
          <ul className='flex flex-col gap-4 w-full items-center'>
            {
              nav_items.map((path, ind) => (
                <li
                  className={`${params.pathname === path?.path
                    ? "bg-gray_color lg:py-2 py-2 lg:px-6 px-2 rounded-full w-[50%] transition-colors duration-300 ease-linear text-white_color text-center"
                    : "text-white_color"} text2`}
                  key={ind}
                >
                  <Link to={path?.path}>{path?.name}</Link>
                </li>
              ))
            }


            {/* button Start */}
            <div>
              <Button
                btnname="Get Started"
                btnStyle={"text-white_color  bg-gray_color lg:py-4 py-2 md:px-8 px-10 rounded-full text2 border border-gray_color hover:bg-blue_color hover:transition-color duration-300 ease-in-out hover:border hover:border-white_color"}
              />
            </div>
            {/* button End */}



          </ul>

        </div>
      }
      {/* mobile_responsive_end */}





    </>



  )
}

export default Header