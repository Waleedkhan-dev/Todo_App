import mongoose from "mongoose"


export const dbconnect = async () => {
 try {
  const connect = await mongoose.connect(process.env.MONGODB_URL)
  console.log("Mongo DB connected Successfully");

 } catch (error) {
  console.log("MongoDB not connected Please try again");
 }
}