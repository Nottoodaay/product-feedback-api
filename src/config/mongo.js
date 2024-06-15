import mongoose from "mongoose";

const connection = () => {
  try {
    const connectionUrl = `${process.env.Mongo_Protocol}://${process.env.Mongo_User}:${process.env.Mongo_Password}@${process.env.Mongo_Host}/${process.env.Mongo_Database}`;
    return mongoose.connect(connectionUrl);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connection;
