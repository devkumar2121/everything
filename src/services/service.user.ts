import { user } from "../model/interface/interface.user";
import userModel from "../model/model.user";

export class userService {
  public async createUser(data: user): Promise<user> {
    try {
      const userData = new userModel(data);
      return await userData.save();
    } catch (error) {
      throw error;
    }
  }

  public async getUser(data: string): Promise<user | any> {
    try {
      let id = data;
      let userData;
      if (id) {
        userData = await userModel.findOne({ _id: id });
      } else {
        userData = await userModel.find({});
      }
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async deleteUser(data: string): Promise<user | any> {
    try {
      let id = data;
      let userData = await userModel.findByIdAndDelete({ _id: id });
      return userData;
    } catch (error) {
      throw error;
    }
  }

  public async updateUser(data: string): Promise<user | any> {
    try {
      // let id = data.id;
      // let updatedData = data.
      // let userData = await userModel.updateOne({_id:id},{$set:{}});
    } catch (error) {
      throw error;
    }
  }
}
