const express = require("express");
const bodyParser = require("body-parser");
const PaymentFactoryProvider = require("./src/factories/PaymentFactoryProvider");
const PaymentMethodFactory = require("./src/factories/PaymentMethodFactory");
const menuService = require("./src/services/menuService");
const paymentService = require("./src/services/paymentService");
const EmailService = require("./src/services/emailService");
const PedidosYaAdapter = require("./src/adapters/PedidosYaAdapter");
const UberEatsAdapter = require("./src/adapters/UberEatsAdapter");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente.");
});

app.post("/payment-old", (req, res) => {
  const { amount, method } = req.body;

  try {
    const paymentMethod = PaymentMethodFactory.createPaymentMethod(method);
    paymentMethod.PaymentProcess(amount);

    res.json({
      message: `Pago procesado con ${method} por un monto de ${amount}`,
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
});
app.post("/payment-by-region", (req, res) => {
  const { amount, method, region } = req.body;

  try {
    const factory = PaymentFactoryProvider.getFactory(region);
    const paymentMethod = factory.createPaymentMethod(method);
    paymentMethod.PaymentProcess(amount);

    res.json({
      message: `Pago procesado con ${method} por un monto de ${amount}`,
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
});



// adapters

app.get("/menu", (req, res) => {
  const menu = new menuService();
  res.json(menu.getItems());
});
app.get("/menu/pedidos-ya", (req, res) => {
  const menu = new menuService();
  const pedidosYa = new PedidosYaAdapter(menu);
  res.json(pedidosYa.getItems());
});
app.get("/menu/uber-eats", (req, res) => {
  const menu = new menuService();
  const uberEats = new UberEatsAdapter(menu);
  res.json(uberEats.getItems());
});


app.post("/menu2", (req, res) => {
  const { provider } = req.body;
  const menu = new menuService();
  let menuProvider;
  switch (provider) {
    case "pedidos-ya":
      menuProvider = new PedidosYaAdapter(menu);
      break;
    case "uber-eats":
      menuProvider = new UberEatsAdapter(menu);
      break;
    default:
      menuProvider = menu;
      break;
  }
  res.json(menuProvider.getItems()); 
});



app.post("/send-mail", (req, res) => {
  const { email, message } = req.body;
  const emailService = new EmailService();
  

  res.send(emailService.sendEmail(email, message));
});

app.post("/payment", (req, res) => {
  const { method, amount } = req.body;
  const payment = new paymentService();
  payment.payment(method, amount);
  res.json(payment.payment(method, amount));
});




const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Running in ${PORT}`);
});
