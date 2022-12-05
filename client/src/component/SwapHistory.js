import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import SwapRecord from './SwapRecord';

export default class SwapHistory extends Component {

    renderSwapRecord(currentProduct){
        return  <SwapRecord key={currentProduct.key} product={currentProduct}></SwapRecord>;
    }

    render() {
        const products=[{
            key: "1",
            Ophotos:'./assets/smartphone-call.png',
            OproductName: 'I-phone',
            swapDate: '11SEp2010',
            NproductName: 'StorageBox',
            Nphotos:'./assets/Product2.jpeg',
            },
            {
            key: "2",
            Ophotos:'./assets/smartphone-call.png',
            OproductName: 'Product2',
            swapDate: '4/12/2022',
            NproductName: 'Product 3',
            Nphotos:'./assets/Product2.jpeg', 
        }];

        let cards = [];
        products.forEach(item => {
            cards.push(this.renderSwapRecord(item));
        });

        return (
            <div>
                <p></p>
                <Card.Group>
                {cards}
                </Card.Group>
            </div>
        );
    }
}