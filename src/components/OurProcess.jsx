import React from "react";
import ourProcessDescription from "../assets/data/OurProcessDescription";

const OurProcess = () => {
  return (
    <section id="our-process" className="flex flex-col items-center mt-[100px] mb-[200px]">
        <div className="mb-12 font-semibold text-[25px] lg:text-[45px] text-black font-poppins">{ourProcessDescription.sectionHeading}</div>
        <div className="grid grid-cols-5 gap-2 px-4">
            {
                ourProcessDescription.steps.map(
                    (step, index) =>
                        (
                            <>
                                <div className="flex flex-col items-center justify-center">
                                    {/* <img className="rounded-full w-8 h-8 md:w-12 md:h-12 mb-2 lg:mb-4 xl:w-24 xl:h-24 xl:mb-8" src={step.imgPath} /> */}
                                    <p className="text-[8px] text-center lg:text-[20px] xl:text-[30px] font-poppins text-justify max-w-[300px] font-semibold">{step.title}</p>
                                    <p className="text-[5px] text-center lg:text-[12px] xl:text-[20px] font-poppins">{step.description}</p>
                                </div>
                                {
                                    index != 2 &&

                                    <div className="flex items-center justify-center">
                                        <img className="w-12 h-6 lg:w-24 lg:h-12" src="./images/arrow.jpg"/>
                                    </div>
                                }
                               
                            </>
                        )
                )
            }
        </div>
       
    </section>
  );
};

export default OurProcess;
