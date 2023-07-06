import express from "express";
import {
  findAll,
  findOne,
  create,
  remove,
} from "../controller/fila.controller.js";

const filaRoutes = express.Router();

filaRoutes.route("/").get(findAll).post(create);
filaRoutes.route("/:id").get(findOne).delete(remove);

export default filaRoutes;
