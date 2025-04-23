import React from "react";
import LefSection from "./LefSection";
import RightSection from "./RightSection";

const index = () => {
  return (
    // <div className="w-full min-h-screen text-white bg-darkgray2 pt-10">
    <div className="lg:w-[70%] md:w-[90%] min-h-screen text-white bg-darkgray2 mt-10 mx-auto ">
      <div className="w-full lg:w-[90%] flex md:flex-row flex-col-reverse gap-4 mx-auto">
        <LefSection />
        <RightSection />
      </div>
    </div>
  );
};

export default index;
