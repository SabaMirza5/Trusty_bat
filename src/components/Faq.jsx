




import React, { useState } from "react";
import minus from '../assets/imgs/minus.png'
import plus from '../assets/imgs/plus.png'
import border from '../assets/imgs/border.png'

function Faq() {
  const [isOpen, setIsOpen] = useState(0); // Initialize isOpen to -1 for no item open by default

  const handleAccordion = (index) => {
    setIsOpen(index === isOpen ? -1 : index);
  };

  const faqs = [
    {
      question: "What is Data-as-a-Service (DaaS)?",
      answer:
        "Data-as-a-Service (DaaS) is a cloud-based service model that provides businesses with access to high-quality, real-time data without the need for<br class='hidden 2xl:inline'/> extensive infrastructure or data management resources.It offers flexible and scalable solutions for acquiring, managing, and analyzing data to drive<br class='hidden 2xl:inline'/> informed decision-making.",
    },
    {
      question: "How does Trusty Bat ensure data security?",
      answer:
      "Data-as-a-Service (DaaS) is a cloud-based service model that provides businesses with access to high-quality, real-time data without the need for<br class='hidden 2xl:inline'/> extensive infrastructure or data management resources.It offers flexible and scalable solutions for acquiring, managing, and analyzing data to drive<br class='hidden 2xl:inline'/> informed decision-making.",
    },
    {
      question: "What industries can benefit from Trusty Bat's services?",
      answer:
      "Data-as-a-Service (DaaS) is a cloud-based service model that provides businesses with access to high-quality, real-time data without the need for<br class='hidden 2xl:inline'/> extensive infrastructure or data management resources.It offers flexible and scalable solutions for acquiring, managing, and analyzing data to drive<br class='hidden 2xl:inline'/> informed decision-making.",
    },
    {
      question: "Are Trusty Bat's data solutions customizable?",
      answer:
      "Data-as-a-Service (DaaS) is a cloud-based service model that provides businesses with access to high-quality, real-time data without the need for<br class='hidden 2xl:inline'/> extensive infrastructure or data management resources.It offers flexible and scalable solutions for acquiring, managing, and analyzing data to drive<br class='hidden 2xl:inline'/> informed decision-making.",
    },
  ];

  return (
    <>
      <section className="p-[5%] md:p-[3%]">
        <h1 className="gothic text-white font-light 2xl:leading-[130px] md:leading-[80px]  leading-10 lg:text-[82px] md:text-[60px] text-[29px]  capitalize">
          Frequently Asked <span className="text-text-color">Questions</span>
        </h1>

        <div className="faq-container md:pt-12 pt-0">
          {faqs.map((faq, index) => (
            <div className="accordion " key={index}>
              <div className="accordion-item md:pt-12  pt-8">
                <div
                  className="accordion-title flex md:gap-7 gap-4 items-center"
                  onClick={() => handleAccordion(index)}
                >
                  {isOpen === index ? <img src={minus} alt=""  /> : <img src={plus} alt="" />}
                  <p className={`text-${isOpen === index ? 'white' : 'text-pera'} capitalize font-normal lg:text-[26px] text-base `} >
                    {faq.question}
                  </p>
                </div>
                {isOpen === index && (
                  <div className="accordion-content flex  md:pt-7 pt-5 md:pl-[80px] pl-7   transform origin-center transition duration-200 ease-out gap-7">
                    <img src={border} alt="" />
                    <p
                      className="text-white font-normal md:text-[23px] text-sm md:leading-[60px] leading-6 2xl:whitespace-pre-line  whitespace-normal 2xl:break-words  break-normal"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Faq;
