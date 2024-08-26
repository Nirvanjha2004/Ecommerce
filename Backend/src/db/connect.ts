import mongoose from "mongoose";

export default async function dbConnect (){
    await mongoose.connect(String(process.env.MONGO_URI));
    console.log("MongoDB connected Successfully!");
}