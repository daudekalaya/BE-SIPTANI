const express = require("express");

const router = express.Router();
const kategori = require("../controllers/kategori_controller");
const validation = require('../validation/kategori/kategori_validation')

router.get("/", kategori.findAll);
router.get("/:id", kategori.findOne);
router.post("/", validation.createCategory, kategori.create);
router.put("/:id",validation.createCategory, kategori.update);
router.delete("/:id", kategori.delete)

module.exports = router;
