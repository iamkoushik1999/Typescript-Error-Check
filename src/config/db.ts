import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const { MONGODB_URL } = process.env;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URL as string);
    console.log(`Mongodb Connected with :-> ${conn.connection.host}`);
  } catch (error) {
    console.log('Mongodb Error');
    process.exit(1);
  }
};

export default connectDB;
