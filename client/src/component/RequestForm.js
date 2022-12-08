import React  from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_ITEMS } from "../utils/queries";

import { Button, Form } from "semantic-ui-react";

function RequestForm({requestDetail}) {

  const category = "6390dc04d55c3c4d95185943"; //household
  // query all item by category
  const { loading, error, data} = useQuery(QUERY_ITEMS, {
    variables: {category: category }
  });

  const allItems = data.items;
  console.log( allItems);

  
    return (
      <div className="container my-1">
        <Link to="/signup">← Go to Signup</Link>
  
        <h2>Your Swap Request,</h2>
        <Form onSubmit>
          <div className="flex-row space-between my-2">
            <label htmlFor="request">Request Item: 
              <span>'  '+{requestDetail.requestItem} </span></label>
               
          </div>
          <div className="flex-row space-between my-2">
            <label >Item Owner: 
              <span>    {requestDetail.itemOwner} </span></label>
                
          </div>
          <div className="flex-row space-between my-2">
            <label >Offer Item:</label>
                <select>
                    <option>Offer an Item</option>
                    {allItems.map((item) => (
                    <option>{item.name}</option>            
              ))}
                </select>
                
          </div>
          <div className="flex-row space-between my-2">
            <label >Swapper: 
              <span>{requestDetail.requester} </span></label>              
                
          </div>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          <div className="flex-row flex-end">
            <Button type="submit">Send Request</Button>
          </div>
        </Form>
      </div>
    );
  }
  
  export default RequestForm;

