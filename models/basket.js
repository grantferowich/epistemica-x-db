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