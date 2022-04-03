import minimongo from "minimongo";

// export default function CartDB(dbName = "Shopping_cart") {
//   const IndexedDb = minimongo.IndexedDb;

//   const dbcart = {};

//   dbcart.getProduct = function (query = {}) {
//     return new Promise((resolve, reject) => {
//       const db = new IndexedDb(
//         { namespace: dbName },
//         function () {
//           db.addCollection(
//             "cart",
//             function () {
//               db.ideas.find(query).fetch(resolve, reject);
//             },
//             reject
//           );
//         },
//         reject
//       );
//     });
//   };

//   dbcart.removeProduct = function (id) {
//     return new Promise((resolve, reject) => {
//       const db = new IndexedDb(
//         { namespace: dbName },
//         function () {
//           db.addCollection(
//             "cart",
//             function () {
//               db.ideas.remove(id, resolve, reject);
//             },
//             reject
//           );
//         },
//         reject
//       );
//     });
//   };

//   dbcart.addProduct = function (newProduct) {
//     return new Promise((resolve, reject) => {
//       const db = new IndexedDb(
//         { namespace: dbName },
//         function () {
//           db.addCollection(
//             "cart",
//             function () {
//               db.ideas.upsert(newProduct, resolve, reject);
//             },
//             reject
//           );
//         },
//         reject
//       );
//     });
//   };
//   return dbcart;
// }

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
