import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import ProductCard from "./ProductCard";

import { QUERY_ITEMS } from "../utils/queries";

export default function ProductCategory(props) {
  const { category } = props;
  const { loading, error, data } = useQuery(QUERY_ITEMS, {
    variables: [category._id],
  });

  let cards = [];
  if (data) {
    data.items.forEach((item) => {
      cards.push(<ProductCard key={item._id} product={item}></ProductCard>);
    });
  }


  return (
    <div>
      <h2>{category.name}</h2>
      <Card.Group>{cards}</Card.Group>
    </div>
  );
}

