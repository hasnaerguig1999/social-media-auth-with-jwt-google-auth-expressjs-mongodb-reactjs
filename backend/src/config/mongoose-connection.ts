import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Failed to connect to MongoDB:', error);
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err : Error) => console.log(`Connection error ${err}`));
  // dbConnection.once("open", () => console.log("Connected to DB!"));
};
