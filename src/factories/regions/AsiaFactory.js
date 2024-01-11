const Bitcoin = require('../../models/payments/Bitcoin');

const paymentMethods = {
    'Bitcoin': Bitcoin,
};
class AsiaFactory {

    createPaymentMethod(method) {
        const PaymentClass = paymentMethods[method];

        if (!PaymentClass) {
            throw new Error(`Método de pago desconocido: ${method}`);
        }

        return new PaymentClass();
    }
}

module.exports = AsiaFactory;
