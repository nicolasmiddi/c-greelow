const Sepa = require('../../models/payments/Sepa');
const PayPal = require('../../models/payments/PayPal');
const Stripe = require('../../models/payments/Stripe');

const paymentMethods = {
    'Sepa': Sepa,
    'PayPal': PayPal,
    'Stripe': Stripe
};

class EuropaFactory {

    createPaymentMethod(method) {
        const PaymentClass = paymentMethods[method];

        if (!PaymentClass) {
            throw new Error(`Método de pago desconocido: ${method}`);
        }

        return new PaymentClass();
    }
}

module.exports = EuropaFactory;
