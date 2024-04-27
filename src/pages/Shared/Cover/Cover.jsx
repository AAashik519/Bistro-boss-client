import React from "react";
import { Parallax } from 'react-parallax';
const Cover = ({img , title , subTitle}) => {
  return (
    <div>
         <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div  className="hero  h-[500px]"  >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center max-w-md ">
          <div className=" ">
            <h1 className="mb-5 text-7xl font-semibold uppercase text-white">{title}</h1>
            <p className="mb-5 uppercase text-white">  {subTitle}  </p>
         
          </div>
        </div>
      </div>
    </Parallax>
      
    </div>
  );
};

export default Cover;
