import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';



export default class SwapRecord extends Component {
    render(){
        return (
            <Card>  
                <Image src={this.props.product.Ophotos} wrapped ui={false} />
                <Card.Content>
                <Card.Header>From:  {this.props.product.OproductName}</Card.Header>
                <Card.Header>To:    {this.props.product.NproductName}</Card.Header>
                <Card.Meta>
                    <span className='date'>Swap Date:{this.props.product.swapDate} </span>
                </Card.Meta>
                </Card.Content>
                <Image src={this.props.product.Nphotos} wrapped ui={false} />
                
            </Card>
        )
    }
}