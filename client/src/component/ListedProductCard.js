import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class ListedProductCard extends Component {
    render(){
        return (
            <Card>
                <Image src={this.props.product.photos} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Product Name:  {this.props.product.productName}</Card.Header>
                <Card.Description>
                   Product Description:{this.props.product.description}
                </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}