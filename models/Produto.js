const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
    id: {type: Number, required: true, min: 1},
    nome: {type: String, required: true, minlength: 3, maxlength: 100},
    preco: {type: Number, required: true, min: 0},
    descricao: {type: String, maxlength: 200}
});

module.exports = mongoose.model("Produto", produtoSchema);