const mapToOrderEntity = (request) => {
    return {
        orderId: request.orderId,
        value: request.value,
        creationDate: request.creationDate,
        items: request.items.map(item => ({
            productId: Number(item.productId),
            quantity: item.quantity,
            price: item.price
        }))
    };
};

module.exports = {mapToOrderEntity};