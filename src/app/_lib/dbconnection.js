import mongoose from "mongoose";

export async function dbConnection() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(`mongodb+srv://mayar:${process.env.MONGO_SECRET}@cluster0.9nmsoh5.mongodb.net/todo`);
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.log(" Connection error:", error);
  }
}
