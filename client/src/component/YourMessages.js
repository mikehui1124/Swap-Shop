import React from 'react';
import { Card} from 'semantic-ui-react'
import MessageCard from './MessageCard';
import { QUERY_RECEIVER_MESSAGE, QUERY_ME } from '../utils/queries'
import { useQuery } from '@apollo/client';
import Auth from "../utils/auth";

export default function YourMessages() {

    //QUERY_RECEIVER_MESSAGE
    var meId = Auth.getProfile().data._id;
    const { loading, error, data} = useQuery(QUERY_RECEIVER_MESSAGE,{
        variables: {receiver: meId}
    });
    let cards = [];

    if(data){
        data.messageReceiver.forEach((item) => {
            cards.push(<MessageCard key={item._id} swapData={item}></MessageCard>);
        });    
    }

    return (
        <div>
            <Card.Group>{cards}</Card.Group>
        </div>
    );
}