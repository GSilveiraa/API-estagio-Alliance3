const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
    id: Number,
    nome: {type: String, required: true},
    preco: {type: Number, required: true},
    descricao: String
});

module.exports = mongoose.model("Produto", produtoSchema);