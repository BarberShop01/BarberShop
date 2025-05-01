import express from 'express';
import multer from 'multer';
import path from 'path';
import { cadastroUsuario, loginUsuario, buscarUsuarioPorEmail } from '../services/userService';

// Configuração do armazenamento de imagens com multer
const storage = multer.diskStorage({
  destination: 'uploads/', // Diretório para salvar as imagens
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}${path.extname(file.originalname)}`; // Nome único para a imagem
    cb(null, uniqueName); // Gerando nome único para a imagem
  },
});

const upload = multer({ storage }); // Criando o middleware do multer

const router = express.Router();

// Prefixo da rota está em /api, então usamos /cadastrar aqui
router.post('/cadastrar', upload.single('imagem'), cadastroUsuario); // Cadastro de usuário com imagem
router.post('/login', loginUsuario); // Login do usuário
router.get('/usuario', buscarUsuarioPorEmail); // Buscar usuário por e-mail

export default router;
