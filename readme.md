Some dependencies 
0. npm install express ejs express-ejs-layouts mongoose
1. npm install --save-dev dotenv nodemon
2. npm install bcrypt
   - bcrypt will salt the passwords before they are saved
3. npm install body-parser 
4. npm install mongoose-auto-increment


## Dev notes

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