import React, { useState, useEffect } from "react";
import ShoppingCart from "../functionality/ShoppingCart";
import ProductList from "../functionality/ProductList";
import "./Shopping.css";
import { getProduct } from "../DataStore/CartDB";

const Shopping = ({ dbcart }) => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Soccer ball 1",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "2",
      name: "Soccer ball 2",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "3",
      name: "Soccer ball 3",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "4",
      name: "Soccer ball 4",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "5",
      name: "Soccer ball 5",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "6",
      name: "Soccer ball 6",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "7",
      name: "Soccer ball 7",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "8",
      name: "Soccer ball 8",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
  ]);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    getProduct("Shopping_cart", (cart) => {
      setCartProducts(cart);
    });
  }, []);

  return (
    <div>
      <div className="page">
        <div className="page-left">
          <ProductList
            products={products}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          ></ProductList>
        </div>
        <div className="page-right">
          <ShoppingCart
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          ></ShoppingCart>
        </div>
      </div>
    </div>
  );
};

// Shopping.propTypes = {};

export default Shopping;
