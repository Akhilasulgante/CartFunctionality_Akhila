import React from "react";
import PropTypes from "prop-types";
import "./ShoppingCart.css";

const ShoppingCart = ({ cartProducts, setCartProducts }) => {
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

  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      <label>
        Total <output>{0}</output>
      </label>
      {/* {productsInCart.size ? (
        renderProductsInCart()
      ) : (
        <div>No products in cart yet</div>
      )} */}
      {cartProducts &&
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
                  onClick={() => {
                    console.log("my products are", cartProducts);
                    let arr = cartProducts;
                    arr = (arr || []).filter((elem) => elem.id !== e.id);
                    setCartProducts(arr);
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

ShoppingCart.propTypes = {
  productsInCart: PropTypes.object.isRequired,
};

export default ShoppingCart;
