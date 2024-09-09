import { Router } from "express";
import resController from "../controller/res.controller";
import userController from "../controller/controller.user";
import categoryController from "../controller/controller.category";

export class Routes {
  public router: Router;
  private resCon: resController;
  private user: userController;
  private category: categoryController;

  constructor() {
    this.router = Router();
    this.resCon = new resController();
    this.user = new userController();
    this.category = new categoryController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/create/res", this.resCon.fakeRes);
    this.router.get("/get/res", this.resCon.getRes);
    this.router.post("/create/user", this.user.createUser);
    this.router.get("/get/user/:id?", this.user.getUser);
    this.router.delete("/delete/user/:id", this.user.deleteUser);
    this.router.post("/create/category", this.category.createCategory);
    this.router.get("/get/category/:id?", this.category.getCategory);
    this.router.delete("/delete/category/:id", this.category.deleteCategory);
  }
}
