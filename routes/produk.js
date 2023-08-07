const express = require("express");

const router = express.Router();
const produk = require("../controllers/produk_controller");
const handleUpload = require("../libs/handleUpload");
const Validation = require('../validation/produk/produk_validation')

router.get("/", produk.findAll);
router.get("/:id", produk.findOne);
router.post("/", handleUpload.single("image"), Validation.createProduk, produk.create);
router.put("/:id", handleUpload.single("image"), Validation.createProduk, produk.update);
router.delete("/:id", /*handleUpload.single("image"),*/ produk.delete);

module.exports = router;
