import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import ListedProductCard from './ListedProductCard';

export default class ListedItem extends Component {

    renderYourProductCard(currentProduct){
        return  <ListedProductCard key={currentProduct.key} product={currentProduct}></ListedProductCard>;
    }

    render() {
        const products=[{
            key: "1",
            productName:"I-phone",
            description:'It is a brand-new Iphone 6',
            photos:'./assets/smartphone-call.png'
            },
            {
            key: "2",
            productName:"Printer",
            description:'This is fully functional colour printer',
            photos:'./assets/Product2.jpeg'  
        }];

        let cards = [];
        products.forEach(item => {
            cards.push(this.renderYourProductCard(item));
        });

        return (
            <div>
                <p>{this.props.categoryName}</p>
                <Card.Group>
                {cards}
                </Card.Group>
            </div>
        );
    }
}