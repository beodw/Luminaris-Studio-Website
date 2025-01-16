import React from "react";
import "../assets/styles/scss/layout/_testimonials.scss";

import testimonalContent from "../assets/data/TestimonalContent"; 

const TestimonialSection = () => {
  // return (
  //   <section className="testimonials section max-w-[320px] md:max-w-[1000px] lg:max-w-[1024px] 2xl:max-w-[2048px]">
  //     <div className="testimonials-shape testimonials-shape-1">
  //       <svg
  //         width="280"
  //         height="280"
  //         viewBox="0 0 280 280"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <defs>
  //           <linearGradient
  //             x1="100%"
  //             y1="0%"
  //             x2="0%"
  //             y2="100%"
  //             id="testimonials-shape-1"
  //           >
  //             <stop stop-color="#261FB6" offset="0%" />
  //             <stop stop-color="#4950F6" offset="100%" />
  //           </linearGradient>
  //         </defs>
  //         <circle
  //           cx="140"
  //           cy="685"
  //           r="140"
  //           transform="translate(0 -545)"
  //           fill="url(#testimonials-shape-1)"
  //           fill-rule="evenodd"
  //         />
  //       </svg>
  //     </div>
  //     <div className="testimonials-shape testimonials-shape-2">
  //       <svg
  //         width="125"
  //         height="107"
  //         viewBox="0 0 125 107"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <g fill="none" fill-rule="evenodd">
  //           <circle fill="#C6FDF3" cx="48" cy="59" r="48" />
  //           <path
  //             d="M58.536 39.713c0-6.884 1.72-14.007 5.163-21.368 3.443-7.36 8.167-13.458 14.173-18.292l11.645 7.91c-3.589 4.98-6.262 10.016-8.02 15.106S78.86 33.598 78.86 39.384v13.623H58.536V39.713z"
  //             fill="#55EBD0"
  //           />
  //           <path
  //             d="M93.252 39.713c0-6.884 1.722-14.007 5.164-21.368 3.442-7.36 8.166-13.458 14.172-18.292l11.646 7.91c-3.589 4.98-6.262 10.016-8.02 15.106s-2.637 10.529-2.637 16.315v13.623H93.252V39.713z"
  //             fill="#1ADAB7"
  //           />
  //         </g>
  //       </svg>
  //     </div>
  //     <div className="testimonials-shape testimonials-shape-3">
  //       <svg
  //         width="48"
  //         height="48"
  //         viewBox="0 0 48 48"
  //         mlns="http://www.w3.org/2000/svg"
  //       >
  //         <defs>
  //           <linearGradient
  //             x1="93.05%"
  //             y1="19.767%"
  //             x2="15.034%"
  //             y2="85.765%"
  //             id="testimonials-shape-3"
  //           >
  //             <stop stop-color="#FF3058" offset="0%" />
  //             <stop stop-color="#FF6381" offset="100%" />
  //           </linearGradient>
  //         </defs>
  //         <circle
  //           cx="24"
  //           cy="434"
  //           r="24"
  //           transform="translate(0 -410)"
  //           fill="url(#testimonials-shape-3)"
  //           fill-rule="evenodd"
  //         />
  //       </svg>
  //     </div>
  //     <div className="container">
  //       <div className="testimonials-inner section-inner">
  //         {/* Section heading rendered dynamically */}
  //         <h2 className="section-title mt-0 text-center">
  //           {testimonalContent.sectionHeading}
  //         </h2>
  //         <div className="testimonials-wrap">
  //           {testimonalContent.testimonials.map((testimonial, index) => (
  //             <div key={index} className="testimonial text-xs is-revealing">
  //               <div className="testimonial-inner">
  //                 <div className="testimonial-main">
  //                   <div className="testimonial-header">
  //                     <img
  //                       className="mb-16"
  //                       src={testimonial.imgSrc}
  //                       alt="Testimonial"
  //                     />
  //                   </div>
  //                   <div className="testimonial-body">
  //                     <p className="mb-0">{testimonial.feedback}</p>
  //                   </div>
  //                 </div>
  //                 <div className="testimonial-footer">
  //                   <div className="testimonial-link">
  //                     <a href="/">{testimonial.username}</a>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <section id="testimonials-section" className="flex flex-col items-center">
    <h1 className="self-center text-[20px] lg:text-[45px] lg:text-[25px]">What People Are Saying</h1>
    <div className="grid gird-cols-1 lg:grid-cols-2 lg:gap-8 w-3/4">
      {
        testimonalContent.testimonials.map( 
          (testimonial, index) => {
            return (
                <div className="flex flex-col items-center justify-center">
                  <img className="rounded-full w-8 h-8 md:w-12 md:h-12 mb-2 lg:mb-4 xl:w-24 xl:h-24 xl:mb-8" src={testimonial.imgPath} />
                  <p className="text-[12px] text-center lg:text-[10px] xl:text-[18px] font-poppins text-justify max-w-[300px]">{testimonial.feedback}</p>
                  <p className="text-[8px] text-center lg:text-[12px] xl:text-[20px] font-poppins">{testimonial.username}</p>
                </div>
            );
          }
        )
      }
    </div>
    </section>
  );
};

export default TestimonialSection;
