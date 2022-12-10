import React, { useState } from 'react'
import { Button, Form , Dropdown } from 'semantic-ui-react'
import { QUERY_ALL_ITEMS } from '../utils/queries'
import { useQuery } from '@apollo/client';
import {ADD_MESSAGE} from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from "../utils/auth";

export default function SwapProductForm(props){
    const {productName, productOwner, productId,productOwnerId} = props;
    const [itemOfferId, setItemOfferId] = useState(0);

    //console.log (productName, productOwner, productId, productOwnerId);
    const [addMessage] = useMutation(ADD_MESSAGE);
    var me = Auth.getProfile().data._id;

    const {loading, error, data } = useQuery(QUERY_ALL_ITEMS);
    var dropDownItems = [];
    if(data){
      var filteredItems = data.items.filter(
          (product) => product.owner._id === me
      );
      filteredItems.forEach(element => {
          dropDownItems.push(
              {
                  key: element._id,
                  text: element.name,
                  value: element._id,
                  id: element._id,
                  image: element.image,
                },
          );
      });
    }

    //use mutation once complete the form 
    const handleFormSubmit = async (event) => {
      event.preventDefault();        
      try {
        const mutationResponse = await addMessage({
          variables:{sender: me, receiver:productOwnerId, itemRequest: productId, itemOffer: itemOfferId}
        });
        window.location.assign('/');            
      } catch (e) {
        console.log(e);
      }
    };

    const dropdownOnChange = (e, {value}) => {
      e.persist();
      setItemOfferId(value);
    };
        
    return(
        <Form>
            <p>Product Name:{productName}</p>
            <p>Owner:{productOwner}</p>
            <Dropdown id="swapTo"
                placeholder='Swap with Your Product'
                fluid
                selection
                options={dropDownItems}
                onChange = {dropdownOnChange}>
            </Dropdown>            
            <Button type='submit' onClick={handleFormSubmit} >Submit</Button>
        </Form>
    )
}