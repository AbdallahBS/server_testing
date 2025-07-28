const mongoose = require('mongoose');

const dbURI =  'mongodb+srv://Abdallah:Azmidou142003@universe.1p0wuz9.mongodb.net/universe?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
