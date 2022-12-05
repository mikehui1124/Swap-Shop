import React from 'react';
import ListedItem from '../component/ListedItem';
import SwapHistory from '../component/SwapHistory';

export default function DashBoard() {

  return (
    <section>
      <h2>UserName, Welcome Back!</h2>
      
      <h3>Your Pass Swap Record</h3>
        <SwapHistory></SwapHistory>
      <h3>Your List Item</h3>
        <ListedItem></ListedItem>

      <h3>Add New Swap Item</h3> 
      <button>Add new Swap Item</button>
    </section>

  );
}
