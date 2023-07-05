import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response.js";
import logger from "./util/logger.js";
import HttpStatus from "./util/httpStatus.js";
import alunoRoutes from "./route/aluno.router.js";

dotenv.config();

const port = process.env.PORT || 3005;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/alunos", alunoRoutes);

app.get("/", (req, res) => {
  res.send(
    new Response(
      HttpStatus.OK.code,
      HttpStatus.OK.status,
      "Welcome to my API",
      null
    )
  );
});

app.all("*", (req, res) => {
  res
    .status(HttpStatus.NOT_FOUND.code)
    .send(
      new Response(
        HttpStatus.NOT_FOUND.code,
        HttpStatus.NOT_FOUND.status,
        "Route not found",
        null
      )
    );
});

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
