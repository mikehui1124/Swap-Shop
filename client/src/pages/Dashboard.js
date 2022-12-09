import React from 'react';
import ListedItem from '../component/ListedItem';
import SwapHistory from '../component/SwapHistory';
import MessagePanel from '../component/MessagePanel';
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const navigate = useNavigate();
  return (
    <section>
      <h2>UserName, Welcome Back!</h2>
      <MessagePanel></MessagePanel>
      
      <h3>Your Pass Swap Record</h3>
        <SwapHistory></SwapHistory>
      <h3>Your List Item</h3>
        <ListedItem></ListedItem>

      <h3>Add New Swap Item</h3> 
      <button onClick={() => navigate("/AddProduct")}>Add new Product</button>
    </section>

  );
}
