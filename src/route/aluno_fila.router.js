import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
} from "../controller/aluno_fila.controller.js";

const alunoFilaRoutes = express.Router();

alunoFilaRoutes.route("/").get(findAll).post(create);
alunoFilaRoutes.route("/:id").get(findOne).delete(remove);

export default alunoFilaRoutes;
