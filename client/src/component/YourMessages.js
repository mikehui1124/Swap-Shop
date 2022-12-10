import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import MessageCard from './MessageCard';
import { QUERY_RECEIVER_MESSAGE, QUERY_ME } from '../utils/queries'
import { useQuery } from '@apollo/client';

export default function YourMessages(props) {
    const {userId} = props;

    const renderYourMessageCard=(currentProduct)=>{
        //console.log(currentProduct);
        return  <MessageCard key={currentProduct.key} swapData={currentProduct}></MessageCard>;        
    }

    //QUERY_RECEIVER_MESSAGE
    const { loading, error, data} = useQuery(QUERY_RECEIVER_MESSAGE,{
        variables: {receiver: userId}
    });
    let cards = [];

    if(data){
        console.log(data);
        data.messageReceiver.forEach((item) => {
            cards.push(<MessageCard key={item._id} swapData={item}></MessageCard>);
        });
    
    }

           
    /*
    const products=[{
        key: "1",
        YproductName:"air-fyer",
        YproductImage:"./images/air-fyer.jpg",
        senderName:"TestingName:",
        SproductName:"mobile-phone",
        SproductImage:"./images/mobile-phone.jpg",
        SproductDescipt:'It is a brand-new Iphone 6',
    },
    {
        key: "2",
        YproductName:"sofa",
        YproductImage:"./images/sofa.jpg",
        senderName:"TestingName:",
        SproductName:"mobile-phone",
        SproductImage:"./images/mobile-phone.jpg",
        SproductDescipt:'It is a brand-new Iphone 6',  
    }];
    products.forEach(item => {
        cards.push(renderYourMessageCard(item));
    });
    */

    return (
        <div>
            <Card.Group>{cards}</Card.Group>
        </div>
    );
}