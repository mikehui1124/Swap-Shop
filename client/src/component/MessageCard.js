import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import {CHANGE_ITEM_OWNER, UPDATE_MESSAGE} from '../utils/mutations';
import { useMutation } from '@apollo/client';

export default function MessageCard(props) {
    const {swapData} = props;
    const [changeItemOwner] = useMutation(CHANGE_ITEM_OWNER);
    const [updateMessage] = useMutation(UPDATE_MESSAGE);

    //handle submit
    const handleApprove = async (event) => {
      event.preventDefault();
      //mutation change owner x 2      
      try {
        const mutationResponse = await changeItemOwner({
          variables:{_id: swapData.itemRequest._id, owner: swapData.sender._id}
        });
        const mutationResponse2 = await changeItemOwner({
          variables:{_id: swapData.itemOffer._id, owner: swapData.receiver._id}
        });
        const mutationResponse3 = await updateMessage({
          variables:{_id: swapData._id, isAgree:true ,isClosed:true,replyMessage:""}    
        });
      } catch (e) {
        console.log(e);
      }
      window.location.assign('/DashBoard');
    }

    const handleDecline = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse4 = await updateMessage({
          variables:{_id: swapData._id, isAgree:false ,isClosed:true,replyMessage:""}
        });
      } catch (e) {
        console.log(e);
      }
      window.location.assign('/DashBoard');
    }

    var approvalPanel = (
      <div className='ui two buttons'>
        <Button basic color='green' onClick={handleApprove}>
          Approve
        </Button>
        <Button basic color='red' onClick={handleDecline}>
          Decline 
        </Button>
      </div>
    );
  
    if(swapData && swapData.isClosed){
      approvalPanel = swapData.isAgree?(
        <div>This swap request is approved</div>
      ):(
        <div>This swap request is declined.</div>
      );
    }
    
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
          </Card.Content>
          <Card.Content extra>
            {approvalPanel}
          </Card.Content>
        </Card>
    );
}