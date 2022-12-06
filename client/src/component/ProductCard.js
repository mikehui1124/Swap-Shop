import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class ProductCard extends Component {

    swapProduct = (e) => {
        console.log('Swap the product:'+this.props.product.productName);
        //call graphQL with this.props.product
    }

    render(){
        return (
            <Card>
                <Image src={'./images/' + this.props.product.image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Product Name:  {this.props.product.productName}</Card.Header>
                <Card.Meta>
                    <span className='date'></span>
                </Card.Meta>
                <Card.Description>
                   Template Product Description:{this.props.product.description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    Owner UserName :{this.props.product.owner.name}
                </a>
                </Card.Content>
                <button onClick={this.swapProduct}>Swap this Product</button>
            </Card>
        )
    }
}