
import React, { useState } from 'react';
import Twitter from '../assets/imgs/Twitter.png';
import google from '../assets/imgs/google.png';
import facebook from '../assets/imgs/facebook.png';
import microsoft from '../assets/imgs/microsoft.png';
import u1 from '../assets/imgs/u1.png';
import u2 from '../assets/imgs/u2.png';
import u3 from '../assets/imgs/u3.png';
import u4 from '../assets/imgs/u4.png';
import user1 from '../assets/imgs/user1.png';

function Metadata() {
  const [expandedImage, setExpandedImage] = useState(u4); // Set user1 as the default expanded image

  const handleImageClick = (image) => {
    if (expandedImage === image) {
      setExpandedImage(null);
    } else {
      setExpandedImage(image);
    }
  };

  return (
    <section className='p-[5%] md:p-[3%]'>
      <div className='flex  gap-4 lg:flex-row flex-col'>
        {[u4, u2, u3, u1, user1].map((image, index) => (
          <div key={index} className={`flex lg:flex-row flex-col-reverse   border rounded-[30px] md:gap-9 gap-5 bg-[#1C1C1C] cardmain ${expandedImage === image ? 'w-full border-blue-500' : 'border-[#333333]'}`}>
            <div className={`content  ${expandedImage === image ? 'md:pl-[30px] md:py-[28px] p-5 lg:w-2/4 w-full' : ''}`}>
              {expandedImage === image ? (
                <>
                  <h1 className='poppins font-bold md:text-[26px] text-lg text-text-color'>Meta Data</h1>
                  <div className='md:pt-7 pt-4'>
                    <h2 className='text-lg text-white poppins font-medium'>Full Name</h2>
                    <h1 className='text-base text-text-pera pt-1 poppins font-normal'>Nick Johns</h1>
                  </div>
                  <div className='md:pt-5 pt-4'>
                    <h2 className='text-lg text-white poppins font-medium'>Google + Profile</h2>
                    <h1 className='text-base text-text-pera pt-1 poppins font-normal'>+ Nick Johns</h1>
                  </div>
                  <div className='md:pt-5 pt-4'>
                    <h2 className='text-lg text-white poppins font-medium'>Google + Tagline</h2>
                    <h1 className='text-base text-text-pera pt-1 poppins font-normal'>Just a mild-mannered small town guy</h1>
                  </div>
                  <h1 className='poppins font-bold md:text-[26px] text-lg text-text-color pt-7'>Data Breach Associations</h1>
                  <div className='md:pt-5 pt-4'>
                    <h2 className='text-lg text-white poppins font-medium'>Oct 1st, 2015</h2>
                    <h1 className='text-base text-text-pera pt-1 poppins font-normal'>Gotham City Herald</h1>
                  </div>
                  <div className='md:pt-5 pt-4'>
                    <h2 className='text-lg text-white poppins font-medium'>Sep 18th, 2015</h2>
                    <h1 className='text-base text-text-pera pt-1 poppins font-normal'>Lexcrop, Inc</h1>
                  </div>
                  <div className='flex gap-5 2xl:pt-24 md:pt-10 pt-5'>
                    <a href=''><img src={Twitter} alt='' className='w-full' /></a>
                    <a href=''><img src={google} alt='' className='w-full'/></a>
                    <a href=''><img src={facebook} alt='' className='w-full'/></a>
                    <a href=''><img src={microsoft} alt='' className='w-full'/></a>
                  </div>
                </>
              ) : (
                <img
                  src={image}
                  alt=''
                  className='w-full h-full cursor-pointer'
                  onClick={() => handleImageClick(image)}
                />
              )}
            </div>
            {expandedImage === image && (
              <div className="lg:w-2/4 w-full">
              <img src={image} alt='' className=' w-full h-full' />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Metadata;






