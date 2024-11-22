const mongoose = require("mongoose");

const partidaSchema = new mongoose.Schema({
  torneio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Torneio",
    required: true,
  },
  timeA: { type: String, required: true },
  timeB: { type: String, required: true },
  golsTimeA: { type: Number, required: true },
  golsTimeB: { type: Number, required: true },
  data: { type: Date, required: true },
});

const Partida = mongoose.model("Partida", partidaSchema);

module.exports = Partida;
