import React from 'react'
import Hero from '../Components/Hero'
import FeaturdCategorise from "../Components/FeaturdCategorise";
import Obv from '../bottle/Obv';
import DiscountProduct from '../Components/DiscountPrduct';
import Deal from '../deal/Deal';


function Home() {
  return (
    <div>
        <Hero></Hero>
        <FeaturdCategorise></FeaturdCategorise>
        <Obv></Obv>
        <DiscountProduct></DiscountProduct>
        <Deal></Deal>
    </div>
  )
}

export default Home