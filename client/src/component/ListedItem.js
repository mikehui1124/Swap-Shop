import React from 'react';
import { Card } from 'semantic-ui-react'
import ListedProductCard from './ListedProductCard';
import { QUERY_ALL_ITEMS} from '../utils/queries'
import { useQuery } from '@apollo/client';
import Auth from "../utils/auth";

export default function ListedItem () {

    var userId = Auth.getProfile().data._id;
    const { loading, error, data } = useQuery(QUERY_ALL_ITEMS);
    var products=[];
    if (data){
        var filteredItems = data.items.filter(
            (product) => product.owner._id === userId
        );
        filteredItems.forEach(element => {
            products.push(
                {
                    key: element._id,
                    productName: element.name,
                    description: element.description,
                    photos: element.image,
                  },
            );
        })
    }
  
    let cards = [];
    products.forEach(item => {
        cards.push(<ListedProductCard key={item.key} product={item} />);
    });

    return (
        <div>
            <Card.Group>
            {cards}
            </Card.Group>
        </div>
    );
    
}