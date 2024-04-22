import React from 'react';

function Contect_us() {
  return (
    <>
      <section className="p-[5%] md:p-[3%]">
        <div className="flex gap-10 md:flex-row flex-col">
          <div className="md:w-3/5 rounded-lg w-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108613.6369908128!2d73.92858475454734!3d31.71108269604858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918c28a688b5b1f%3A0x80b1b64a08cfde2!2sSheikhupura%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713609661445!5m2!1sen!2s"  className="md:h-[700px] h-[350px] w-full border-none rounded-[30px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         
          </div>
          <div className="md:w-2/5 w-full">
            <form action="post">
          <h1 className="gothic text-white font-light 2xl:leading-[130px] md:leading-[80px]  leading-10 2xl:text-[82px] xl:text-[60px] lg:text-[40px] text-[29px]  capitalize">
          Keep In <span className="text-text-color">Touch</span></h1>
          <p className="text-text-pera pt-3 poppins font-normal 2xl:leading-[64px] md:leading-[44px] leading-8  md:text-lg text-base capitalize ">
          ...and let me know how I can be of assistance.
          </p>
          <input type="text"  placeholder='Full Name' className='bg-[#1C1C1C] text-white rounded-lg md:text-base text-sm w-full font-normal pl-5 py-[10px] poppins mt-5 focus:shadow-none hover:border-text-color'/>
          <input type="email"  placeholder='Your Email' className='bg-[#1C1C1C] text-white rounded-lg md:text-base text-sm  w-full font-normal pl-5 py-[10px] poppins mt-5'/>
          <textarea name="" id="" rows="10" className='resize-none  bg-[#1C1C1C] text-white rounded-lg md:text-base text-sm  w-full font-normal pl-5 py-[10px] poppins mt-5 capitalize' placeholder='Your message'></textarea>
         
          <input type="submit" value="Send Message"  className='bg-text-color bg-opacity-10 text-text-color rounded-lg text-base font-normal md:py-5 py-3 px-12 poppins mt-5 border-text-color border 2xl:w-2/6 w-full text-center flex justify-center cursor-pointer'/>
          </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contect_us;


