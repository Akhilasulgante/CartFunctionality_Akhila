import { React, useState } from "react";
import Product from "./Product.js";
import Pagination from "./Pagination.js";

const ProductList = ({
  products,
  addProduct,
  cartProducts,
  setCartProducts,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const ProductsPerPage = 3;
  const pagesVisited = pageNumber * ProductsPerPage;
  const pageCount = Math.ceil(products.length / ProductsPerPage);
  const paginate = (num) => setCurrentPage(num);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const indexOfLastProduct = currentPage * ProductsPerPage;
  const indexOfFirstProducts = indexOfLastProduct - ProductsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProducts,
    indexOfLastProduct
  );

  return (
    <div>
      <h2>Products</h2>
      <div>
        {currentProducts.map((p, i) => (
          <Product
            key={"product" + i}
            product={p}
            addProduct={addProduct}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
          ></Product>
        ))}
        <div>
          <div>
            <Pagination
              productPerPage={ProductsPerPage}
              totalProducts={products}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
