import React from 'react';
import ListedItem from '../component/ListedItem';
import SwapHistory from '../component/SwapHistory';
import { useNavigate } from "react-router-dom";
import YourMessages from '../component/YourMessages';
import {QUERY_ME } from '../utils/queries'
import { useQuery } from '@apollo/client';
import Auth from "../utils/auth";


export default function DashBoard() {
  const navigate = useNavigate();

  const { loading , error, data } = useQuery(QUERY_ME);
  
  if (Auth.loggedIn()) {
    var userName = Auth.getProfile().data.name;
    return (
      <section>
        <h2>{userName}, Welcome Back!</h2>

        <h3>Your List Item</h3>
        <ListedItem key="listItems" />
        <h3>Your Message</h3>
        <YourMessages key="yourMessages"/>

        <h3>New Swap Item</h3> 
        <button onClick={() => navigate("/AddProduct")}>Add new Product</button>
      </section>

    );
  }

  return (
    <h2> Please login to view your Dashboard</h2>
  );
}

/*

      
      <h3>Your Pass Swap Record</h3>

        <SwapHistory></SwapHistory>

*/
