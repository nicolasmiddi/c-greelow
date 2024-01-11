const PaymentFactoryProvider = require('./PaymentFactoryProvider');

class PaymentFactory {
    static createPaymentMethod(method, region) {
        const regionalFactory = PaymentFactoryProvider.getFactory(region);
        return regionalFactory.createPaymentMethod(method);
    }
}

module.exports = PaymentFactory;
