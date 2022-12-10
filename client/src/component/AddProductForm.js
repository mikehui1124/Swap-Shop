
import React, { Component,useEffect, useState  } from 'react'
import { Button, Checkbox, Form, Dropdown } from 'semantic-ui-react'
import {ADD_ITEM} from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { QUERY_CATEGORIES, QUERY_ME } from '../utils/queries'
import { useQuery } from '@apollo/client';

export default function AddProductForm (){
    //fvar productName, imageURL, description;
    const [productName, setproductName] = useState(0);
    const [imageURL, setImageURL] = useState(0);
    const [description, setDescription] = useState(0);
    const [category, setCategory] = useState(0);
    const [addItem] = useMutation(ADD_ITEM);

    const productNameOnChange= e => { 
        console.log('productName'+e.target.value);
        setproductName(e.target.value);
    }

   
    const URLOnChange=e=>{ 
        console.log('URL'+e.target.value);
        setImageURL(e.target.value)
    }


    
    const descripOnChange=e=>{
        console.log('description'+e.target.value);
        setDescription(e.target.value)
    
    }

    const dropdownOnChange = (e, {value}) =>{
        console.log('category'+value);
        setCategory(value);
    }


    const {loading, error, data } = useQuery(QUERY_CATEGORIES);
    var categoryItems = [];
    if(data){
        data.categories.forEach(element => {
            categoryItems.push(
                {
                    key: element._id,
                    value: element._id,
                    text: element.name,
                },
            );
        });
   }

  const {loading:loading1, error:error1, data:data1 } = useQuery(QUERY_ME);
  var me;
  if (data1){
    me = data1.me._id;
  };
  console.log('The current user is' + me);


  
    const handleSubmitForm = async (event) => {
        event.preventDefault();
        console.log (productName, imageURL,description, me, category);
        try {
            const mutationResponse = await addItem({
              //addItem(name: String, owner: ID, category: ID, image: String, description: String ): Item
              variables:{name: productName, owner: me, category:category, image: imageURL, description: description}
              });
              window.location.assign('/DashBoard');
              
          } catch (e) {
            console.log(e);
        
    }
    }

    return(
        <Form>
            <Form.Field>
                <label>Product Name</label>
                <input placeholder='Product Name'
                        onChange={productNameOnChange} />
            </Form.Field>
            <Form.Field>
                <label>URL of the product Photos</label>
                <input placeholder='Please enter the URL' 
                    onChange={URLOnChange}/>
            </Form.Field>
            <Dropdown id="Category"
                placeholder='Cateogry'
                fluid
                selection
                options={categoryItems}
                onChange={dropdownOnChange}>
            </Dropdown>
            <Form.TextArea label='Product Description' laceholder='Tell us more about your product' 
                            onChange={descripOnChange}/>

            <Button type='submit' onClick={handleSubmitForm} >Submit</Button>
        </Form>
    )

}

/*            
            onClick={handlesubmitform}
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            */