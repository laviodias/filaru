const QUERY = {
  GET_ALL: 'SELECT * FROM aluno_fila',
  GET_ONE: 'SELECT * FROM aluno_fila WHERE aluno_matricula = ? AND codigo_fila = ?',
  CREATE: 'INSERT INTO aluno_fila (aluno_matricula, codigo_fila, posicao) VALUES (?, ?, ?)',
  DELETE: 'DELETE FROM aluno_fila WHERE aluno_matricula = ? AND codigo_fila = ?',
  GET_LAST_POSITION: 'SELECT posicao FROM aluno_fila WHERE codigo_fila = ? ORDER BY posicao DESC LIMIT 1',
}

export default QUERY;

