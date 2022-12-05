import React from 'react';
import ProductCard from '../component/ProductCard';
import ProductCategory from '../component/ProductCategory';


export default function Home() {

  return (
    <section>
      <ProductCategory categoryName="Gardening"></ProductCategory>
      <ProductCategory categoryName="Household"></ProductCategory>
      <ProductCategory categoryName="Trader"></ProductCategory>
    </section>

  );
}
