const Order = require("../models/Order");

class OrderService {

    async create(orderData){
        return await Order.create(orderData);
    }

    async findByOrderId(orderId){
        return await Order.findOne({orderId});
    }

    async list(){
        return await Order.find();
    }

    async update(orderId, data){
        return await Order.findOneAndUpdate(
            {orderId},
            data,
            {new: true}
        );
    }

    async delete(orderId){
        return await Order.findOneAndDelete({orderId});
    }
}

module.exports = new OrderService();