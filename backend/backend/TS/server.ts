import express from 'express';
import cors from 'cors';
import path from 'path';
import usuarioRouter from '../routes/usuarios'; // Caminho relativo para as rotas

const app = express();

// Habilita CORS para o frontend Ionic
app.use(cors({ origin: 'http://localhost:8100' }));

app.use(express.json());

// Servir arquivos de imagem da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Prefixo de API — coloque ANTES do app.listen!
app.use('/api', usuarioRouter);

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
