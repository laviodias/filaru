const QUERY = {
  GET_ALL: 'SELECT * FROM filas',
  GET_ONE: 'SELECT * FROM filas WHERE codigo = ?',
  CREATE: 'INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (?, ?, ?, ?)',
  DELETE: 'DELETE FROM filas WHERE codigo = ?',
}

export default QUERY;
