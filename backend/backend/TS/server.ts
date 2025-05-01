import express from 'express';
import cors from 'cors';
import path from 'path';
import usuarioRouter from '../routes/usuarios'; // Caminho relativo para as rotas

const app = express();

// Habilita CORS para o frontend Ionic
app.use(cors({ origin: 'http://localhost:8100' }));

app.use(express.json());

// Servir arquivos de imagem da pasta uploads
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Prefixo de API
app.use('/api', usuarioRouter);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
