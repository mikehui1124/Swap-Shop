import React from 'react';
import ProductCard from '../component/ProductCard';
import ProductCategory from '../component/ProductCategory';
import { QUERY_ALL_ITEMS,QUERY_ITEMS, QUERY_CATEGORIES } from '../utils/queries';
import { useQuery } from '@apollo/client';


export default function Home() {
  
  const {loading, error, data } = useQuery(QUERY_CATEGORIES);
  
  var productCategories = [];
  if(data){
    console.log(data);
    data.categories.forEach(element => {
      productCategories.push(<ProductCategory key={element._id} category={element}></ProductCategory>);
    });
  }

  return (
    <section>
      {productCategories}
    </section>

  );
}
