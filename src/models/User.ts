import mongoose from "mongoose";
import z, { TypeOf } from "zod";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
  username: String,
});

userSchema.set('toJSON', { virtuals: true });
const user = mongoose.model("User", userSchema);

export default user;

export const userUpdate = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  username: z.string().min(2).regex(/^[a-zA-Z0-9]+$/),
}); 
