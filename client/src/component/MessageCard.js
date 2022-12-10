import { useMutation } from '@apollo/client';
import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { CHANGE_ITEM_OWNER } from '../utils/mutations'

export default function MessageCard(props) {
    const {swapData} = props;
    //console.log(swapData);

    const [changeOwner, {error}] = useMutation(CHANGE_ITEM_OWNER)

    const handleFormAccept = async (event) => {

      document.getElementById("swapComplete").textContent
      =`Your Sway get done! ${swapData.SproductName} is owned by you now. ${swapData.YproductName} is swapped to ${swapData.senderName}`;

      //chanege owner
      try { 
        const {data} = await changeOwner ({
          variables: {_id: swapData.YproductID, owner: swapData.senderID }
        });

      } catch (err) {
        console.error(err);
      }

       //chanege owner
       try { 
        const {data2} = await changeOwner ({
          variables: {_id: swapData.SproductID, owner: swapData.receiverID }
        });

      } catch (err) {
        console.error(err);
      }

    };

        return (
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='mini'
                  src={swapData.YproductImage}
                />
                <Card.Header>Swap Request</Card.Header>
                <Card.Meta></Card.Meta>
                <Card.Description>
                    <p>Your Product: {swapData.YproductName}</p>
                    <p>Swap Request from: {swapData.senderName}</p>
                    <p>Swap to Product: {swapData.SproductName}</p>
                    <p>Product Description:{swapData.SproductDescipt}</p>
                </Card.Description>
                <Image
                  floated='right'
                  size='mini'
                  src={ swapData.SproductImage}
                />
                    <p></p>
              </Card.Content>
              <Card.Content extra>
                <h4 id="swapComplete"></h4>
                <div className='ui two buttons'>
                  <Button basic color='green' onClick={handleFormAccept}>
                    Accept
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>

        )
}