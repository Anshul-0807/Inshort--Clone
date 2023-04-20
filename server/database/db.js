import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb://anshulblog:charlieap@ac-0yy82dc-shard-00-00.z10hvu3.mongodb.net:27017,ac-0yy82dc-shard-00-01.z10hvu3.mongodb.net:27017,ac-0yy82dc-shard-00-02.z10hvu3.mongodb.net:27017/?ssl=true&replicaSet=atlas-qngscj-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully")
  } catch (error) {
    console.log("Error while connecting the database", error);
  }
};

export default Connection;