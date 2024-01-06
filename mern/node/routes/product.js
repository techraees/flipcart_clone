import express from "express";
const router = express.Router();

// import {
//   requireSignin,
//   adminMiddleware,
//   uploadS3,
// } from "../common-middleware/index.js";
import {
  createProduct,
  getProductsBySlug,
  getProductDetailsById,
  deleteProductById,
  getProducts,
} from "../controllers/product.js";

import multer from "multer";
import shortid from "shortid";
import path from "path";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(path.dirname(__dirname), "uploads"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, shortid.generate() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

router.post(
  "/create",
  // requireSignin,
  // adminMiddleware,
  // uploadS3.array("productPicture"),
  createProduct
);
// router.get("/products/:slug", getProductsBySlug);
// //router.get('/category/getcategory', getCategories);
// router.get("/product/:productId", getProductDetailsById);
// router.delete(
//   "/product/deleteProductById",
//   requireSignin,
//   adminMiddleware,
//   deleteProductById
// );
// router.post(
//   "/product/getProducts",
//   requireSignin,
//   adminMiddleware,
//   getProducts
// );

export default router;
