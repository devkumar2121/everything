import { category } from "../model/interface/interface.category";
import categoryModel from "../model/model.category";

export class categoryService {
  public async createCategory(data: category): Promise<category> {
    try {
      const categoryData = new categoryModel(data);
      return await categoryData.save();
    } catch (error) {
      throw error;
    }
  }

  public async getCategory(data: string): Promise<category | any> {
    try {
      let id = data;
      let categoryData;
      if (id) {
        categoryData = await categoryModel.findOne({ _id: id });
        // categoryData = await categoryModel.aggregate([
        //     {
        //         _id:id
        //     }
        // ])
      } else {
        categoryData = await categoryModel.aggregate([
          {
            $lookup: {
              from: "userdatas",
              localField: "users",
              foreignField: "_id",
              as: "users",
            },
          },
        ]);
      }
      return categoryData;
    } catch (error) {
      throw error;
    }
  }

  public async deleteCategory(data: string): Promise<category | any> {
    try {
      let id = data;
      let userData = await categoryModel.findByIdAndDelete({ _id: id });
      return userData;
    } catch (error) {
      throw error;
    }
  }
}
