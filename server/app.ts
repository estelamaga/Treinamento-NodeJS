import * as express from "express";
import * as bodyparser from "body-parser";

import database from "./db";
import controller from "./controller";

class App {
  public app: express.Application;
  private database: database;
  private controller: controller;

  constructor() {
    this.app = express();
    this.database = new database();
    this.database.createConnection();
    this.controller = new controller();
    this.midleware();
    this.route();
  }

  midleware() {
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));
  }

  route() {
    this.app
      .route("/")
      .get((req, res) => res.status(200).json({ results: "hello" }));

    this.app
      .route("/api/crushs")
      .post((req, res) => this.controller.create(req, res));

    this.app
      .route("/api/crushs")
      .get((req, res) => this.controller.select(req, res));

    this.app
      .route("/api/crushs/:id")
      .get((req, res) => this.controller.selectOne(req, res));

    this.app
      .route("/api/crushs/:id")
      .delete((req, res) => this.controller.delete(req, res));

    this.app
      .route("/api/crushs/:id")
      .put((req, res) => this.controller.update(req, res));
  }
}
export default new App();
