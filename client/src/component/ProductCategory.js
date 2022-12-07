import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import ProductCard from './ProductCard';
import RequestForm from './RequestForm';

export default class ProductCategory extends Component {

    renderProductCard(currentProduct){
        return  <ProductCard key={currentProduct.key} product={currentProduct}></ProductCard>;
    }

    render() {
        const products=[{
            key: "1",
            userName:"abc001",
            productName:"I-phone",
            description:'It is a brand-new Iphone 6',
            photos:'./assets/smartphone-call.png'
            },
            {
            key: "2",
            userName:"abc002",
            productName:"Printer",
            description:'This is fully functional colour printer',
            photos:'./assets/smartphone-call.png'    
        }];

        const details = {
            requestItem: "i-phone",
            itemOwner: "John",
            requester: "David",
            category: "6390dc04d55c3c4d95185943"
        }

        let cards = [];
        products.forEach(item => {
            cards.push(this.renderProductCard(item));
        });

        return (
            <div>
                <p>{this.props.categoryName}</p>
                <Card.Group>
                {cards}
                </Card.Group>
                <RequestForm requestDetail = {details}/>
            </div>
        );
    }
}