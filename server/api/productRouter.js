const router = require("express").Router();
const productController = require('../controllers/productController')
const Product = require("../db/models/productModel");

router.get("/", async (req, res, next) => {
  console.log("Im working");
  const products = await Product.findAll({
    // explicitly select only the id and username fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ["title", "imageUrl", "price"],
  });
  res.json(products);
});

router.get("/:id", productController.getProduct);

module.exports = router;
