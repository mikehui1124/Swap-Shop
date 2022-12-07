import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
    const {product} = props;
    const navigate = useNavigate();

    const swapProduct = (e) => {
        console.log('Swap the product:'+product.productName);
        console.log('hardcode loggedIn');
        //call graphQL with this.props.product
        let tempauth=true;
        //check if it is login first
        //if (Auth.loggedIn())
        if (tempauth){
            //if yes go to swapProductForm
            navigate("/SwapProduct");
        }
        else {
            alert('Please login before swap product');
        }
        
    };

    return (
        <Card>
            <Image src={'./images/' + product.image} wrapped ui={false} />
            <Card.Content>
            <Card.Header>Product Name:  {product.productName}</Card.Header>
            <Card.Meta>
                <span className='date'></span>
            </Card.Meta>
            <Card.Description>
                Template Product Description:{product.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                Owner UserName :{product.owner.name}
            </a>
            </Card.Content>
            <button onClick={swapProduct}>Swap this Product</button>
        </Card>
    )
        
} 