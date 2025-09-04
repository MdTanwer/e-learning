import mongoose from "mongoose";
require("dotenv").config();

const dbUrl: string =
  process.env.DB_URL ||
  "mongodb+srv://tanwirmd922_db_user:4WY3QVQaFoTXmGnr@cluster1.934lnid.mongodb.net/elearning?retryWrites=true&w=majority&appName=cluster1";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl).then((data: any) => {
      console.log(`Database connected with ${data.connection.host}`);
    });
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
