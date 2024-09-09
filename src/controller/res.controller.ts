import { ResService } from "../services/res.service";
import { Response, Request, NextFunction } from "express";

export default class resController {
  private resService: ResService;

  constructor() {
    this.resService = new ResService();
  }

  public fakeRes = async (req: Request, res: Response): Promise<Response> => {
    try {
      const newRes = await this.resService.fakeRes(req.body);
      return res
        .status(201)
        .send({ message: "Created Sucessfully..", status: true, data: newRes });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Server Error", status: false, data: error });
    }
  };

  public getRes = async (req: Request, res: Response): Promise<Response> => {
    try {
      const getRes = await this.resService.getRes();
      return res
        .status(200)
        .send({ message: "Get Sucessfully..", status: true, data: getRes });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Server Error", status: false, data: error });
    }
  };
}
