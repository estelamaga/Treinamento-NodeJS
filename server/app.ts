import * as express from "express";
class App {
  private app: express.Application;
  constructor() {
    this.app = express();
    this.route();
  }
  route() {
    this.app.route("/").get();
  }
}
