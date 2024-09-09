import mongoose, { Document, Schema, Model, model } from "mongoose";
import { category } from "./interface/interface.category";

interface Category extends category, Document {}

const categorySchema = new Schema({
  category: { type: String, required: false },
  category_image: { type: String, required: false },
  category_reviews: { type: String, required: false },
  sub_category: { type: String, required: false },
  users: { type: mongoose.Schema.Types.ObjectId, required: false },
  descriptiton: { type: String, required: false },
  isActive: { type: Boolean, required: false, default: true },
});

const categoryModel = model<Category>("categoryData", categorySchema);

export default categoryModel;
