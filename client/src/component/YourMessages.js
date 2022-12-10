import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import MessageCard from './MessageCard';
import { QUERY_RECEIVER_MESSAGE, QUERY_ME, QUERY_MESSAGES } from '../utils/queries'
import { useQuery } from '@apollo/client';

export default function YourMessages() {

  
    const renderYourMessageCard=(currentProduct)=>{
        //console.log(currentProduct);
        return  <MessageCard key={currentProduct.key} swapData={currentProduct}></MessageCard>;
        
    }

    //QueryMe
    const { loading:loading1 , error:error1, data:data1 } = useQuery(QUERY_ME);
    var me;
    if (data1){
      me = data1.me._id;
    };
    console.log('The current user is' + me);

  

    //QUERY_RECEIVER_MESSAGE
    const { loading , error, data} = useQuery(QUERY_RECEIVER_MESSAGE,{
        variables: {receiver: me},
      });

    // const { loading , error, data} = useQuery(QUERY_MESSAGES);
    
      var messages
      
    if (data){
        // console.log('query receiver '+ data.messages.length);
        messages = data.messageReceiver
        
        console.log('query message sender '+ messages[0].sender.name);
    
    
        // messages = (data2.messageReceiver);
        // console.log('message receiver '+ messages)

        let products =[]
     
        messages.forEach(item => {
            products.push({
                key: "",
                YproductName: item.itemRequest.name,
                YproductImage:item.itemRequest.image,                
                senderName:item.sender.name,
                SproductName:item.itemOffer.name,
                SproductImage:item.itemOffer.image,
                SproductDescipt:item.itemOffer.description,
                YproductID:item.itemRequest._id,
                SproductID:item.itemOffer._id,
                senderID:item.sender._id,
                receiverID:item.receiver._id,

            })
        })
      
        // const products=[{
        //     key: "1",
        //     YproductName: messages[0].itemRequest.name,
        //     YproductImage:messages[0].itemRequest.image,
        //     senderName:messages[0].sender.name,
        //     SproductName:messages[0].itemOffer.name,
        //     SproductImage:messages[0].itemOffer.image,
        //     SproductDescipt:messages[0].itemOffer.description,

        

        //     },
        //     {
        //     key: "2",
        //     YproductName:"sofa",
        //     YproductImage:"./images/sofa.jpg",
        //     senderName:"TestingName:",
        //     SproductName:"mobile-phone",
        //     SproductImage:"./images/mobile-phone.jpg",
        //     SproductDescipt:'It is a brand-new Iphone 6',  
        // }];

        let cards = [];
        products.forEach(item => {
            cards.push(renderYourMessageCard(item));
        });

        return (
            <div>
              <Card.Group>
                {cards}
                </Card.Group>
            </div>
        );
    }
    else
    {
        return;
    }
    
}