const PayPal = require('../models/payments/PayPal');
const Stripe = require('../models/payments/Stripe');
const Cash = require('../models/payments/Cash');

const paymentMethods = {
    'PayPal': PayPal,
    'Stripe': Stripe,
    'Cash': Cash
};

class PaymentMethodFactory {

    static createPaymentMethod(method) {
        const PaymentClass = paymentMethods[method];

        if (!PaymentClass) {
            throw new Error(`Método de pago desconocido: ${method}`);
        }

        return new Paypal();
    }
}

module.exports = PaymentMethodFactory;
