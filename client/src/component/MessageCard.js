import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

export default function MessageCard(props) {
    const {swapData} = props;
    console.log(swapData);

        return (
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='mini'
                  src={swapData.itemRequest.image}
                />
                <Card.Header>Swap Request</Card.Header>
                <Card.Meta></Card.Meta>
                <Card.Description>
                    <p>Your Product: {swapData.itemRequest.name}</p>
                    <p>Swap Request from: {swapData.sender.name}</p>
                    <p>Swap to Product: {swapData.itemOffer.name}</p>
                    <p>Product Description:{swapData.itemOffer.description}</p>
                </Card.Description>
                <Image
                  floated='right'
                  size='mini'
                  src={ swapData.itemOffer.image}
                />
                    <p></p>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' >
                    Approve
                  </Button>
                  <Button basic color='red' >
                    Decline 
                  </Button>
                </div>
              </Card.Content>
            </Card>

        )
}