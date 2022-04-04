import React, { useEffect } from "react";
import "./ShoppingCart.css";
import { getProduct, removeProduct } from "../DataStore/CartDB";

const ShoppingCart = ({ cartProducts, setCartProducts }) => {
  async function getMyCartProducts() {
    let products = await getProduct("Shopping_cart");
    console.log("the fecthed products aree", products);
    setCartProducts(cartProducts);
  }

  useEffect(() => {
    getMyCartProducts();
  }, []);

  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      {cartProducts.length > 0 &&
        cartProducts.map((e) => {
          return (
            <div className="shopping-cart">
              <div>
                <p>{e.name}</p>
              </div>
              <div className="cart-price">
                <p>{e.price}</p>
              </div>

              <div className="delete-btn">
                <button
                  className=""
                  onClick={async () => {
                    await removeProduct(e, "Shopping_cart");
                    await getProduct("Shopping_cart", (cart) => {
                      setCartProducts(cart);
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ShoppingCart;
