import React from "react";
import Navbar from "../Navbar";
import Category from "../Category";
import Banner from "../Banner";
import Promo from "../Promo";

import Product from "../Product";
import Ads from "../Ads";
import SpecialOffer from "../SpecialOffer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Banner />
      <Promo />
      <Product/>
      <Ads/>
      <SpecialOffer/>
    </>
  );
};

export default Home;
