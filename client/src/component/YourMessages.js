import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import MessageCard from './MessageCard';
import { QUERY_RECEIVER_MESSAGE, QUERY_ME } from '../utils/queries'
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

    /*const { loading, error, data } = useQuery(QUERY_ITEMS, {
        variables: [category._id],
      });*/

    //QUERY_RECEIVER_MESSAGE
    const { loading:loading2 , error:error2, data:data2} = useQuery(QUERY_RECEIVER_MESSAGE,{
        variables: [me],
      });
    
    if (data2){
        console.log('query receiver'+ data2);

    //
    //YproductImage,YproductName,senderName,SproductName,SproductImage,SproductDescipt
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