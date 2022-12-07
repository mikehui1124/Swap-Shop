
import React, { Component, useEffect } from 'react'
import { Button, Checkbox, Form , Dropdown, DropdownItem } from 'semantic-ui-react'
import { QUERY_ALL_ITEMS, QUERY_CATEGORIES } from '../utils/queries'
import { useQuery } from '@apollo/client';

export default function SwapProductForm(props){
    const {productName, productOwner} = props;

    //call graphql to get data this product
    //get this USERS PRODUCT ON DROPDOWN MENU
/*    const {loading, error, me } = useQuery(QUERY_ME);
    console.log('The current user is' + me);
    */
   // let me = "Bruce Lee";
    const {loading, error, data } = useQuery(QUERY_ALL_ITEMS);
    const me = {_id: "638fa971bf269d149534b90e"};
    var dropDownItems = [];
    if(data){
        var filteredItems = data.items.filter(
            (product) => product.owner._id === me._id
        );
        console.log(filteredItems);
        filteredItems.forEach(element => {
            dropDownItems.push(
                {
                    key: element.name,
                    text: element.name,
                    value: element.name,
                    image: './images/'+element.image,
                  },
            );
        })
        console.log(dropDownItems);
        /*
        
        filteredItems.forEach(element => {
            dropDownItems.push(<Dropdown.Item text={element.name} />);
        });

                <Dropdown.Menu>
                    {dropDownItems}
                    
                </Dropdown.Menu>
        */
   }

/*
    //use mutation once complete the form 
    const handleSubmitForm = async (event) => {
        event.preventDefault();
        try {
          const mutationResponse = await addMessage({
            //variables: { email: formState.email, password: formState.password },
            //addMessage(sender: ID, receiver: ID, itemRequest: ID, itemOffer: ID ): Message
            variables:{sender: me, receiver:productOwner,}
            });
          const token = mutationResponse.data.login.token;
          Auth.login(token);
        } catch (e) {
          console.log(e);
        }
      };

*/
        
    return(
        <Form>
            <p>Product Name:{productName}</p>
            <p>Owner:{productOwner}</p>
            <Dropdown 
                placeholder='Swap with Your Product'
                fluid
                selection
                options={dropDownItems}>
            </Dropdown>

            <Form.TextArea label='Message' placeholder='Tell us more how you would like to swap' />
            <Button type='submit' >Submit</Button>
        </Form>
    )
}
