import React, { useState } from 'react';
import card1 from '../assets/imgs/card1.png'
import card2 from '../assets/imgs/card2.png'
import card3 from '../assets/imgs/card3.png'
import rightarrow from '../assets/imgs/rightarrow.png'
import leftarrow from '../assets/imgs/leftarrow.png'

function Empowering() {




  
  return (
    <>
     <section className="p-[5%] md:p-[3%]">
        <div className="text-center">
          <h1 className="gothic text-white font-light 2xl:leading-[130px] md:leading-[80px]  leading-10 lg:text-[82px] md:text-[60px] text-[29px]  capitalize">
          Empowering Your Business with <br />
            <span className="text-text-color">Advanced Tools</span>
          </h1>
          <p className="text-text-pera pt-3 poppins font-normal 2xl:leading-[64px] md:leading-[44px] leading-8  md:text-lg text-base capitalize ">
          rusty Bat offers a suite of advanced tools designed to meet your specific data needs. Our customizable solutions ensure that you have access to the right<br className="2xl:block hidden" /> data at the right time. Whether you require comprehensive market insights, robust financial analytics, or proactive cybersecurity measures, our tools are <br className="2xl:block hidden" /> tailored to drive your business forward. 
          </p>
        
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-12">
        <div className="flex min-h-screen w-full items-center justify-center">
  
  <article
    className='group relative aspect-video h-full  cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl'
  >
    <img
      className='absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300'
      src={card1}
      alt=''
    />
    <div className="flex justify-between md:px-8 pt-8 px-4">
      <h1 className='text-white poppins text-[36px] leading-[60px]  z-10'>01</h1>
      <img src={rightarrow} alt="" className='h-12 w-12  z-10'/>
      
    </div>
    <div
      className='absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500 '>
      <h2
        className='absolute bottom-8 md:left-8 left-4 m-0  uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-[68%] group-hover:delay-0 group-hover:duration-300 xl:text-[36px]   text-2xl font-semibold lg:leading-[40px] leading-7 text-white'>
      Business <br className='xl:block hidden'/>search
      </h2>
      <p
        className='absolute md:left-8 left-4 md:right-8 right-4 top-[30%]   pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300 poppins md:text-lg 2xl:leading-[66px] lg:leading-[40px] text-base leading-7 font-normal text-text-pera'
      >
        Shadowy depths of the internet, where anonymity reigns, and curiosity intertwines with caution. In this blog post, we delve into Dark Web search engines. Hidden from the prying eyes of mainstream search giants, these enigmatic tools allow users to access an alternative realm of the internet.
      </p>
     
    </div>
  </article>
        </div>


  <div className="flex min-h-screen w-full items-center justify-center">
  
  <article
    className='group relative aspect-video h-full  cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl'
  >
    <img
      className='absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300'
      src={card2}
      alt=''
    />
    <div className="flex justify-between md:px-8 pt-8 px-4">
      <h1 className='text-text-color poppins text-[36px] leading-[60px]  z-10'>02</h1>
      <img src={leftarrow} alt="" className='h-12 w-12  z-10'/>
    </div>
    <div
      className='absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90%  transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500 '>
      <h2
        className='absolute bottom-8 md:left-8 left-4 m-0  uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-[68%] group-hover:delay-0 group-hover:duration-300 xl:text-[36px]   text-2xl font-semibold lg:leading-[40px] leading-7 text-white'>
     Dark web search
      </h2>
      <p
        className='absolute md:left-8 left-4 md:right-8 right-4 top-[30%]   pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300 poppins md:text-lg 2xl:leading-[66px] lg:leading-[40px] text-base leading-7 font-normal text-text-pera'
      >
        Shadowy depths of the internet, where anonymity reigns, and curiosity intertwines with caution. In this blog post, we delve into Dark Web search engines. Hidden from the prying eyes of mainstream search giants, these enigmatic tools allow users to access an alternative realm of the internet.
      </p>
     
    </div>
  </article>
  </div>

  


  
    <div className="flex min-h-screen w-full items-center justify-center">
  
  <article
    className='group relative aspect-video h-full  cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl'
  >
    <img
      className='absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300'
      src={card3}
      alt=''
    />
    <div className="flex justify-between md:px-8 pt-8 px-4">
      <h1 className='text-white poppins text-[36px] leading-[60px]  z-10'>01</h1>
      <img src={rightarrow} alt="" className='h-12 w-12  z-10'/>
      
    </div>
    <div
      className='absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90%  transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500 '>
      <h2
        className='absolute bottom-8 md:left-8 left-4 m-0  uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-[68%] group-hover:delay-0 group-hover:duration-300 xl:text-[36px]   text-2xl font-semibold lg:leading-[40px] leading-7 text-white'>
      Email 
<br className='xl:block hidden'/>Research
      </h2>
      <p
        className='absolute md:left-8 left-4 md:right-8 right-4 top-[30%]   pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300 poppins md:text-lg 2xl:leading-[66px] lg:leading-[40px] text-base leading-7 font-normal text-text-pera'
      >
        Shadowy depths of the internet, where anonymity reigns, and curiosity intertwines with caution. In this blog post, we delve into Dark Web search engines. Hidden from the prying eyes of mainstream search giants, these enigmatic tools allow users to access an alternative realm of the internet.
      </p>
     
    </div>
  </article>
    </div>

       

        </div>
      </section> 
    </>
  )
}

export default Empowering
