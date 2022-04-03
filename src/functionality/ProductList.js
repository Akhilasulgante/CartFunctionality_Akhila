import { React, useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import Product from "./Product.js";

const ProductList = ({
  products,
  addProduct,
  cartProducts,
  setCartProducts,
}) => {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((p, i) => (
          <Product
            key={"product" + i}
            product={p}
            addProduct={addProduct}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
          ></Product>
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ProductList;
