import mysql from 'mysql2';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

// Criar conexão com o MySQL
export const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});
