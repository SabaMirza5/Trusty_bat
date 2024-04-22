import React from "react";
import logo from "../assets/imgs/logo.png";
import headerimg from "../assets/imgs/headerimg.png";
import bg from "../assets/imgs/bg.png";

function Header() {
  return (
    <>
      <section className="p-[5%] md:p-[3%]">
        <div className="flex items-center justify-center">
          <a href="">
            <img
              src={logo}
              alt="logo here navbar"
              className="lg:h-[74px] md:h-[54px] h-full w-full"
            />
          </a>
        </div>
        <div className="text-center">
          <h1 className="gothic text-white font-light 2xl:leading-[130px] md:leading-[80px]  leading-10 lg:text-[82px] md:text-[60px] text-[29px] pt-[60px] capitalize">
            Welcome to the world of{" "}
            <span className="text-text-color">trusty bat</span>
          </h1>
          <p className="text-text-pera pt-3 poppins font-normal 2xl:leading-[64px] md:leading-[44px] leading-8  md:text-lg text-base capitalize ">
            Unlock the power of data with Trusty Bat's cutting-edge
            Data-as-a-Service solutions. We provide secure, accurate, and
            real-time data to businesses <br className="2xl:block hidden" />{" "}
            across diverse industries, ensuring privacy and flexibility in
            payment options. From market research to financial analysis,
            cybersecurity to risk management,{" "}
            <br className="2xl:block hidden" /> Trusty Bat empowers your
            decision-making with reliable data solutions.
          </p>
          <button className="text-text-color border border-text-color md:py-4 py-2 px-12 uppercase poppins md:text-lg text-base leading-7 rounded-lg md:mt-12 mt-5">
            try trusty bat
          </button>
        </div>
      </section>
      <div className="pt-5">
        <img src={headerimg} alt="" />
      </div>
      <br />
      <br />
      <br className="md:block hidden" />
      <section className="p-[5%] md:p-[3%] relative">
        <div className="flex justify-center items-center">
          <img src={bg} alt="logo here navbar" className="w-full" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white ">
          <h1 className="poppins font-semibold lg:text-[82px]  md:text-[72px] text-2xl lg:leading-[130px] md:leading-[100px] leading-6">
            Unleash Your Time
          </h1>
          <p className="poppins font-normal lg:text-[52px] md:text-[42px] text-base lg:leading-[78px] md:leading-[58px] leading-6">
            Say Goodbye to Endless Research
          </p>
        </div>
      </section>
    </>
  );
}

export default Header;
