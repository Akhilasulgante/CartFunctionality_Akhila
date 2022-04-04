import minimongo from "minimongo";

const getProduct = (dbName = "Shopping_cart", productCbk) => {
  return new Promise((resolve, reject) => {
    const db = new minimongo.IndexedDb(
      { namespace: dbName },
      function () {
        db.addCollection(
          "cart",
          function () {
            db.cart.find({}).fetch(function (products, err) {
              productCbk(products);
            });
          },
          reject
        );
      },
      reject
    );
  });
};

const removeProduct = (productToDelete, dbName = "Shopping_cart") => {
  return new Promise((resolve, reject) => {
    const db = new minimongo.IndexedDb(
      { namespace: dbName },
      function () {
        db.addCollection(
          "cart",
          function () {
            db.cart.remove(productToDelete, resolve, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

const addProductToDb = (newProduct, dbName = "Shopping_cart") => {
  return new Promise((resolve, reject) => {
    const db = new minimongo.IndexedDb(
      { namespace: dbName },
      function () {
        console.log("db is", db);
        db.addCollection(
          "cart",
          function () {
            db.cart.upsert(newProduct, resolve, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

export { addProductToDb, removeProduct, getProduct };
