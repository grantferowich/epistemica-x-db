if (process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config();
}

require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;


/// db: test
// collection: coins
async function deleteDuplicateUSDCoins() {
  const uri = process.env.DATABASE_URL
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('test'); // Replace with your database name
    const collection = database.collection('coins'); // Replace with your collection name

    // Find all USD Coin documents except one
    const duplicateUSDCoins = await collection.find({ name: "USD Coin" }).toArray();
    const usdCoinIds = duplicateUSDCoins.map(doc => doc._id);

    // Delete the duplicate USD Coin documents
    await collection.deleteMany({ name: "USD Coin", _id: { $nin: usdCoinIds.slice(0, 1) } });

    console.log("Duplicate USD Coin records deleted successfully.");
  } catch (error) {
    console.error("An error occurred while deleting duplicate USD Coin records:", error);
  } finally {
    await client.close();
  }
}

deleteDuplicateUSDCoins();
