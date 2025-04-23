import React from "react";
import Button from "../Button";
import Inputfield from "../Inputfield";
import { IMAGES } from "../../Utils/Images";

const RightSection = () => {
  return (
    //  RightDiv
    <div className="md:w-[55%] w-full bg-primaryColor py-10">
      <div className="w-[80%] mx-auto">
        <p className="font-Barlow text3 text-white font-bold">Reach Us</p>
        <div className="flex gap-5  mx-auto">
          <Inputfield
            divstyle="md:mt-7 mt-4 w-[50%] "
            Labelname="First Name*"
            labelstyle="text10 text-lableColor"
            innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
            inputStyle="w-full px-5 py-3 bg-transparent "
            type="email"
            placeholder="Enter First Name"
            name="email"
          />
          <Inputfield
            divstyle="md:mt-7 mt-4 w-[50%] "
            Labelname="Last Name*"
            labelstyle="text10 text-lableColor"
            innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
            inputStyle="w-full px-5 py-3 bg-transparent "
            type="email"
            placeholder="Enter First Name"
            name="email"
          />
        </div>

        <Inputfield
          divstyle="md:mt-5 mt-4 "
          Labelname="Email Address*"
          labelstyle="text10 text-lableColor"
          innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
          inputStyle="w-full px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter First Name"
          name="email"
        />
        <Inputfield
          divstyle="md:mt-5 mt-4 "
          Labelname="Phone Number"
          labelstyle="text10 text-lableColor"
          innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
          inputStyle="w-full px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter First Name"
          name="email"
        />
        <Inputfield
          divstyle="md:mt-5 mt-4 "
          Labelname="Position"
          labelstyle="text10 text-lableColor"
          innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
          inputStyle="w-full px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter First Name"
          name="email"
        />
        <Inputfield
          divstyle="md:mt-5 mt-4 "
          Labelname="Experience"
          labelstyle="text10 text-lableColor"
          innerDiv="text11 border-[1px] rounded-lg border-lableColor w-full text-white mt-2"
          inputStyle="w-full px-5 py-3 bg-transparent "
          type="email"
          placeholder="Enter First Name"
          name="email"
        />
        <div className="md:mt-5 flex flex-col justify-center items-center outline-dashed w-full h-[140px]">
          <img
            src={IMAGES.UPLOAD_ICON}
            className="lg:w-[30px] lg:h-[30px] cursor-pointer"
            alt="upload_icon"
          />
          <p>Upload File or drag and drop here.</p>
        </div>

        <Button
          btnname="Submit Form"
          btnStyle="text8"
          divstyle="bg-secondaryColor py-3 px-12 mt-10"
        />
      </div>
    </div>
  );
};

export default RightSection;
