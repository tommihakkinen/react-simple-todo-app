const express = require("express");
const crud = require("../database/crudrepository.js");
const schemas = require("../database/schemas.js");
const Validator = require("jsonschema").Validator;

const validator = new Validator();
const tasks = express.Router();

tasks.get("/", async (req, res) => {
  const result = await crud.findAll(req.query);
  res.send(result);
});

tasks.post("/", async (req, res) => {
  const validation = validator.validate(req.body, schemas.taskSchema);
  if (validation.errors.length > 0) {
    console.log(validation.errors);
  } else {
    const result = await crud.save(req.body);
    res.send(`New task saved with an id of ${result.insertId}`);
  }
});

tasks.delete("/:taskId([0-9]+)", async (req, res) => {
  const validation = validator.validate(
    Number(req.params.taskId),
    schemas.idSchema
  );
  if (validation.errors.length > 0) {
    console.log(validation.errors);
  } else {
    const result = await crud.deleteById(Number(req.params.taskId));
    if (result.affectedRows > 0) {
      res.send(`Deleted a task with an id of ${req.params.taskId}.`);
    } else {
      res.status(404).send("Error 404: Id not found.");
    }
  }
});

module.exports = tasks;
