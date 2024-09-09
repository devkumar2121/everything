import { Response, Request, NextFunction } from "express";
import { userService } from "../services/service.user";

export default class userController {
  private userService: userService;

  constructor() {
    this.userService = new userService();
  }

  public createUser = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const userData = await this.userService.createUser(req.body);
      return res.status(201).send({
        message: "Created Sucessfully..",
        status: true,
        data: userData,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Server Error", status: false, data: error });
    }
  };

  public getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const userData = await this.userService.getUser(req.params.id);
      if (userData) {
        return res.status(200).send({
          message: "Get Sucessfully..",
          status: true,
          data: userData,
        });
      } else {
        return res.status(404).send({
          message: "Data not found",
          status: false,
          data: [],
        });
      }
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Server Error", status: false, data: error });
    }
  };

  public deleteUser = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const userData = await this.userService.deleteUser(req.params.id);
      return res.status(200).send({
        message: "Delete Sucessfully..",
        status: true,
        data: userData,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Server Error", status: false, data: error });
    }
  };
}
