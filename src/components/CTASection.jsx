import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import {scrollToSection, getInTouch} from "../utils"

export default function CTASection (){

    


    return (
        <div className="flex flex-col h-screen">
                <Header />
                <div className="w-full mt-12">
                  <div className="flex flex-col justify-center items-center w-full">
                    <h2 class="text-[20px] md:text-[40px] lg:text-[70px] 2xl:text-[100px] font-extrabold font-poppins text-black">Are you building software?</h2>
                    <p class="-mt-4 md:mt-0 lg:mt-4 text-[8px] md:text-[15px] xl:text-[20px] 2xl:text-[34px] 2xl:mt-8 font-poopins">We help you create human made software without the hassle of hiring</p>
                    <button onClick={()=> getInTouch()} class="hover:no-underline font-bold bg-blue-500 text-white mt-[40px] 2xl:px-8 2xl:py-8 xl:text-[30px] px-6 py-3 md:px-4 md:py-3 md:text-[30px] rounded pulsate font-poppins">Get In Touch</button>
                  </div>
                </div>

                <div className="grow"></div>

                <div className="flex flex-col items-center justify-end w-full">
                    <p className="font-poppins font-semibold text-[14px]">Find Out More</p>
                    <FontAwesomeIcon onClick={()=> scrollToSection("offer-section")} icon={faChevronDown} className="bg-blue-500 p-4 rounded-full text-white hover:cursor-pointer text-4xl animate-bounce mt-8" />                  
                </div>
        </div>
    );
}