const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn.connection.getClient(); // Return the native MongoDB client
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
