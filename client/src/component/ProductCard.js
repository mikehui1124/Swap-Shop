import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
    const {product} = props;
    const navigate = useNavigate();


    const swapProduct = (e) => {
        console.log('Swap the product:'+product.name);
        console.log('hardcode loggedIn');
        console.log(product);
        //call graphQL with this.props.product
        //let tempauth=true;
        //check if it is login first
        //if (Auth.loggedIn())
        console.log (Auth.loggedIn);
        if (Auth.loggedIn()){
            //if yes go to swapProductForm
            console.log(product.name + product.owner.name);
            navigate("/SwapProduct",
            {   
                state: {
                productId: product._id,
                productName: product.name ,
                productOwner: product.owner.name,
                productOwnerId:product.owner._id,
                }
              });
        }
        else {
            alert('Please login before swap product');
        }
        
    };

    if(product.name == null){
        return;
    }


        return (
            <Card>
                <Image src={product.image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Product Name:  {product.name}</Card.Header>
                <Card.Meta>
                    <span className='date'></span>
                </Card.Meta>
                <Card.Description>
                    Product Description:{product.description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
        
                    <Icon name='user' />
                    Owner :{product.owner.name}
        
                </Card.Content>
                
                <button onClick={swapProduct}>Swap this Product</button>
            </Card>
        )


        
} 