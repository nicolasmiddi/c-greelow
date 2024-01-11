const IMenu = require("../interfaces/IMenu.js");


class PedidosYaAdapter extends IMenu { 
    constructor(restaurantMenu) { 
      super(); 
      this.restaurantMenu = restaurantMenu; 
    } 
  
    translateItems(items) {
        // Implementación de la traducción específica para UberEats aquí
        return items.map(item => {
            return {
                title: item.name.toUpperCase(),
                cost: item.price,
            };
        });
    }

    getItems() { 
      const items = this.restaurantMenu.getItems(); 
  // Traduce los ítems del menú al formato específico de PedidosYa 
      return this.translateItems(items); 
    } 
  } 
  


 module.exports = PedidosYaAdapter;
