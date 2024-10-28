const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://guptaharshit0056:%40H2706g2001@cluster0.kn4yyxw.mongodb.net/mern_studio'; // Replace 'yourDatabaseName' with the actual name of your database.

module.exports = async function (callback) {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Helps avoid warnings for connection handling.
    });
    
    console.log("Connected to MongoDB Atlas");

    const foodCollection = mongoose.connection.db.collection("food_items");
    const categoryCollection = mongoose.connection.db.collection("foodCategory");

    const foodItems = await foodCollection.find({}).toArray();
    const foodCategories = await categoryCollection.find({}).toArray();

    callback(null, foodItems, foodCategories);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    callback(error, null, null);
  }
};
