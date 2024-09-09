require("dotenv").config();
import express, { Application } from "express";
import { Routes } from "./routes/routes";

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    const rou = new Routes();
    this.app.use("/api", rou.router);
    this.app.use("/health", (req, res) => {
      res.json("Everything Services Working fine...");
    });
  }
}
