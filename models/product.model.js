const productList = [
  { id: "5qxNI2", name: "мешок песка" },
  { id: "luXCmJ", name: "деревянный брус" },
  {
    id: "eKWY5p",
    name: "ведро",
  },
];

class Product {
  constructor(params) {}

  getAll() {
    return productList;
  }

  getByName(name) {
    return productList.find((product) => product.name === name);
  }

  create(name) {
    const id = this.#generateRandomId();
    const newProduct = { id, name };
    productList.push(newProduct);
    return productList;
  }

  deleteByName(name) {
    const foundIndex = this.#findIndexByName(name);
    productList.splice(foundIndex, 1);
    return productList;
  }

  updateByName(name, price) {
    const foundIndex = this.#findIndexByName(name);
    if (foundIndex !== -1) {
      productList[foundIndex] = { ...productList[foundIndex], price: price };
    }
    return productList;
  }

  #findIndexByName(name) {
    return productList.findIndex((product) => product.name === name);
  }

  #generateRandomId() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < 6; i++) {
      randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
  }
}

module.exports = new Product();
