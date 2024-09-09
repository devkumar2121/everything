import mongoose, { Document, Schema, Model, model } from "mongoose";
import { res } from "./interface/res.interface";

interface resModel extends res, Document {}

const resSchema = new Schema({
  category: { type: String, required: false },
  rating: { type: Number, required: false },
  ratingCount: { type: Number, required: false },
  reachingtime: { type: String, required: false },
  services: { type: Array, required: false },
});

const resModel = model<resModel>("everythingService", resSchema);

export default resModel;
