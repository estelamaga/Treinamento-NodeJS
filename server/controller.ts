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

  select(req, res) {
    this.selectCrush()
      .then(crush => res.status(200).json({ result: crush }))
      .catch(err => console.log(err));
  }
  selectCrush() {
    return model.find({});
  }

  selectOne(req, res) {
    const id = { _id: req.params.id };
    this.selectOneCrush(id)
      .then(crush => res.status(200).json({ result: crush }))
      .catch(err => console.log(err));
  }
  selectOneCrush(id) {
    return model.find(id);
  }

  delete(req, res) {
    const id = { _id: req.params.id };

    this.deleteCrush(id)
      .then(crush => res.status(200).json({ result: crush }))
      .catch(err => console.log(err));
  }
  deleteCrush(id) {
    return model.deleteOne(id);
  }

  update(req, res) {
    const id = { _id: req.params.id };
    const dados = req.body;

    this.updateCrush(id, dados)
      .then(crush => res.status(200).json({ result: crush }))
      .catch(err => console.log(err));
  }
  updateCrush(id, dados) {
    return model.findOneAndUpdate(id, dados);
  }
}

export default controller;
