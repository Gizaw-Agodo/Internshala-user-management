import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
  }
};

export default connect
