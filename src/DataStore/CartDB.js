import minimongo from "minimongo";

export default function CartDB(dbName = "cart") {
  const IndexedDb = minimongo.IndexedDb;

  const dbcart = {};

  dbcart.getProduct = function (query = {}) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          db.addCollection(
            "cart",
            function () {
              db.ideas.find(query).fetch(resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  dbcart.removeProduct = function (id) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          db.addCollection(
            "cart",
            function () {
              db.ideas.remove(id, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  dbcart.addProduct = function (newProduct) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          db.addCollection(
            "cart",
            function () {
              db.ideas.upsert(newProduct, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };
  return dbcart;
}
