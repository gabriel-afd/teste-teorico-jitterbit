const OrderService = require("../services/OrderService");
const { mapToOrderEntity } = require("../mappers/OrderMapper");

class OrderController {

    async create(req, res, next) {
        try {

            const orderEntity = mapToOrderEntity(req.body);
            const order =  await OrderService.create(orderEntity);
            res.status(201).json(order);

        } catch (error) {
            next(error)
        }
    }

    async get(req, res, next){
        try {
            const order = await OrderService.findByOrderId(req.params.orderId);

            if (!order){
                return res.status(404).json({message: "Order not found"});
            }

            res.json(order);

        } catch (error) {
            next(error);
        }
    }

    async list(req, res, next){
        try {
            const orders = await OrderService.list();

            if (!orders){
                return res.status(404).json({message: "Orders not found"});
            }

            res.json(orders);

        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next){
        try {
            
            const updated = await OrderService.update(
                req.params.orderId,
                req.body
            );

            if (!updated){
                return res.status(404).json({message: "Order not found"});
            }

            res.status(200).json(updated);

        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next){
        try {

            const deleted = await OrderService.delete(req.params.orderId);

            if (!deleted){
                return res.status(404).json({message: "Order not found"});
            }

            res.status(204).send();

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new OrderController();