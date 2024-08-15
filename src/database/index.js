import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://admin:pr1234@cluster0.eahtgw6.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;

//mongodb+srv://admin:pr1234@cluster0.eahtgw6.mongodb.net/cluster0?retryWrites=true&w=majority