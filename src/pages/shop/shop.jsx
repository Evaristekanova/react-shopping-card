import React from "react";
import { PRODUCTS } from "../../products";
import "./shop.css";
import { Product } from "./product";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>React shopping Card</h1>
          </div>
          <div className="products">{ PRODUCTS.map(product=><Product key={product.id} data={product} />)}</div>
    </div>
  );
};
export default Shop;
