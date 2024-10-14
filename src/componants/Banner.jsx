import React from "react";
import Image from "./Image";
import bannerImg from "../assets/bannerBg.png";

const Banner = () => {
  return (
    <>
      <div >
        <Image imgSrc={bannerImg} className={'bg-no-repeat bg-cover bg-center w-full'}/>
      </div>
    </>
  );
};

export default Banner;
