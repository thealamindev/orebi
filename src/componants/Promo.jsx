import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import PromoOne from "../assets/promo_one.jpg"
import PromoTwo from "../assets/promo_two.png"
import PromoThree from "../assets/promo_three.jpg"

const Promo = () => {
  return (
    <>
      <div className="py-[100px]">
        <Container>
            <Flex className={'justify-between'}>
                <div className="w-[49%]">
                    <Image imgSrc={PromoOne}/>
                </div>
                <div className="w-[49%]">
                <Image imgSrc={PromoTwo} className={'mb-9'}/>
                <Image imgSrc={PromoThree}/>
                </div>
            </Flex>
        </Container>
      </div>
    </>
  );
};

export default Promo;
