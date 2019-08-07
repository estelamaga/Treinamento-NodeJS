import * as express from "express";
class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.route();
  }
  route() {
    this.app
      .route("/")
      .get((req, res) => res.status(200).json({ results: "hello" }));
  }
}
export default new App();
