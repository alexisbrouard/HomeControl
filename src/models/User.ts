import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
  username: String,
});

const user = mongoose.model("User", userSchema);

export default user;
