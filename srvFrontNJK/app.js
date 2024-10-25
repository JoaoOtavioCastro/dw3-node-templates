const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

const salasdeaula = [
  {
    "salasdeaulaid": 1,
    "descricao": "Sala de Aula A",
    "localizacao": "Prédio 1, Andar 2",
    "capacidade": 30,
    "removido": false
  },
  {
    "salasdeaulaid": 2,
    "descricao": "Sala de Aula B",
    "localizacao": "Prédio 2, Andar 1",
    "capacidade": 25,
    "removido": false
  },
  {
    "salasdeaulaid": 3,
    "descricao": "Sala de Aula C",
    "localizacao": "Prédio 3, Andar 3",
    "capacidade": 50,
    "removido": true
  }
];

app.get('/api/salasdeaula', (req, res) => {
  res.json(salasdeaula);
});

app.get('/', (req, res) => {
  res.render('index.njk');
});
app.get('/salasdeaula', (req, res) => {
  res.render('manutSalaDeAula.njk', { salas : salasdeaula });
});

app.listen(2600, () => console.log('Servidor Nunjucks rodando na porta 2600'));

