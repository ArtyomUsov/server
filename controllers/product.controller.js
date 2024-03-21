const productModel = require("../models/product.model");
const jsonProductView = require("../views/json.product.view");

class ProductController {
  getAll(req, res) {
    const productList = productModel.getAll();
    res.json(jsonProductView(200, "success", productList));
  }

  post(req, res) {
    const productName = req.body.name;
    const productList = productModel.create(productName);
    res.json(jsonProductView(200, "success", productList));
  }

  put(req, res) {
    const productName = req.body.name;
    const productData = req.body.price;
    const productList = productModel.updateByName(productName, productData);
    res.json(jsonProductView(200, "success", productList));
  }

  remove(req, res) {
    const productName = req.body.name;
    const productList = productModel.deleteByName(productName);
    res.json(jsonProductView(200, "success", productList));
  }
}

module.exports = new ProductController();
