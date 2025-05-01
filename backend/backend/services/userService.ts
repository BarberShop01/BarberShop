import { connection } from '../database';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

interface UsuarioRequestBody {
  nome: string;
  numero: string;
  cpf: string;
  email: string;
  dataNascimento: string;
  senha: string;
  imagem?: string | null;
}

// ✅ Cadastro de usuário
export function cadastroUsuario(req: Request, res: Response): void {
  const { nome, numero, cpf, email, dataNascimento, senha }: UsuarioRequestBody = req.body;

  // ✅ Gera URL completa da imagem (se existir)
  const imagem = req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : null;

  // ✅ Validação de campos obrigatórios
  if (!nome || !numero || !cpf || !email || !dataNascimento || !senha) {
    res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    return;
  }

  // ✅ Verifica se o e-mail já está cadastrado
  const checkEmailSql = 'SELECT * FROM usuarios WHERE email = ?';
  connection.query(checkEmailSql, [email], (err, results: mysql.RowDataPacket[]) => {
    if (err) {
      console.error('Erro ao verificar e-mail:', err);
      res.status(500).json({ message: 'Erro ao verificar e-mail.' });
      return;
    }

    if (results.length > 0) {
      res.status(400).json({ message: 'Este e-mail já está cadastrado.' });
      return;
    }

    // ✅ Hash da senha
    bcrypt.hash(senha, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Erro ao criptografar a senha:', err);
        res.status(500).json({ message: 'Erro ao criptografar a senha.' });
        return;
      }

      // ✅ Insere o usuário no banco de dados
      const sql = `
        INSERT INTO usuarios (nome, numero, cpf, email, data_nascimento, senha, imagem)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

      connection.query(
        sql,
        [nome, numero, cpf, email, dataNascimento, hashedPassword, imagem],
        (err, result) => {
          if (err) {
            console.error('Erro ao cadastrar usuário:', err);
            res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
            return;
          }

          res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
        }
      );
    });
  });
}

// ✅ Login de usuário
export function loginUsuario(req: Request, res: Response): void {
  const { email, senha } = req.body;

  if (!email || !senha) {
    res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    return;
  }

  const sql = 'SELECT * FROM usuarios WHERE email = ?';

  connection.query(sql, [email], (err, results: mysql.RowDataPacket[]) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      res.status(500).json({ message: 'Erro ao buscar usuário.' });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ message: 'Email ou senha incorretos.' });
      return;
    }

    const user = results[0];

    // Comparar senha
    bcrypt.compare(senha, user.senha, (err, isMatch) => {
      if (err) {
        console.error('Erro ao verificar senha:', err);
        res.status(500).json({ message: 'Erro ao verificar senha.' });
        return;
      }

      if (!isMatch) {
        res.status(401).json({ message: 'Email ou senha incorretos.' });
        return;
      }

      res.status(200).json({
        message: 'Login bem-sucedido',
        usuario: {
          id: user.id,
          nome: user.nome,
          email: user.email,
          imagem: user.imagem,
        },
      });
    });
  });
}

// ✅ Buscar usuário por e-mail
export function buscarUsuarioPorEmail(req: Request, res: Response): void {
  const email = req.query.email;

  if (typeof email !== 'string') {
    res.status(400).json({ message: 'Email inválido ou não fornecido.' });
    return;
  }

  const sql = 'SELECT * FROM usuarios WHERE email = ?';

  connection.query(sql, [email], (err, results: mysql.RowDataPacket[]) => {
    if (err) {
      console.error('Erro ao buscar usuário por e-mail:', err);
      res.status(500).json({ message: 'Erro ao buscar usuário.' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ message: 'Usuário não encontrado.' });
      return;
    }

    res.status(200).json(results[0]);
  });
}
