const express = require("express");
const OrderController = require("../controllers/OrderController");
const validate = require("../middlewares/validationMiddleware");
const orderSchema = require("../validators/orderValidator");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/order",authMiddleware,validate(orderSchema), OrderController.create);
router.get("/order/list",authMiddleware,OrderController.list);
router.get("/order/:orderId",authMiddleware, OrderController.get);
router.put("/order/:orderId",authMiddleware ,OrderController.update);
router.delete("/order/:orderId",authMiddleware, OrderController.delete);

module.exports = router;
