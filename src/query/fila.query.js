const QUERY = {
  GET_ALL: "SELECT * FROM filas",
  GET_ONE: "SELECT * FROM filas WHERE codigo = ?",
  CREATE:
    "INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (?, ?, ?, ?)",
  DELETE: "DELETE FROM filas WHERE codigo = ?",
  UPDATE_VAGAS_RESTANTES: `UPDATE filas SET vagas_restantes = vagas_restantes - 1 WHERE codigo = ?;`,
  UPDATE_POSICAO_ATUAL: `UPDATE filas SET posicao_atual = posicao_atual + 1 WHERE codigo = ?;`,
  GET_LAST_POSITION: `SELECT MAX(posicao_atual) FROM filas;`,
};

export default QUERY;
