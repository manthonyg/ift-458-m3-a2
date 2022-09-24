const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

var corsOptions = { origin: "http://localhost:8080" };
app.use(cors(corsOptions));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const customerRouter = require("./routes/customerRoutes");
app.use("/api/v1/customers", customerRouter);

module.exports = app;
