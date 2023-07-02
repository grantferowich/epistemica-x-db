const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({
    basketNameStr: {
        required: true,
        type: String
    }, 
    user_IDStr: {
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
    presentBasketValueInt: {
        required: true,
        type: Number,
        default: 0
    },
    percentReturnInt: {
        required: true,
        type: Number,
        default: 0
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
        asset1PresentPriceInt: {
            type: Number,
            required: true
        },
        asset1InitialPositionValueIntInt: {
            type: Number,
            required: true
        },
        asset1PresentPositionValueInt: {
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
        },
        asset1LoSStr: {
            type: String,
            required: true,
            default: "long"
        }
    },
    asset2HM: {
        asset2NameStr: {
            type: String,
            required: false,
            default: ""
        },
        asset2IndexPriceInt: {
            type: Number,
            default: 0,
            required: false
        },
        asset2QuantityInt: {
            type: Number,
            default: 0,
            required: false,
        },
        asset2PresentPriceInt: {
            type: Number,
            required: false
        },
        asset2InitialPositionValueIntInt: {
            type: Number,
            required: false
        },
        asset2PresentPositionValueInt: {
            type: Number,
            required: false
        },
        asset2WeightInt: {
            type: Number,
            required: false,
            default: 0
        },
        asset2APIKeyStr: {
            type: String,
            required: false,
            default: ""
        },
        asset2LoSStr: {
            type: String,
            required: false,
            default: "long"
        }
    },
    asset3HM: {
        asset3NameStr: {
            type: String,
            required: false,
            default: ""
        },
        asset3IndexPriceInt: {
            type: Number,
            default: 0,
            required: false
        },
        asset3QuantityInt: {
            type: Number,
            default: 0,
            required: false,
        },
        asset3PresentPriceInt: {
            type: Number,
            required: false
        },
        asset3InitialPositionValueIntInt: {
            type: Number,
            required: false
        },
        asset3PresentPositionValueInt: {
            type: Number,
            required: false
        },
        asset3WeightInt: {
            type: Number,
            required: false,
            default: 0
        },
        asset3APIKeyStr: {
            type: String,
            required: false,
            default: ""
        },
        asset3LoSStr: {
            type: String,
            required: false,
            default: "long"
        }
    },
    asset4HM: {
        asset4NameStr: {
            type: String,
            required: false,
            default: ""
        },
        asset4IndexPriceInt: {
            type: Number,
            default: 0,
            required: false
        },
        asset4QuantityInt: {
            type: Number,
            default: 0,
            required: false,
        },
        asset4PresentPriceInt: {
            type: Number,
            required: false
        },
        asset4InitialPositionValueIntInt: {
            type: Number,
            required: false
        },
        asset4PresentPositionValueInt: {
            type: Number,
            required: false
        },
        asset4WeightInt: {
            type: Number,
            required: false,
            default: 0
        },
        asset4APIKeyStr: {
            type: String,
            required: false,
            default: ""
        },
        asset4LoSStr: {
            type: String,
            required: false,
            default: "long"
        }
    },
    asset5HM: {
        asset5NameStr: {
            type: String,
            required: false,
            default: ""
        },
        asset5IndexPriceInt: {
            type: Number,
            default: 0,
            required: false
        },
        asset5QuantityInt: {
            type: Number,
            default: 0,
            required: false,
        },        
        asset5PresentPriceInt: {
            type: Number,
            required: false
        },
        asset5InitialPositionValueIntInt: {
            type: Number,
            required: false
        },
        asset5PresentPositionValueInt: {
            type: Number,
            required: false
        },
        asset5WeightInt: {
            type: Number,
            required: false,
            default: 0
        },
        asset5APIKeyStr: {
            type: String,
            required: false,
            default: ""
        },
        asset5LoSStr: {
            type: String,
            required: false,
            default: "long"
        }
    }
})

module.exports = mongoose.model('Basket', basketSchema);