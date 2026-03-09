const Joi = require("joi");

const orderSchema = Joi.object({
    orderId: Joi.string().required(),

    value: Joi.number()
        .positive()
        .required(),

    creationDate: Joi.date()
        .iso()
        .required(),
    
    items: Joi.array()
    .items(
        Joi.object({
            productId: Joi.number().required(),
            quantity: Joi.number().required(),
            price: Joi.number().required()
        })
        )
    .min(1)    
});

module.exports = orderSchema;