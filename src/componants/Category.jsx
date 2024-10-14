import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Bars from "../assets/Icons/Bars";
import Text from "./Text";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

const Category = () => {
  return (
    <>
      <div className="bg-categoryBg py-8">
        <Container>
          <Flex className={`items-center`}>
            <div className="w-[15%]">
              <Flex className={`items-center gap-x-2`}>
                <Bars />
                <Text texts={"Shop by Category"} as={"h3"}/>
              </Flex>
            </div>
            <div className="w-[60%] relative">
              <input
                type="text"
                placeholder="Search Products"
                className="p-4 bg-white w-full rounded-lg"
              />
              <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2" />
            </div>
            <div className="w-[25%]">
              <Flex className={`justify-end gap-x-2`}>
                <FaUser className="ml-2"/>
                <FaCaretDown />
                <FaShoppingCart className="ml-5"/>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Category;
