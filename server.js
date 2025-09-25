const express = require('express')
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://gabrielsilveira2505_db_user:54123@cluster0.8o5q2jl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const Produto = require("./models/Produto");

app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true,})

.then(() => console.log(" Conectado ao MongoDB!"))
.catch(err => {console.error("Erro ao conectar!", err);
    process.exit(1);
})

app.get("/produtos", async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (err) {
        res.status(500).json({ error: "Erro na busca de produtos"});
    }
});

app.post("/produtos", async (req, res) => {
    try {
        const novo = new Produto(req.body);
        await novo.validate();
        await novo.save();
        res.status(201).json(novo);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json({ error: "Dados inválidos", details: err.erros});
        } else {
            res.status(500).json({ error: "Erro interno do servidor"});
        }
    }
});

module.exports = app;

app.get('/', (req, res) => {
    res.send('Bem Vindo a API exemplo!')
})

//app.get('/produtos', (req, res) => {
//    res.json(produtos)
//})

app.get('/about', (req, res) => {
    res.send('Esta API é para o programa de estágio Alliance3')
})

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`)
})