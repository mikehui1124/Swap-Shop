import React from 'react';
import SwapProductForm from '../component/SwapProductForm';
import { useLocation } from "react-router-dom";

export default function SwapProduct() {
    const location = useLocation();
    // get userId
    console.log(location.state);
    
    let productName = location.state.productName;
    let ownerName =location.state.productOwner
    console.log(productName, ownerName);

  return (
    <section>
      <h2>Swap Product Request Form</h2>
      <SwapProductForm productName={productName} productOwner={ownerName}/>
    </section>

  );
}