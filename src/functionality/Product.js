import { React, useState } from "react";
import { addProductToDb, getProduct } from "../DataStore/CartDB";

const Product = ({ product, addProduct, cartProducts, setCartProducts }) => {
  return (
    <div>
      <div>
        <div>
          <output>{product.name}</output>
          <output> (${product.price})</output>

          <button
            onClick={async () => {
              console.log("the added product is", product);
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
    </div>
  );
};

export default Product;
