import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import React from "react";
export default function ContinueIcons() {
   const  icons = [FcGoogle, FaTwitter, FaFacebook, FaApple]; 
    return (
        <>
          <div className="flex justify-center items-center gap-7 mt-10">
             <span className="continue-with w-[50%]"> Or Continue with</span>
          </div>
    
      
     

        <div className="flex justify-center items-center gap-7 mt-14 mb-7">
        

            {icons.map((Icon, index) => (
                <div
                    key={index}
                    className={`shadow-lg text-[20px] size-12 bg-white shadow-primary-shadow border-[1px] rounded-2xl flex items-center justify-center ${index === 1
                            ? 'text-[#1D9BF0]'
                            : index === 2
                                ? 'text-[#1877F2]'
                                : ''}`}
                >
                    <Icon />
                </div>
            ))}
        </div></>
      );
}
