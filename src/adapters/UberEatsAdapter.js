const IMenu = require("../interfaces/IMenu.js");

class UberEatsAdapter extends IMenu { 
    constructor(menuService) { 
        super(); 
        this.menuService = menuService; 
    } 

    translateItems(items) {
        // Implementación de la traducción específica para UberEats aquí
        return items.map(item => {
            return {
                name: item.name + " (UberEats Special)",
                price_tax_free: `$${item.price.toFixed(2) / 1.21}`,
                tax: 0.21,
                description: `The best ${item.name}! Order now on UberEats!`
            };
        });
    }

    getItems() { 
        const items = this.menuService.getItems(); 
        // Traduce los ítems del menú al formato específico de UberEats 
        return this.translateItems(items); 
    } 
} 

module.exports = UberEatsAdapter;
