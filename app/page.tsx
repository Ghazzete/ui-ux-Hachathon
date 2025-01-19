
import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Section from "./components/Section";
import Gallery from "./components/Image";
import ProductCards from "./components/products/page";


export function page () {
  return (
    <div>
      <Hero />
      <Features />
      <Products />
      <Section />
      <Gallery />
      <ProductCards/>
    </div>
  );
};

export default page;
