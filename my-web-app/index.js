const express = require('express');
const path = require('path'); // Para lidar com caminhos de arquivo
const app = express();

// Serve os arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Defina a rota principal (opcional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/templates', 'index.html'));
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('App is running on port 3000');
});
