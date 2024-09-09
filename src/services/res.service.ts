import { res } from "../model/interface/res.interface";
import resModel from "../model/res.model";

export class ResService {
  public async fakeRes(data: res): Promise<res> {
    try {
      const newData = new resModel(data);
      return await newData.save();
    } catch (error) {
      throw error;
    }
  }

  public async getRes(): Promise<res | any> {
    try {
      const resData = await resModel.find({});
      return resData;
    } catch (error) {
      throw error;
    }
  }
}
