import React from 'react';
import SwapProductForm from '../component/SwapProductForm';
import { useLocation } from "react-router-dom";

export default function SwapProduct() {
    const location = useLocation();
    // get userId
    console.log(location.state);
    
    let productName = location.state.productName;
    let ownerName =location.state.productOwner;
    let productId =location.state.productId;
    let productOwnerId =location.state.productOwnerId;
    console.log(productName, ownerName,productId,productOwnerId);

  return (
    <section>
      <h2>Swap Product Request Form</h2>
      <SwapProductForm productName={productName} productOwner={ownerName} productOwnerId={productOwnerId} productId={productId}/>
    </section>

  );
}