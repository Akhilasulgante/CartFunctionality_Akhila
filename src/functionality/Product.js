import { React, useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { addProductToDb } from "../DataStore/CartDB";

const Product = ({ product, addProduct, cartProducts, setCartProducts }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const ProductsPerPage = 3;
  const pagesVisited = pageNumber * ProductsPerPage;

  const pageCount = Math.ceil(product.length / ProductsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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

              await addProductToDb(product, "cart");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* <div>
        <div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div> */}
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default Product;
