const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bem Vindo a API exemplo!')
})

app.get('/about', (req, res) => {
    res.send('Esta API é para o programa de estágio Alliance3')
})

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`)
})