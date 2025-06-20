import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

let isConnected = false;

const connectToDatabase = async () => {
  if(isConnected) return;


  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    isConnected = db.connections[0].readyState === 1;
      //  {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    // });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw new Error("Mongo connection failed");
    // process.exit(1); // Exit the app if DB connection fails
  }
};

export default connectToDatabase;
