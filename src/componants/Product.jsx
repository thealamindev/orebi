import React from "react";
import Image from "./Image";
import Cat from "../assets/cat.png";
import Buscate from "../assets/producttwo.jpg";
import Badge from "./Badge";
import { FaHeartbeat, FaShoppingCart } from "react-icons/fa";
import Flex from "./Flex";
import { IoGitCompare } from "react-icons/io5";
import Container from "./Container";
import Text from "./Text";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Product = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
  };
  return (
    <>
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
      <Container>
      <Text texts={'New Arrivals'} as={'h3'} className={'pb-3 font-dm font-bold text-[39px]'}/>
        <Flex className={'justify-between'}>
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Cat} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>

     
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Buscate} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Cat} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Buscate} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>
        </Flex>
      <Text texts={'Our Bestsellers'} as={'h3'} className={'pb-3 font-dm font-bold text-[39px]'}/>
        <Flex className={'justify-between'}>
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Cat} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>

     
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Buscate} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Cat} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Buscate} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>
        </Flex>
      </Container>
    </>
  );
};

export default Product;
