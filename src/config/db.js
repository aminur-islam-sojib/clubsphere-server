import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      console.error("MONGO_URI is missing! Please set it in your .env file.");
      process.exit(1); // stop server
    }

    const conn = await mongoose.connect(uri, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
