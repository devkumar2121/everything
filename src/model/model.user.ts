import mongoose, { Document, Schema, Model, model } from "mongoose";
import { user } from "./interface/interface.user";

interface User extends user, Document {}

const userSchema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: Number, required: false },
  password: { type: String, required: false },
  confirmPassword: { type: String, required: false },
  isActive: { type: Boolean, required: false, default: true },
  role: { type: String, required: false },
  isServiceTaker: { type: Boolean, required: false },
  isServiceGiver: { type: Boolean, required: false },
  rating: { type: Number, required: false },
  otp: { type: Number, required: false },
  location: { type: String, required: false },
  charge: { type: Number, required: false },
});

const userModel = model<User>("userData", userSchema);

export default userModel;
