const MercadoPago = require('../../models/payments/MercadoPago');
const PayPal = require('../../models/payments/PayPal');
const CreditCard = require('../../models/payments/CreditCard');

const paymentMethods = {
    'MercadoPago': MercadoPago,
    'PayPal': PayPal,
    'CreditCard': CreditCard,
};

class LatinAmericaFactory {

    createPaymentMethod(method) {
        const PaymentClass = paymentMethods[method];

        if (!PaymentClass) {
            throw new Error(`Método de pago desconocido: ${method}`);
        }

        return new PaymentClass();
    }
}

module.exports = LatinAmericaFactory;
