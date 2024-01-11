const IMenu = require("../interfaces/IMenu.js");


class menuService extends IMenu { 
    getItems() { 

        const menu = [
            {
                id: 1,
                name: "Hamburger",
                price: 100,
            },
            {
                id: 2,
                name: "Pizza",
                price: 200,
            },
            {
                id: 3,
                name: "Fries",
                price: 50,
            }
        ]
        const tax = 1.21;
        menu.forEach(item => {
            item.price = item.price * tax;
        });
        return menu;
    } 
 } 


 module.exports = menuService;
