import model from "./model";

class controller {
  constructor() {}

  create(req, res) {
    const dados = req.body;
    this.createCrush(dados)
      .then(crush => res.status(200).json({ result: crush }))
      .catch(err => console.log(err));
  }

  createCrush(crush) {
    return model.create(crush);
  }
}

export default controller;
