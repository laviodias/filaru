const QUERY = {
  GET_ALL: 'SELECT * FROM aluno_fila',
  GET_ONE: 'SELECT * FROM aluno_fila WHERE aluno_matricula = ? AND codigo_fila = ?',
  CREATE: 'INSERT INTO aluno_fila (aluno_matricula, codigo_fila, posicao) VALUES (?, ?, ?)',
  DELETE: 'DELETE FROM aluno_fila WHERE aluno_matricula = ? AND codigo_fila = ?',
}

export default QUERY;

