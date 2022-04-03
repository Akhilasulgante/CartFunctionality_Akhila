import { React, useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

const Product = ({ product, addProduct }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const ProductsPerPage = 3;
  const pagesVisited = pageNumber * ProductsPerPage;

  //   const displayProducts = product
  //     .slice(pagesVisited, pagesVisited + ProductsPerPage)
  //     .map((user) => {
  //       return (
  //         <div>
  //           <output>{product.name}</output>
  //           <output> (${product.price})</output>

  //           <button onClick={() => addProduct(product)}>Add to Cart</button>
  //         </div>
  //       );
  //     });

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

          <button onClick={() => addProduct(product)}>Add to Cart</button>
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
