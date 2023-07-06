import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response.js";
import logger from "./util/logger.js";
import HttpStatus from "./util/httpStatus.js";
import alunoRoutes from "./route/aluno.router.js";
import alunoFilaRoutes from "./route/aluno_fila.router.js";
import cardapioPratoRoutes from "./route/cardapio_prato.router.js";
import cardapioRoutes from "./route/cardapio.router.js";
import pratoRoutes from "./route/prato.router.js";
import filaRoutes from "./route/fila.router.js";
import funcionarioRoutes from "./route/funcionario.router.js";
import restauranteRoutes from "./route/restaurante.router.js";
import funcionarioRestauranteRoutes from "./route/funcionario_restaurante.router.js";

dotenv.config();

const port = process.env.PORT || 3005;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/alunos", alunoRoutes);
app.use("/aluno_fila", alunoFilaRoutes);
app.use("/cardapio_prato", cardapioPratoRoutes);
app.use("/cardapio", cardapioRoutes);
app.use("/prato", pratoRoutes);
app.use("/fila", filaRoutes);
app.use("/funcionario", funcionarioRoutes);
app.use("/restaurante", restauranteRoutes);
app.use("/funcionario_restaurante", funcionarioRestauranteRoutes);


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
