// basket data schema
    //   basketDataHM = {
    //   user_IdInt = ,
    //   basketNameStr = ,
    //   indexDateStr = ,
    //   initialBasketValueInt = ,
    //   Asset1..5: {
            // asset1..5NameStr: 
            // asset1...5WeightInt: 
            // asset1...5APIKeyStr: 
            // asset1...5IndexPriceInt: 
            // asset1...5QuantityInt: 
         //  }
    // }
      
    // const basketDataHM = {
    //     user_idInt: "",
    //     basketNameStr: basketName, 
    //     indexDateStr: indexDate, 
    //     initialBasketValueInt: initialBasketValue,
    //     asset1HM: {
    //      asset1NameStr: currency1,
    //      asset1IndexPriceInt: 0,
    //      asset1QuantityInt: currency1Q,
    //      asset1WeightInt: currency1Weight,
    //      asset1APIKeyStr: currency1APIKey,
    //     },
    //     asset2HM: {
    //      asset2NameStr: currency2,
    //      asset2IndexPriceInt: 0,
    //      asset2QuantityInt: currency2Q,
    //      asset2WeightInt: currency2Weight,
    //      asset2APIKeyStr: currency2APIKey,
    //     },
    //     asset3HM: {
    //      asset3NameStr: currency3,
    //      asset3IndexPriceInt: 0,
    //      asset3QuantityInt: currency3Q,
    //      asset3WeightInt: currency3Weight,
    //      asset3APIKeyStr: currency3APIKey,
    //     },
    //     asset4HM: {
    //      asset4NameStr: currency4,
    //      asset4IndexPriceInt: 0,
    //      asset4QuantityInt: currency4Q,
    //      asset4WeightInt: currency4Weight,
    //      asset4APIKeyStr: currency4APIKey,
    //     },
    //     asset5HM: {
    //      asset5NameStr: currency5,
    //      asset5IndexPriceInt: 0,
    //      asset5QuantityInt: currency5Q,
    //      asset5WeightInt: currency5Weight,
    //      asset5APIKeyStr: currency5APIKey,
    //     }
    //  }
const mongoose = require('mongoose');
const basketSchema = new mongoose.Schema({
    basketNameStr: {
        required: true,
        type: String
    }, 
    user_IdStr: {
        required: false,
        type: String
    }, 
    indexDateStr: {
        required: true,
        type: String
    },
    initialBasketValueInt: {
        required: true,
        type: Number
    },
    asset1HM: {
        asset1NameStr: {
            type: String,
            required: true,
        }, 
        asset1IndexPriceInt: {
            type: Number,
            default: 0,
            required: true
        },
        asset1QuantityInt: {
            type: Number,
            required: true
        }, 
        asset1WeightInt: {
            type: Number,
            required: true
        }, 
        asset1APIKeyStr: {
            type: String,
            required: true,
        }
    },
    asset2HM: {
        asset2NameStr: {
            type: String,
            required: true,
            default: ""
        },
        asset2IndexPriceInt: {
            type: Number,
            default: 0,
            required: true
        },
        asset2QuantityInt: {
            type: Number,
            default: 0,
            required: true,
        },
        asset2WeightInt: {
            type: Number,
            required: true,
            default: 0
        },
        asset2APIKeyStr: {
            type: String,
            required: true,
            default: ""
        }
    },
    asset3HM: {
        asset3NameStr: {
            type: String,
            required: true,
            default: ""
        },
        asset3IndexPriceInt: {
            type: Number,
            default: 0,
            required: true
        },
        asset3QuantityInt: {
            type: Number,
            default: 0,
            required: true,
        },
        asset3WeightInt: {
            type: Number,
            required: true,
            default: 0
        },
        asset3APIKeyStr: {
            type: String,
            required: true,
            default: ""
        }
    },
    asset4HM: {
        asset4NameStr: {
            type: String,
            required: true,
            default: ""
        },
        asset4IndexPriceInt: {
            type: Number,
            default: 0,
            required: true
        },
        asset4QuantityInt: {
            type: Number,
            default: 0,
            required: true,
        },
        asset4WeightInt: {
            type: Number,
            required: true,
            default: 0
        },
        asset4APIKeyStr: {
            type: String,
            required: true,
            default: ""
        }
    },
    asset5HM: {
        asset5NameStr: {
            type: String,
            required: true,
            default: ""
        },
        asset5IndexPriceInt: {
            type: Number,
            default: 0,
            required: true
        },
        asset5QuantityInt: {
            type: Number,
            default: 0,
            required: true,
        },
        asset5WeightInt: {
            type: Number,
            required: true,
            default: 0
        },
        asset5APIKeyStr: {
            type: String,
            required: true,
            default: ""
        }
    }
})
 
module.exports = mongoose.model('Basket', basketSchema)