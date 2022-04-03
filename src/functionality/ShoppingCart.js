import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./ShoppingCart.css";
import { getProduct, removeProduct } from "../DataStore/CartDB";

const ShoppingCart = ({ cartProducts, setCartProducts }) => {
  console.log("my data in cart is", cartProducts);
  // function renderProductsInCart() {
  //   return (
  //     <span>
  //       <h3>Products in Cart</h3>
  //       {Array.from(productsInCart.entries()).map(
  //         ([name, { product, qty }]) => (
  //           <div key={"pic_" + name}>
  //             {qty} {product.name} ({product.price})
  //           </div>
  //         )
  //       )}
  //     </span>
  //   );
  // }

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
      {/* {productsInCart.size ? (
        renderProductsInCart()
      ) : (
        <div>No products in cart yet</div>
      )} */}
      {cartProducts.length > 0 &&
        cartProducts.map((e) => {
          return (
            <div className="shopping-cart">
              <div>
                <p>{e.name}</p>
              </div>
              <div className="cart-price">
                <p>${e.price}</p>
              </div>

              <div>
                <button
                  onClick={async () => {
                    // console.log("my products are", cartProducts);
                    // let arr = cartProducts;
                    // arr = (arr || []).filter((elem) => elem.id !== e.id);
                    // setCartProducts(arr);

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

// ShoppingCart.propTypes = {
//   productsInCart: PropTypes.object.isRequired,
// };

export default ShoppingCart;
