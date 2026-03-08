const express = require("express");
const OrderController = require("../controllers/OrderController");

const router = express.Router();

router.post("/order", OrderController.create);
router.get("/order/list", OrderController.list);
router.get("/order/:orderId", OrderController.get);
router.put("/order/:orderId", OrderController.update);
router.delete("/order/:orderId", OrderController.delete);

module.exports = router;
