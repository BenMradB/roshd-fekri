"use server";
import mongoose from "mongoose";

export const connectToDatabase = async () => {
  // Validate environment variables
  if (!process.env.MONGODB_URL) {
    console.error(
      "Error: MONGODB_URL is not defined in environment variables."
    );
    return;
  }
  if (!process.env.MONGODB_PWD) {
    console.error(
      "Error: MONGODB_PWD is not defined in environment variables."
    );
    return;
  }
  if (!process.env.DATABASE_NAME) {
    console.error(
      "Error: DATABASE_NAME is not defined in environment variables."
    );
    return;
  }

  if (!mongoose.connection || mongoose.connection.readyState === 1) {
    console.info("MongoDB is already connected.");
    return;
  }

  // Replace placeholder in the URI
  const URI = process.env.MONGODB_URL.replace(
    "<db_password>",
    process.env.MONGODB_PWD
  );

  try {
    // Connect to MongoDB
    await mongoose.connect(URI, {
      dbName: process.env.DATABASE_NAME,
    });
    console.info("MongoDB Connected Successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
