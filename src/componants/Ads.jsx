import React from 'react'
import Image from "./Image";
import AdsBg from "../assets/ads_bg.png";
import Container from './Container';
const Ads = () => {
  return (
    <>
    <Container>
    <Image imgSrc={AdsBg} className={'bg-no-repeat bg-cover bg-center w-full'}/>
    </Container>
    </>
  )
}

export default Ads