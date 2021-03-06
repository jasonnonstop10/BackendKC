require("dotenv").config();
const express = require("express");
const userRoute = require("./src/routes/auth");
const weatherRoute = require("./src/routes/weather");
const kasetplanRoute = require("./src/routes/kasetplan");
const kasetpriceRoute = require("./src/routes/kasetprice");
const productRoute = require("./src/routes/product");
const watchlistRoute = require("./src/routes/watchlist");
const rainRoute = require("./src/routes/rain");
const plantRoute = require("./src/routes/plant");
const kasetPriceNewRoute = require("./src/routes/kaset-price-new");
const portfolioRoute = require("./src/routes/portfolio");
const portlogsRoute = require("./src/routes/port-log");
const regionsRoute = require("./src/routes/region");
const connectToDatabase = require("./db.js");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
const connectMongo = async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    console.log(err);
  }
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(connectMongo);
app.get("/", (req, res) => {
  res.send("Hello Test! 2");
});
app.use(userRoute);
app.use(weatherRoute);
app.use(kasetplanRoute);
app.use(kasetpriceRoute);
app.use(productRoute);
app.use(watchlistRoute);
app.use(rainRoute);
app.use(plantRoute);
app.use(kasetPriceNewRoute);
app.use(portfolioRoute);
app.use(portlogsRoute);
app.use(regionsRoute);
app.use((err, req, res, next) => {
  console.log("ERROR: ", err);
  res.status(err.status || 500).json({
    message: "ERROR SYSTEM",
    error: err.message,
    status: err.status,
    data: err.data,
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
