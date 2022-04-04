import { React, useState } from "react";
import { addProductToDb, getProduct } from "../DataStore/CartDB";
import "./Product.css";

const Product = ({ product, addProduct, cartProducts, setCartProducts }) => {
  return (
    <div className="product-body">
      <div>
        <output className="product-title">{product.name}</output>
        <div className="price">
          <output className="product-price-label">Price:</output>
          <output className="product-price"> ${product.price}</output>
        </div>
      </div>

      <div>
        <button
          className="add-to-cart"
          onClick={async () => {
            setCartProducts([...cartProducts, product]);
            await addProductToDb(product, "Shopping_cart");
            getProduct("Shopping_cart", (cart) => {
              setCartProducts(cart);
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
