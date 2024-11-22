const mongoose = require("mongoose");

const torneioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date, required: true },
  descricao: { type: String, required: true },
  participantes: [{ type: String }],
});

const Torneio = mongoose.model("Torneio", torneioSchema);

module.exports = Torneio;
