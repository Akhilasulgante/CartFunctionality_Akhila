import React, { useState, useEffect } from "react";
import ShoppingCart from "../functionality/ShoppingCart";
import ProductList from "../functionality/ProductList";
import "./Shopping.css";
import { getProduct } from "../DataStore/CartDB";

const Shopping = ({ dbcart }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Chef Hat 20cm", price: "$11.10" },
    { id: 2, name: "Bay Leaf Fresh", price: "$51.94" },
    { id: 3, name: "Crackers - Soda / Saltins", price: "$70.69" },
    { id: 4, name: "Cranberries - Frozen", price: "$92.74" },
    { id: 5, name: "Fennel", price: "$80.83" },
    { id: 6, name: "Soup - Campbellschix Stew", price: "$69.54" },
    { id: 7, name: "Syrup - Monin, Swiss Choclate", price: "$89.61" },
    { id: 8, name: "Cookies - Englishbay Oatmeal", price: "$79.26" },
    { id: 9, name: "Latex Rubber Gloves Size 9", price: "$75.41" },
    { id: 10, name: "Onions - Dried, Chopped", price: "$87.83" },
    { id: 11, name: "Food Colouring - Blue", price: "$98.47" },
    { id: 12, name: "Soup - Campbells Mac N Cheese", price: "$36.58" },
    { id: 13, name: "Flour - Buckwheat, Dark", price: "$96.34" },
    { id: 14, name: "Trout - Hot Smkd, Dbl Fillet", price: "$37.28" },
    { id: 15, name: "Juice - Cranberry, 341 Ml", price: "$87.85" },
    { id: 16, name: "Soup Knorr Chili With Beans", price: "$58.22" },
    { id: 17, name: "Pasta - Linguini, Dry", price: "$88.47" },
    { id: 18, name: "Lidsoupcont Rp12dn", price: "$93.62" },
    { id: 19, name: "Wine - Redchard Merritt", price: "$37.12" },
    { id: 20, name: "Pastry - Apple Large", price: "$31.58" },
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

export default Shopping;
