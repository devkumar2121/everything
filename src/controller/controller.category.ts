import { categoryService } from "../services/service.category";
import { Response, Request, NextFunction } from "express";

export default class categoryController {
  private categoryService: categoryService;

  constructor() {
    this.categoryService = new categoryService();
  }

  public createCategory = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const catgegoryData = await this.categoryService.createCategory(req.body);
      return res.status(201).send({
        message: "Created Sucessfully..",
        status: true,
        data: catgegoryData,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Server Error", status: false, data: error });
    }
  };

  public getCategory = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const catgegoryData = await this.categoryService.getCategory(
        req.params.id
      );
      if (catgegoryData) {
        return res.status(200).send({
          message: "Get Sucessfully..",
          status: true,
          data: catgegoryData,
        });
      } else {
        return res.status(404).send({
          message: "Data not found.",
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

  public deleteCategory = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const catgegoryData = await this.categoryService.deleteCategory(
        req.params.id
      );
      return res.status(200).send({
        message: "Delete Sucessfully..",
        status: true,
        data: catgegoryData,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Server Error", status: false, data: error });
    }
  };
}
