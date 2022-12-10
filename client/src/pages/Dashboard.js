import React from 'react';
import ListedItem from '../component/ListedItem';
import { useNavigate } from "react-router-dom";
import YourMessages from '../component/YourMessages';
import Auth from "../utils/auth";

export default function DashBoard() {
  const navigate = useNavigate();
  
  if (Auth.loggedIn()) {
    var userName = Auth.getProfile().data.name;
    return (
      <section>
        <h2>{userName}, Welcome Back!</h2>

        <h3>Your List Item</h3>
        <ListedItem key="listedItem"></ListedItem>

        <h3>Your Message</h3>
        <YourMessages key="yourMessages"/>

        <h3>New Swap Product</h3> 
        <button onClick={() => navigate("/AddProduct")}>Add new Product</button>
      </section>

    );
  }

  return (
    <h2> Please login to view your Dashboard</h2>
  );  
}