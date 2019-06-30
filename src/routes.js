const express = require("express");
const routes = express.Router();

routes.get(
  "/orders",
  expressAsyncHandler(controllers.PurchaseController.index)
);
