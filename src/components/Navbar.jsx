
// import { useState } from 'react';
// import navlogo from '../assets/imgs/navlogo.png'

// function Navbar() {

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <section className="px-[5%] md:px-[3%] py-4 bg-[#1C1C1C] md:mt-40 mt-20 ">
//       <nav className="lg:flex hidden justify-between items-center fixed  z-[999]">
//   <div className="w-[30%]">
//     <ul className='flex 2xl:space-x-20 lg:space-x-8 md:space-x-4 text-white uppercase poppins text-lg font-medium leading-7'>
//       <a href=""><li>home</li></a>
//       <a href=""><li>Overview</li></a>
//       <a href=""><li>features</li></a>
//     </ul>
//   </div>
//   <div className="w-[30%] flex justify-center">
//     <a href=""><img src={navlogo} alt="" /></a>
//   </div>
//   <div className="w-[30%] justify-end flex">
//     <button className='bg-text-color bg-opacity-10 text-text-color rounded-lg text-base  font-medium py-4  px-12 poppins  border-text-color border  text-center flex justify-center cursor-pointer uppercase'>Sign up</button>
//   </div>

//      </nav>





//      <nav className=" p-4 lg:hidden ">
//       <div className="flex items-center justify-between">
//         <div className="">
//         <a href=""><img src={navlogo} alt="" className='w-1/2'/></a>
//         </div>
//         <button
//           className="flex text-white focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {isOpen ? (
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//       <div
//         className={`${isOpen ? 'block' : 'hidden'} lg:items-center text-center mt-6`}>
//           <ul className='items-center justify-between text-white uppercase poppins text-lg font-medium leading-7 space-y-6'>
//             <li><a href="">home</a></li>
//             <li><a href="">Overview</a></li>
//             <li><a href="">features</a></li>
           
//           </ul>
        
//        <div className="flex gap-6 md:flex-row flex-col justify-center mt-5">
//        <button className='bg-text-color bg-opacity-10 text-text-color rounded-lg text-base  font-medium py-4  px-12 poppins  border-text-color border  text-center flex justify-center cursor-pointer uppercase'>Sign up</button>
         
//        </div>
//       </div>
//     </nav>




//       </section>
//     </>
//   )
// }

// export default Navbar


// import { useState } from 'react';
// import navlogo from '../assets/imgs/navlogo.png'

// function Navbar() {

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <section className=" bg-[#1C1C1C]  relative ">
//         <nav className="px-[5%] md:px-[3%] py-4 w-full lg:flex hidden justify-between items-center fixed bottom-5  z-[999] bg-[#1C1C1C]">
//           <div className="w-[30%]">
//             <ul className='flex 2xl:space-x-20 lg:space-x-8 md:space-x-4 text-white uppercase poppins text-lg font-medium leading-7'>
//               <a href=""><li>home</li></a>
//               <a href=""><li>Overview</li></a>
//               <a href=""><li>features</li></a>
//             </ul>
//           </div>
//           <div className="w-[30%] flex justify-center">
//             <a href=""><img src={navlogo} alt="" /></a>
//           </div>
//           <div className="w-[30%] justify-end flex">
//             <button className='bg-text-color bg-opacity-10 text-text-color rounded-lg text-base  font-medium py-4  px-12 poppins  border-text-color border  text-center flex justify-center cursor-pointer uppercase'>Sign up</button>
//           </div>
//         </nav>

//         <nav className=" p-4 lg:hidden fixed bottom-0 left-0 right-0 z-[999]">
//           <div className="flex items-center justify-between">
//             <div className="">
//               <a href=""><img src={navlogo} alt="" className='w-1/2'/></a>
//             </div>
//             <button
//               className="flex text-white focus:outline-none"
//               onClick={toggleMenu}
//             >
//               {isOpen ? (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//           <div
//             className={`${isOpen ? 'block' : 'hidden'} lg:items-center text-center mt-6`}>
//               <ul className='items-center justify-between text-white uppercase poppins text-lg font-medium leading-7 space-y-6'>
//                 <li><a href="">home</a></li>
//                 <li><a href="">Overview</a></li>
//                 <li><a href="">features</a></li>
//               </ul>
//               <div className="flex gap-6 md:flex-row flex-col justify-center mt-5">
//                 <button className='bg-text-color bg-opacity-10 text-text-color rounded-lg text-base  font-medium py-4  px-12 poppins  border-text-color border  text-center flex justify-center cursor-pointer uppercase'>Sign up</button>
//               </div>
//           </div>
//         </nav>
//       </section>
//     </>
//   )
// }

// export default Navbar;




import { useState } from 'react';
import navlogo from '../assets/imgs/navlogo.png'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className=" bg-bg-color  relative pt-36">
        <nav className=" px-[5%] md:px-[3%] py-4 w-full lg:flex hidden justify-between items-center fixed bottom-5  z-[999] bg-[#1C1C1C]">
          <div className="w-[30%]">
            <ul className='flex 2xl:space-x-20 lg:space-x-8 md:space-x-4 text-white uppercase poppins text-lg font-medium leading-7'>
              <a href=""><li>home</li></a>
              <a href=""><li>Overview</li></a>
              <a href=""><li>features</li></a>
            </ul>
          </div>
          <div className="w-[30%] flex justify-center">
            <a href=""><img src={navlogo} alt="" /></a>
          </div>
          <div className="w-[30%] justify-end flex">
            <button className='bg-text-color bg-opacity-10 text-text-color rounded-lg text-base  font-medium py-4  px-12 poppins  border-text-color border  text-center flex justify-center cursor-pointer uppercase'>Sign up</button>
          </div>
        </nav>

        <nav className=" p-4 lg:hidden fixed bottom-5 left-0 right-0 z-[999] bg-[#1C1C1C]">
          <div className="flex items-center justify-between">
            <div className="">
              <a href=""><img src={navlogo} alt="" className='w-1/2'/></a>
            </div>
            <button
              className="flex text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${isOpen ? 'block' : 'hidden'} lg:items-center text-center mt-6`}>
              <ul className='items-center justify-between text-white uppercase poppins text-lg font-medium leading-7 space-y-6'>
                <li><a href="">home</a></li>
                <li><a href="">Overview</a></li>
                <li><a href="">features</a></li>
              </ul>
              <div className="flex gap-6 md:flex-row flex-col justify-center mt-5">
                <button className='bg-text-color bg-opacity-10 text-text-color rounded-lg text-base  font-medium py-4  px-12 poppins  border-text-color border  text-center flex justify-center cursor-pointer uppercase'>Sign up</button>
              </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar;
