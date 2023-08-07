const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
const db = require("./models/bundle_model");

app.use("/public", express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.sequelize.sync({ force: false });

// Import router otentikasi
const authRouter = require('./routes/auth');

app.use("/auth", authRouter); // Gunakan router otentikasi di path '/auth'

const productRouter = require("./routes/produk");
app.use("/produk", productRouter);

const kategoriRouter = require("./routes/kategori");
app.use("/kategori", kategoriRouter);

const frontendRouter = require("./routes/frontend");
app.use("/frontend", frontendRouter);

const transaksiRouter = require("./routes/transaksi");
app.use("/transaksi", transaksiRouter);

module.exports = app;
