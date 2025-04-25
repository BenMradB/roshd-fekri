"use server";
import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) return console.error("No URL provided");

  if (isConnected) return console.info("Already Connected");

  const URI = process.env.MONGODB_URL.replace(
    "<db_password>",
    process.env.MONGODB_PWD!
  );

  try {
    await mongoose.connect(URI, {
      dbName: process.env.DATABASE_NAME!,
    });
    isConnected = true;
    console.info("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
