import React  from "react";
import { Button, Form , Dropdown, DropdownItem, Table } from 'semantic-ui-react'
import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_MESSAGES, QUERY_ME } from "../utils/queries";
import { CHANGE_ITEM_OWNER } from "../utils/mutations";
import Auth from "../utils/auth";


function MessagePanel() {
    
    const pamela= '63924b5a7aa59b681c60b215';

    const {loading, data} = useQuery(QUERY_MESSAGES);
    const { loading:loading1 , error:error1, data:data1 } = useQuery(QUERY_ME);

    if (data1){
       var meId = data1.me._id;
    };
     console.log('The current user is  ' + meId)
     const [changeOwner, {error}] = useMutation(CHANGE_ITEM_OWNER);

    if (data) {
       var messages = data.messages;
  
       console.log("mdID  " + meId);
       console.log ("sender / receiver" + messages[0].sender.name, messages[0].receiver.name)
 
       var filteredMessages = messages.filter(
        (message) => message.receiver._id === meId
      );
      console.log('The message is' + filteredMessages[0].receiver.name);
      };
   
      
      const handleFormSubmit = async (event) => {
        //changeOwner
          document.getElementById("swappedMessage").textContent
          = `The Swap is done! ${filteredMessages[0].itemOffer.name} is owned by you now. ${filteredMessages[0].itemRequest.name} is swapped to ${filteredMessages[0].sender.name}.`;
          
          const senderId = filteredMessages[0].sender._id;
          const receiverId = filteredMessages[0].receiver._id; //me
          const requestItem = filteredMessages[0].itemRequest._id;
          const offerItem = filteredMessages[0].itemOffer._id;   
          
        //changeOwner 1
          try {
          const {data} = await changeOwner({
            variables: { _id: requestItem, owner: senderId  }
          });
          } catch (err) {
            console.error(err);
          }

          //changeOwner 2
          try {
            const {data2} = await changeOwner({
              variables: { _id: offerItem, owner: receiverId  }
            });
            } catch (err) {
              console.error(err);
            }       

      };


      const handleRefuse = async (event) => {
        // change isClosed

      };
    return (     
      <>
        <div>          
          {filteredMessages.length ? (
            <div>

            <h4>hi {filteredMessages[0].receiver.name}, Your Messages,</h4> 
            <Form>
              <p>Requester :{filteredMessages[0].sender.name}</p>
              <p>Requested Item :{filteredMessages[0].itemRequest.name}</p>
              <p>Item offered by Yourself :{filteredMessages[0].itemOffer.name}</p>
                      
              <Button type='submit' onClick={handleFormSubmit} >Accept</Button>
              <Button onClick={handleRefuse} >Refuse</Button>
            </Form>
            <h3 id= 'swappedMessage'> </h3> 
           </div> 
          ) : null }

        </div>
        </>
      );
}

export default MessagePanel;