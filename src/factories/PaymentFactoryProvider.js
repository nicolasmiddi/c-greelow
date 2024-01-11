const LatinAmericaFactory = require('./regions/LatinAmericaFactory');
const AsiaFactory = require('./regions/AsiaFactory');
const EuropaFactory = require('./regions/EuropaFactory');

const regions = {
    'LatinAmerica': LatinAmericaFactory,
    'Asia': AsiaFactory,
    'Europa': EuropaFactory,
};
class PaymentFactoryProvider {
    
    static getFactory(region) {
        const RegionClass = regions[region];

        if (!RegionClass) {
            throw new Error(`Región desconocida: ${region}`);
        }

        return new RegionClass();

    }
}

module.exports = PaymentFactoryProvider;
