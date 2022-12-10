import React from 'react';
import ListedItem from '../component/ListedItem';
import SwapHistory from '../component/SwapHistory';
import MessagePanel from '../component/MessagePanel';
import { useNavigate } from "react-router-dom";
import YourMessages from '../component/YourMessages';
import {QUERY_ME } from '../utils/queries'
import { useQuery } from '@apollo/client';
import Auth from "../utils/auth";


export default function DashBoard() {
  const navigate = useNavigate();

  const { loading:loading1 , error:error1, data:data1 } = useQuery(QUERY_ME);
  var userName;
  var yourMessages = [];
  if (data1){
    userName = data1.me.name;
    yourMessages.push(<YourMessages key="yourMessages" userId={data1.me._id}/>);
  };
  console.log('The current user is' + userName);
  

  if (Auth.loggedIn()) {
  return (
    <section>

      <h2>{userName}, Welcome Back!</h2>


   

      <h3>Your List Item</h3>
        <ListedItem></ListedItem>

      <h3>Your Message</h3>
      {yourMessages}

      <h3>Add New Swap Item</h3> 
      <button onClick={() => navigate("/AddProduct")}>Add new Product</button>
    </section>

  );}

  else{
    return (
      <h2> Please login to view your Dashboard</h2>
    )
  }
}

/*

      
      <h3>Your Pass Swap Record</h3>

        <SwapHistory></SwapHistory>

*/
