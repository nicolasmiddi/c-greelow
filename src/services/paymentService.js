class paymentService {
    payment(method, amount) {
        console.log(`Payment by ${method}: $ ${amount}`);
        return { status: 'success', amount, method };
    }
}

module.exports = paymentService;


