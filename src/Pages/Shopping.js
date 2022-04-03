import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ShoppingCart from "../functionality/ShoppingCart";
import ProductList from "../functionality/ProductList";
import "./Shopping.css";
import ReactPaginate from "react-paginate";

const Shopping = ({ dbcart, pm }) => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Soccer ball",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "2",
      name: "Soccer ball",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "3",
      name: "Soccer ball",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "4",
      name: "Soccer ball",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "5",
      name: "Soccer ball",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "6",
      name: "Soccer ball",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "7",
      name: "Soccer ball",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
    {
      id: "8",
      name: "Soccer ball",
      price: 12,
      image:
        "https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280",
    },
  ]);

  const [cartProducts, setCartProducts] = useState([]);

  async function onAddProduct(newProduct) {
    console.log("On Create product");
    await pm.addProduct(newProduct);
    // await dbcart.createIdea(newProduct);
    // await reloadPage();
  }

  async function onDeleteProduct(DeleteProduct) {
    // console.log("On Delete product");
    // await dbcart.removeIdea(DeleteProduct);
    // await reloadPage();
  }

  return (
    <div>
      <div className="page">
        <div className="page-left">
          <ProductList
            products={products}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            pm={pm}
          ></ProductList>
        </div>
        <div className="page-right">
          <ShoppingCart
            productsInCart={onAddProduct}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            pm={pm}
          ></ShoppingCart>
        </div>
      </div>
      <div>
        <div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={0}
            onPageChange={0}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
      ;
    </div>
  );
};

Shopping.propTypes = {};

export default Shopping;
